"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { StoredQuote, SampleRequest, QuoteStatus, PricingMode } from "@/types";
import { 
  Box, 
  Layers, 
  Sparkles, 
  DollarSign, 
  CheckCircle2, 
  Clock, 
  Users, 
  Sliders, 
  Search, 
  Filter, 
  Edit3, 
  Eye, 
  FileText, 
  ArrowUpRight,
  TrendingUp,
  Package,
  Globe,
  Settings
} from "lucide-react";

export default function AdminDashboardPage() {
  const [quotes, setQuotes] = useState<StoredQuote[]>([]);
  const [samples, setSamples] = useState<SampleRequest[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Navigation Tabs inside Admin
  const [activeTab, setActiveTab] = useState<'quotes' | 'samples' | 'pricing' | 'products'>('quotes');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Selected Quote for editing / detail view
  const [selectedQuote, setSelectedQuote] = useState<StoredQuote | null>(null);
  const [editStatus, setEditStatus] = useState<QuoteStatus>('New');
  const [editCustomPrice, setEditCustomPrice] = useState<string>('');
  const [editNotes, setEditNotes] = useState<string>('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [quotesRes, samplesRes] = await Promise.all([
        fetch('/api/quotes'),
        fetch('/api/samples')
      ]);
      const quotesData = await quotesRes.json();
      const samplesData = await samplesRes.json();

      if (quotesData.success) setQuotes(quotesData.quotes);
      if (samplesData.success) setSamples(samplesData.samples);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEdit = (quote: StoredQuote) => {
    setSelectedQuote(quote);
    setEditStatus(quote.status);
    setEditCustomPrice(quote.adminCustomPriceUSD ? quote.adminCustomPriceUSD.toString() : quote.result.totalPriceUSD.toString());
    setEditNotes(quote.adminNotes || '');
  };

  const handleSaveQuote = async () => {
    if (!selectedQuote) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/quotes/${selectedQuote.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: editStatus,
          adminCustomPriceUSD: parseFloat(editCustomPrice) || selectedQuote.result.totalPriceUSD,
          adminNotes: editNotes
        })
      });
      const data = await res.json();
      if (data.success) {
        setQuotes(quotes.map(q => q.id === selectedQuote.id ? data.quote : q));
        setSelectedQuote(data.quote);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  const allStatuses: QuoteStatus[] = [
    'New',
    'Reviewing',
    'Quote Sent',
    'Customer Responded',
    'Sample Requested',
    'Sample Approved',
    'Order Confirmed',
    'Production',
    'Quality Check',
    'Shipped',
    'Completed',
    'Cancelled'
  ];

  const filteredQuotes = quotes.filter(q => {
    const matchesSearch = 
      q.quoteNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.customer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.customer.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || q.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPipelineValue = quotes.reduce((sum, q) => sum + (q.adminCustomPriceUSD || q.result.totalPriceUSD), 0);
  const activeOrdersCount = quotes.filter(q => ['Order Confirmed', 'Production', 'Quality Check', 'Shipped'].includes(q.status)).length;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      
      {/* Top Admin Navbar */}
      <header className="bg-slate-950 text-white px-6 py-4 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-serif font-bold text-base">
              P
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              Packmenn<span className="text-emerald-400">.</span>
            </span>
          </Link>
          <span className="text-slate-600">|</span>
          <span className="text-xs font-mono bg-slate-800 px-2.5 py-1 rounded text-emerald-400">
            Enterprise Admin Engine v2.4
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/" className="text-xs text-slate-400 hover:text-white font-medium transition-colors">
            View Live Storefront ↗
          </Link>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex justify-between items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Quotes</p>
              <p className="text-2xl font-serif font-bold text-slate-950 mt-1">{quotes.length}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
              <FileText className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex justify-between items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Pipeline Value</p>
              <p className="text-2xl font-serif font-bold text-emerald-800 mt-1">
                ${totalPipelineValue.toLocaleString()}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex justify-between items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Samples</p>
              <p className="text-2xl font-serif font-bold text-slate-950 mt-1">{samples.length}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
              <Package className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex justify-between items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Live Production</p>
              <p className="text-2xl font-serif font-bold text-indigo-900 mt-1">{activeOrdersCount}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-700">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 gap-6 mb-6">
          <button
            onClick={() => setActiveTab('quotes')}
            className={`pb-3 text-xs font-bold transition-all border-b-2 ${
              activeTab === 'quotes' ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Quotation Management ({quotes.length})
          </button>
          <button
            onClick={() => setActiveTab('samples')}
            className={`pb-3 text-xs font-bold transition-all border-b-2 ${
              activeTab === 'samples' ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Sample Requests ({samples.length})
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`pb-3 text-xs font-bold transition-all border-b-2 ${
              activeTab === 'pricing' ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Pricing Engine Rules
          </button>
        </div>

        {/* ===================== TAB: QUOTES MANAGEMENT ===================== */}
        {activeTab === 'quotes' && (
          <div className="space-y-4">
            
            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by quote #, client, email, country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-slate-500 font-medium">Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold outline-none"
                >
                  <option value="all">All Statuses ({quotes.length})</option>
                  {allStatuses.map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quotes Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600">
                  <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="px-5 py-3">Quote #</th>
                      <th className="px-5 py-3">Customer & Company</th>
                      <th className="px-5 py-3">Product / Category</th>
                      <th className="px-5 py-3">Quantity</th>
                      <th className="px-5 py-3">Est. Value</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Date</th>
                      <th className="px-5 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredQuotes.map((q) => (
                      <tr key={q.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-5 py-4 font-mono font-bold text-slate-900">{q.quoteNumber}</td>
                        <td className="px-5 py-4">
                          <p className="font-bold text-slate-900">{q.customer.name}</p>
                          <p className="text-[11px] text-slate-500">{q.customer.company} • {q.customer.country}</p>
                        </td>
                        <td className="px-5 py-4">
                          <p className="font-semibold text-slate-900">{q.config.productTypeName}</p>
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded capitalize">
                            {q.config.category.replace('-', ' ')}
                          </span>
                        </td>
                        <td className="px-5 py-4 font-bold text-slate-900">
                          {q.config.quantity.toLocaleString()} pcs
                        </td>
                        <td className="px-5 py-4 font-bold text-slate-950">
                          ${(q.adminCustomPriceUSD || q.result.totalPriceUSD).toLocaleString()}
                        </td>
                        <td className="px-5 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            q.status === 'New' ? 'bg-amber-100 text-amber-900' :
                            q.status === 'Production' ? 'bg-indigo-100 text-indigo-900' :
                            q.status === 'Quote Sent' ? 'bg-blue-100 text-blue-900' :
                            q.status === 'Completed' ? 'bg-emerald-100 text-emerald-900' :
                            'bg-slate-100 text-slate-800'
                          }`}>
                            {q.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-slate-400 text-[11px]">
                          {new Date(q.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <button
                            onClick={() => handleOpenEdit(q)}
                            className="px-3 py-1.5 bg-slate-950 text-white rounded-lg text-[11px] font-bold hover:bg-slate-800 transition-colors"
                          >
                            Manage Quote
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ===================== TAB: SAMPLE REQUESTS ===================== */}
        {activeTab === 'samples' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="px-5 py-3">Sample Ref</th>
                    <th className="px-5 py-3">Customer</th>
                    <th className="px-5 py-3">Product Structure</th>
                    <th className="px-5 py-3">Dispatch Address</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {samples.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-slate-900">{s.sampleNumber}</td>
                      <td className="px-5 py-4">
                        <p className="font-bold text-slate-900">{s.customer.name}</p>
                        <p className="text-[11px] text-slate-500">{s.customer.company} • {s.customer.email}</p>
                      </td>
                      <td className="px-5 py-4 font-semibold text-slate-900">
                        {s.productTypeName} ({s.category})
                      </td>
                      <td className="px-5 py-4 text-slate-600 text-[11px]">
                        {s.customer.address || s.customer.country}
                      </td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                          {s.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-400 text-[11px]">
                        {new Date(s.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ===================== TAB: PRICING ENGINE RULES ===================== */}
        {activeTab === 'pricing' && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-950">
                Backend Pricing Configuration Rules
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Manage base multipliers, volume discount curves, and material substrate markups without modifying frontend code.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-900">Folding Cartons Base</p>
                <p className="text-xl font-serif font-bold text-slate-950 mt-1">$0.58 / unit</p>
                <p className="text-[11px] text-slate-500 mt-1">1000-unit reference curve</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-900">Corrugated Mailers Base</p>
                <p className="text-xl font-serif font-bold text-slate-950 mt-1">$1.25 / unit</p>
                <p className="text-[11px] text-slate-500 mt-1">1000-unit reference curve</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-900">Luxury Rigid Boxes Base</p>
                <p className="text-xl font-serif font-bold text-slate-950 mt-1">$3.80 / unit</p>
                <p className="text-[11px] text-slate-500 mt-1">1000-unit reference curve</p>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                <strong>System Active:</strong> All frontend calculations are executed server-side via the modular pricing engine in <code className="font-mono bg-white px-1 py-0.5 rounded">src/lib/pricing-engine.ts</code>.
              </span>
            </div>
          </div>
        )}

      </div>

      {/* Quote Edit & Price Override Modal Drawer */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setSelectedQuote(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-lg font-bold"
            >
              ✕
            </button>

            <div className="flex justify-between items-start mb-6 pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  {selectedQuote.quoteNumber}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Manage Quote & Production Status
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block font-bold uppercase">Calculated Value</span>
                <span className="text-xl font-serif font-bold text-slate-950">
                  ${selectedQuote.result.totalPriceUSD.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="space-y-5 text-xs text-slate-700">
              
              {/* Customer Box */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 grid grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Customer</span>
                  <p className="font-bold text-slate-900">{selectedQuote.customer.name}</p>
                  <p className="text-slate-500">{selectedQuote.customer.company} • {selectedQuote.customer.email}</p>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Destination</span>
                  <p className="font-bold text-slate-900">{selectedQuote.customer.country}</p>
                  <p className="text-slate-500">{selectedQuote.customer.phone || 'No phone provided'}</p>
                </div>
              </div>

              {/* Specs Box */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Product Structure:</span>
                  <span className="font-bold text-slate-900">{selectedQuote.config.productTypeName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dimensions:</span>
                  <span className="font-bold text-slate-900">
                    {selectedQuote.config.dimensions.length} × {selectedQuote.config.dimensions.width} × {selectedQuote.config.dimensions.height} {selectedQuote.config.dimensions.unit}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Material Substrate:</span>
                  <span className="font-bold text-slate-900">{selectedQuote.config.materialName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Printing:</span>
                  <span className="font-bold text-slate-900">{selectedQuote.config.printing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Quantity:</span>
                  <span className="font-bold text-slate-900">{selectedQuote.config.quantity.toLocaleString()} units</span>
                </div>
              </div>

              {/* Status Update */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Update Lifecycle Status (Full Production Pipeline)
                </label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value as QuoteStatus)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none"
                >
                  {allStatuses.map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              {/* Custom Price Override */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Admin Price Override / Custom Discount Total (USD)
                </label>
                <input
                  type="number"
                  value={editCustomPrice}
                  onChange={(e) => setEditCustomPrice(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none"
                />
              </div>

              {/* Admin Notes */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Internal Production / Prepress Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Approved 3D proof on Sept 23, scheduled on 6-color Heidelberg press..."
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none"
                />
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  disabled={updating}
                  onClick={handleSaveQuote}
                  className="flex-1 py-3 bg-slate-950 text-white rounded-xl font-bold text-xs hover:bg-slate-800 transition-colors shadow-sm"
                >
                  {updating ? "Saving Changes..." : "Update Quote & Status"}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedQuote(null)}
                  className="px-5 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold text-xs hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
