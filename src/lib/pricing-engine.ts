import { 
  QuoteConfiguration, 
  QuoteCalculationResult, 
  CurrencyCode, 
  DimensionUnit,
  PricingMode 
} from "@/types";
import { PRODUCT_TYPES, MATERIALS, FINISHES, CURRENCIES } from "@/data/catalog";

export function convertToInches(value: number, unit: DimensionUnit): number {
  if (unit === 'inch') return value;
  if (unit === 'cm') return value / 2.54;
  if (unit === 'mm') return value / 25.4;
  return value;
}

export function convertFromInches(inches: number, targetUnit: DimensionUnit): number {
  if (targetUnit === 'inch') return inches;
  if (targetUnit === 'cm') return inches * 2.54;
  if (targetUnit === 'mm') return inches * 25.4;
  return inches;
}

export function calculateQuotePrice(config: QuoteConfiguration): QuoteCalculationResult {
  const product = PRODUCT_TYPES.find(p => p.id === config.productTypeId) || PRODUCT_TYPES[0];
  const material = MATERIALS.find(m => m.id === config.materialId) || MATERIALS[0];
  const currency = CURRENCIES[config.currency] || CURRENCIES.USD;

  // Convert dimensions to normalized inches for volume & surface calculation
  const lengthIn = convertToInches(config.dimensions.length, config.dimensions.unit);
  const widthIn = convertToInches(config.dimensions.width, config.dimensions.unit);
  const heightIn = convertToInches(config.dimensions.height, config.dimensions.unit);

  const defaultLengthIn = convertToInches(product.defaultDimensions.length, product.defaultDimensions.unit);
  const defaultWidthIn = convertToInches(product.defaultDimensions.width, product.defaultDimensions.unit);
  const defaultHeightIn = convertToInches(product.defaultDimensions.height, product.defaultDimensions.unit);

  // Surface area scaling factor
  const defaultSurfaceArea = 2 * (defaultLengthIn * defaultWidthIn + defaultLengthIn * defaultHeightIn + defaultWidthIn * defaultHeightIn);
  const currentSurfaceArea = 2 * (lengthIn * widthIn + lengthIn * heightIn + widthIn * heightIn);
  const areaRatio = Math.max(0.2, currentSurfaceArea / Math.max(1, defaultSurfaceArea));
  const dimensionMultiplier = Math.pow(areaRatio, 0.42); // sublinear scaling

  // Base product unit price
  const basePrice = product.basePriceUSD;
  const materialMultiplier = material.costMultiplier || 1.0;

  // Printing cost multiplier
  let printMultiplier = 1.0;
  if (config.printing === 'No Printing') printMultiplier = 0.75;
  if (config.printing === 'CMYK') printMultiplier = 1.0;
  if (config.printing === 'Pantone') printMultiplier = 1.20;
  if (config.printing === 'CMYK + Pantone') printMultiplier = 1.35;

  // Finishing add-ons
  let finishesUnitCost = 0;
  if (config.finishes && config.finishes.length > 0) {
    config.finishes.forEach(finishId => {
      const f = FINISHES.find(item => item.id === finishId);
      if (f) {
        finishesUnitCost += f.unitCostUSD;
      }
    });
  }

  // Quantity volume discount curve
  // Normalized at 1000 units = 1.0x factor
  const quantity = Math.max(10, config.quantity || 1000);
  const volumeFactor = Math.pow(1000 / quantity, 0.28);

  // Calculate raw unit price in USD
  const calculatedUnitUSD = (basePrice * materialMultiplier * dimensionMultiplier * printMultiplier * volumeFactor) + finishesUnitCost;
  
  // Floor check to ensure sensible real-world bounds
  const minFloor = config.category === 'rigid-boxes' ? 1.80 : (config.category === 'corrugated-boxes' ? 0.75 : (config.category === 'paper-bags' ? 0.25 : 0.35));
  const unitPriceUSD = Math.max(minFloor, parseFloat(calculatedUnitUSD.toFixed(2)));
  const totalPriceUSD = Math.round(unitPriceUSD * quantity);

  // Convert to target currency
  const exchangeRate = currency.exchangeRate || 1.0;
  const unitPriceLocal = parseFloat((unitPriceUSD * exchangeRate).toFixed(2));
  const totalPriceLocal = Math.round(totalPriceUSD * exchangeRate);

  // Volume savings calculation (compared to 100-unit baseline)
  const baselineUnitUSD = (basePrice * materialMultiplier * dimensionMultiplier * printMultiplier * Math.pow(1000 / 100, 0.28)) + finishesUnitCost;
  const volumeSavingsPercent = Math.max(0, Math.min(65, Math.round(((baselineUnitUSD - unitPriceUSD) / baselineUnitUSD) * 100)));

  // Estimated lead days
  let estimatedLeadDays = 10;
  if (config.category === 'folding-cartons') estimatedLeadDays = quantity > 5000 ? 10 : 7;
  if (config.category === 'corrugated-boxes') estimatedLeadDays = quantity > 5000 ? 12 : 8;
  if (config.category === 'rigid-boxes') estimatedLeadDays = quantity > 2500 ? 15 : 12;
  if (config.category === 'paper-bags') estimatedLeadDays = quantity > 5000 ? 10 : 7;

  return {
    unitPriceUSD,
    totalPriceUSD,
    unitPriceLocal,
    totalPriceLocal,
    currency: config.currency,
    currencySymbol: currency.symbol,
    pricingMode: product.pricingMode || 'INSTANT_ESTIMATE',
    estimatedLeadDays,
    volumeSavingsPercent,
    breakdown: {
      baseUnit: basePrice,
      materialFactor: materialMultiplier,
      printingCost: printMultiplier,
      finishesCost: finishesUnitCost,
      volumeFactor
    }
  };
}
