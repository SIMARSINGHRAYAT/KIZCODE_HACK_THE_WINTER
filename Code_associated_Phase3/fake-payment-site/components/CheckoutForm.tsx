import { FormEvent } from "react";

interface Props {
    loading: boolean;
    onSubmit: () => void;
    currency: string;
}

export default function CheckoutForm({ loading, onSubmit, currency }: Props) {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <svg className="w-32 h-32 text-indigo-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
            </div>

            <div className="p-8 sm:p-10 space-y-8 relative">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Secure Checkout</h3>
                    <p className="text-slate-500">Encrypted payment gateway</p>
                </div>

                <div className="space-y-6">
                    {/* Email Input */}
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-indigo-600 transition-colors">
                            Email Address
                        </label>
                        <input
                            type="email"
                            defaultValue="simar@gmail.com"
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-900 font-medium focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-300"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Card Details */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                            Card Information
                        </label>
                        <div className="space-y-4">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="0000 0000 0000 0000"
                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl pl-14 pr-4 py-3 text-slate-900 font-mono text-lg tracking-widest focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-300"
                                    defaultValue="4242 4242 4242 4242"
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                </div>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 grayscale group-focus-within:grayscale-0 transition-all opacity-50 group-focus-within:opacity-100">
                                    <div className="h-6 w-10 bg-white rounded border border-slate-200 flex items-center justify-center">
                                        <span className="text-[8px] font-bold text-blue-800">VISA</span>
                                    </div>
                                    <div className="h-6 w-10 bg-white rounded border border-slate-200 flex items-center justify-center">
                                        <div className="flex -space-x-1">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                            <div className="w-3 h-3 rounded-full bg-orange-500/80"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1 group-focus-within:text-indigo-600">
                                        Expiry Date
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="MM / YY"
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-center text-slate-900 font-mono focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-300"
                                        defaultValue="12 / 28"
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1 group-focus-within:text-indigo-600">
                                        CVC / CVV
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-center text-slate-900 font-mono focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-300"
                                        defaultValue="123"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Name on Card */}
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-indigo-600 transition-colors">
                            Cardholder Name
                        </label>
                        <input
                            type="text"
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-900 font-medium focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-300"
                            placeholder="NAME ON CARD"
                            defaultValue="Simar singh rayat"
                        />
                    </div>
                </div>

                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full group relative flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl shadow-indigo-500/20 text-lg font-bold text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden ${loading ? "bg-slate-400 cursor-not-allowed shadow-none" : "bg-gradient-to-r from-indigo-600 to-indigo-700 hover:shadow-indigo-500/40"
                            }`}
                    >
                        {loading && (
                            <div className="absolute inset-0 bg-white/20 animate-pulse-fast" />
                        )}
                        <span className="relative flex items-center justify-center gap-3">
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Authorizing...
                                </>
                            ) : (
                                <>
                                    Complete Payment
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </>
                            )}
                        </span>
                    </button>
                    <div className="text-center mt-6 flex items-center justify-center text-[10px] text-slate-400 gap-2 uppercase tracking-widest font-bold">
                        <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
                        <span>256-bit SSL Encrypted</span>
                    </div>
                </div>
            </div>
        </form>
    );
}
