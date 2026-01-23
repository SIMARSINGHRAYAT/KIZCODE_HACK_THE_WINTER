import { FirewallResponse } from "@/types";
import { useState } from "react";

interface Props {
    result: FirewallResponse | null;
    loading: boolean;
    error: string | null;
    // Cart Props
    amount: number;
    currency: string;
    selectedProduct: string;
    onProductChange: (val: string) => void;
    onCurrencyChange: (val: string) => void;
    merchantName: string;
}

export default function ResultDisplay({
    result,
    loading,
    error,
    amount,
    currency,
    selectedProduct,
    onProductChange,
    onCurrencyChange,
    merchantName
}: Props) {
    const [showDebug, setShowDebug] = useState(false);

    // Render "Order Summary" if no result yet
    if (!result && !error) {
        return (
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden h-full flex flex-col">
                <div className="p-8 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-800">Your Order</h3>
                    <div className="relative">
                        <select
                            value={currency}
                            onChange={(e) => onCurrencyChange(e.target.value)}
                            className="appearance-none bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-lg px-3 py-1.5 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer shadow-sm"
                        >
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="INR">INR (₹)</option>
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                    <div className="space-y-4 mb-8">
                        {/* Fake Items */}
                        <div
                            onClick={() => onProductChange("STANDARD")}
                            className={`flex gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${selectedProduct === "STANDARD" ? 'border-indigo-500 bg-indigo-50/10 shadow-lg shadow-indigo-100' : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'}`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-colors ${selectedProduct === "STANDARD" ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-400'}`}>
                                ⭐
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className={`font-bold text-base ${selectedProduct === "STANDARD" ? 'text-indigo-900' : 'text-slate-700'}`}>Premium Plan</h4>
                                    <span className="font-bold text-slate-900">{currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"}{currency === "INR" ? (49.99 * 91).toFixed(0) : 49.99}</span>
                                </div>
                                <p className="text-sm text-slate-500">Monthly renewal. Cancel anytime.</p>
                            </div>
                        </div>

                        <div
                            onClick={() => onProductChange("TRIAL")}
                            className={`flex gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${selectedProduct === "TRIAL" ? 'border-orange-500 bg-orange-50/10 shadow-lg shadow-orange-100' : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'}`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-colors ${selectedProduct === "TRIAL" ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-400'}`}>
                                🎁
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className={`font-bold text-base ${selectedProduct === "TRIAL" ? 'text-orange-900' : 'text-slate-700'}`}>14-Day Free Trial</h4>
                                    <span className="font-bold text-slate-900 line-through opacity-50">{currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"}15.00</span>
                                </div>
                                <p className="text-sm text-orange-600 font-medium">Free today. {currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"}{currency === "INR" ? (99.99 * 91).toFixed(0) : 99.99}/mo after.</p>
                            </div>
                        </div>

                        <div
                            onClick={() => onProductChange("CHEAP")}
                            className={`flex gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${selectedProduct === "CHEAP" ? 'border-emerald-500 bg-emerald-50/10 shadow-lg shadow-emerald-100' : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'}`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-colors ${selectedProduct === "CHEAP" ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                                ⚡
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className={`font-bold text-base ${selectedProduct === "CHEAP" ? 'text-emerald-900' : 'text-slate-700'}`}>One-Time Pass</h4>
                                    <span className="font-bold text-slate-900">{currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"}{currency === "INR" ? (1.00 * 91).toFixed(0) : 1.00}</span>
                                </div>
                                <p className="text-sm text-slate-500">24-hour access. No recurring fees.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto border-t border-slate-100 pt-6 space-y-3">
                        <div className="flex justify-between text-sm text-slate-500 font-medium">
                            <span>Subtotal</span>
                            <span>{currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"}{amount}</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-500 font-medium">
                            <span>Tax (0%)</span>
                            <span>0.00</span>
                        </div>
                        <div className="flex justify-between text-xl font-black text-slate-900 pt-2 border-t border-slate-100 mt-2">
                            <span>Total Due</span>
                            <span id="checkout-total-amount" data-currency={currency}>{currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"}{amount}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Render "Receipt" or "Error"
    const isAllow = result?.decision === "ALLOW";

    return (
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden relative">
            {/* Receipt Header */}
            <div className={`h-3 w-full ${isAllow ? "bg-emerald-500" : "bg-red-500"}`} />

            <div className="p-10 text-center">
                {error ? (
                    <div className="mb-8 animate-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <span className="text-4xl">❌</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Connection Error</h3>
                        <p className="text-slate-500">{error}</p>
                    </div>
                ) : isAllow ? (
                    <div className="mb-10 animate-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-100">
                            <svg className="w-12 h-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-2">Payment Successful</h3>
                        <p className="text-slate-500 font-medium">Transaction ID: #{Math.floor(Math.random() * 1000000)}</p>
                    </div>
                ) : (
                    <div className="mb-10 animate-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-red-100">
                            <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-2">Transaction Declined</h3>
                        <p className="text-slate-500 font-medium">Please contact your bank.</p>
                    </div>
                )}

                {/* Receipt Details */}
                {result && (
                    <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100 text-sm space-y-4 mb-8">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">Merchant</span>
                            <span className="font-bold text-slate-900 text-base">{merchantName}</span>
                        </div>
                        <div className="h-px bg-slate-200 w-full" />
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">Amount</span>
                            <span className="font-bold text-slate-900 text-base">{currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"}{amount}</span>
                        </div>
                        <div className="h-px bg-slate-200 w-full" />
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">Date</span>
                            <span className="font-bold text-slate-900 text-base">{new Date().toLocaleDateString()}</span>
                        </div>
                    </div>
                )}

                <button
                    onClick={() => window.location.reload()}
                    className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-widest"
                >
                    Start New Transaction
                </button>
            </div>

            {/* RAG Analysis Section */}
            {result && (
                <div className="border-t border-slate-100 p-6 bg-slate-50/30">
                    <RAGAnalysis
                        payload={{
                            transactionId: "TX-" + Math.random(),
                            merchantId: merchantName.toLowerCase().replace(/\s/g, "_"),
                            customerId: "CUST-DEMO",
                            amount: amount,
                            currency: currency,
                            timestamp: new Date().toISOString(),
                            isRecurring: true,
                            planId: "demo_plan",
                            status: "PENDING",
                            wasCustomerCancelled: false
                        }}
                        merchantName={merchantName}
                    />
                </div>
            )}

            {/* Technical Footer (Expandable) */}
            {result && (
                <div className="border-t border-slate-100">
                    <button
                        onClick={() => setShowDebug(!showDebug)}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors group"
                    >
                        <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-600">[DEBUG] LATENCY: {result.latencyMs}ms</span>
                        <span className="text-[10px] font-bold text-slate-400 group-hover:text-indigo-600">{showDebug ? "HIDE LOGS" : "SHOW LOGS"}</span>
                    </button>

                    {showDebug && (
                        <div className="p-6 bg-slate-900 text-slate-300 text-xs font-mono text-left space-y-4 animate-in slide-in-from-top-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="text-slate-500 block text-[10px] mb-1">RISK_LEVEL</span>
                                    <span className={`px-2 py-0.5 rounded ${result.riskLevel === "HIGH" ? "bg-red-500/20 text-red-400" : "bg-emerald-500/20 text-emerald-400"}`}>{result.riskLevel}</span>
                                </div>
                                <div>
                                    <span className="text-slate-500 block text-[10px] mb-1">TRUST_SCORE</span>
                                    <span className="text-white font-bold">{result.trustScore}/100</span>
                                </div>
                            </div>
                            <div>
                                <span className="text-slate-500 block text-[10px] mb-1">RULES_TRIGGERED</span>
                                <div className="text-red-300 bg-red-900/10 p-2 rounded border border-red-900/20">
                                    {result.triggeredRules.length ? result.triggeredRules.join(", ") : "None"}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

import { investigateTransaction } from "@/lib/api";
import { InvestigationResponse, TransactionPayload } from "@/types";

function RAGAnalysis({ payload, merchantName }: { payload: Partial<TransactionPayload>, merchantName: string }) {
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState<InvestigationResponse | null>(null);

    const handleAnalyze = async () => {
        setLoading(true);
        // Ensure merchant_name is passed correctly
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const enrichedPayload = { ...payload, merchant_name: merchantName } as any;
        const res = await investigateTransaction(enrichedPayload);
        setAnalysis(res);
        setLoading(false);
    };

    if (!analysis) {
        return (
            <button
                onClick={handleAnalyze}
                disabled={loading}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Agent Analyzing...</span>
                    </>
                ) : (
                    <>
                        <span className="text-xl">🕵️</span>
                        <span>Investigate with Fraud Agent</span>
                    </>
                )}
            </button>
        );
    }

    const { investigation } = analysis;

    return (
        <div className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-xl shadow-indigo-100/50 animate-in fade-in slide-in-from-bottom-4 ring-1 ring-indigo-50">
            <h4 className="font-bold text-indigo-900 mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2">
                    <span className="text-xl">🤖</span>
                    Agent Findings
                </span>
                <span className="text-[10px] font-bold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full uppercase tracking-wider">{investigation.confidence} CONFIDENCE</span>
            </h4>

            <div className="bg-indigo-50/50 rounded-xl p-4 mb-4 border border-indigo-100/50">
                <p className="text-sm text-indigo-900 leading-relaxed italic">
                    &quot;{investigation.risk_summary}&quot;
                </p>
            </div>

            {investigation.cancellation_instructions && investigation.cancellation_instructions.length > 0 && (
                <div>
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Cancellation Steps</h5>
                    <div className="space-y-2">
                        {investigation.cancellation_instructions.map((step, i) => (
                            <div key={i} className="flex gap-3 items-start text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <span className="font-bold text-indigo-500 bg-indigo-50 w-5 h-5 flex items-center justify-center rounded-full text-xs shrink-0 mt-0.5">{i + 1}</span>
                                <span>{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
