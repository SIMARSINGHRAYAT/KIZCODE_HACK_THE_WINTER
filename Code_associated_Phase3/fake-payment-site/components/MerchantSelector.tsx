import { MerchantProfile } from "@/types";


interface Props {
    merchants: MerchantProfile[];
    selectedId: string;
    onSelect: (merchant: MerchantProfile) => void;
}

export default function MerchantSelector({ merchants, selectedId, onSelect }: Props) {
    return (
        <div className="mb-10 animate-in fade-in slide-in-from-top-2 duration-500">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Select Experience</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {merchants.map((merchant) => {
                    const isSelected = selectedId === merchant.id;
                    const storeName = merchant.name;

                    // Brand Colors based on name hash or specific IDs (Simulated for visual variety)
                    const isMultimedia = merchant.id.includes("stream");
                    const isFitness = merchant.id.includes("gym");
                    const isNews = merchant.id.includes("news");

                    const brandColor = isMultimedia ? "bg-indigo-500" : isFitness ? "bg-orange-500" : isNews ? "bg-blue-500" : "bg-slate-800";
                    const brandShadow = isMultimedia ? "shadow-indigo-500/20" : isFitness ? "shadow-orange-500/20" : isNews ? "shadow-blue-500/20" : "shadow-slate-500/20";

                    return (
                        <button
                            key={merchant.id}
                            onClick={() => onSelect(merchant)}
                            className={`relative group overflow-hidden p-4 rounded-2xl border transition-all duration-300 text-left h-24 flex flex-col justify-between ${isSelected
                                ? "bg-white border-transparent ring-2 ring-indigo-600 shadow-xl shadow-indigo-100"
                                : "bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1"
                                }`}
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <div className={`w-16 h-16 rounded-full blur-xl ${brandColor}`} />
                            </div>

                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shadow-lg ${brandColor} ${brandShadow} mb-2`}>
                                {storeName.charAt(0)}
                            </div>

                            <div>
                                <div className={`text-sm font-bold leading-tight ${isSelected ? "text-slate-900" : "text-slate-700"}`}>
                                    {storeName}
                                </div>
                                <div className="text-[10px] text-slate-400 font-medium truncate">
                                    Premium Plan
                                </div>
                            </div>

                            {isSelected && (
                                <div className="absolute inset-0 border-2 border-indigo-600 rounded-2xl pointer-events-none" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
