import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111618] dark:text-white transition-colors duration-300 font-display">
            <Header />
            <main className="max-w-[1440px] mx-auto pb-20">
                {/* Hero Section */}
                <section className="px-10 py-8">
                    <div className="relative w-full h-[600px] rounded-xl overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1hfW-Z75ClOTf44gu8m7ncybBlyKRT7aMpwZda4dqX7LnnjEixZ0eVMUncHtF7_6dnjcKMhigLch0Vx48UQ0SCWnv6_SNEDTgmnSIo9WoPr8dCEa6E69DTdDmpZXWKs6lXmHaMFjTm_saFzxHC5OxgH2yRsyFKpVf-1tsq6sTDIcw-cdS0i6WtH33qObrXeyDW7OqnQyXTTrCGRtOx8WDs4Ow9GBWciMoJUszYXa27XIXVEHGtUqrjNyexPBZCFaUNMjGE6UyVA")' }}
                        ></div>
                        <div className="absolute bottom-0 left-0 p-12 max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="material-symbols-outlined text-sm">star</span>
                                Featured Article
                            </div>
                            <h1 className="text-white text-5xl font-black leading-tight tracking-tight mb-4">
                                The Hidden Gems of the Amalfi Coast: A 2024 Guide
                            </h1>
                            <p className="text-white/90 text-lg font-normal mb-8 leading-relaxed max-w-2xl">
                                Discover the secluded beaches and artisanal boutiques that make this Italian coastline a timeless escape. Beyond the crowds lies a world of quiet luxury and authentic culture.
                            </p>
                            <div className="flex items-center gap-6">
                                <button className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2 cursor-pointer">
                                    Read Full Story
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <div className="flex items-center gap-3 text-white">
                                    <div
                                        className="size-10 rounded-full border border-white/30 bg-cover bg-center"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCj0i4ODY2_N6Fg6hTSSKes61qh2swUC2mOY3puBYghuoeCeH082X8mak_17t4RyUJcDD9c8B8Y17cW96JLWgLqe-oVyV36SXMJLhthjQ6rB3e6QrXXOUl3CQgA75FiLsMX_e9-oxlK-aSeHBbkCAcxZMFFtx1Ggtcav2jpQWf7v9EX1c-PTsgp_yrv1mqhwUZCfs98vxcZeUp0EEr5kkDx9969hH0qUh8FmE0CiZ2iGM0xULWYYfdNewdEy2fq4UL6jaqd6jHbJg")' }}
                                    ></div>
                                    <div>
                                        <p className="text-sm font-bold">Elena Rossi</p>
                                        <p className="text-xs text-white/70">Travel Editor • 12 min read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Category Tags */}
                <section className="px-10 py-6">
                    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
                        <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-white px-6 text-sm font-bold transition-all cursor-pointer">
                            All Stories
                        </button>
                        <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 text-sm font-medium border border-[#f0f3f4] dark:border-gray-700 transition-all cursor-pointer">
                            Travel Tips
                        </button>
                        <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 text-sm font-medium border border-[#f0f3f4] dark:border-gray-700 transition-all cursor-pointer">
                            Destination Guide
                        </button>
                        <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 text-sm font-medium border border-[#f0f3f4] dark:border-gray-700 transition-all cursor-pointer">
                            Solo Travel
                        </button>
                        <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 text-sm font-medium border border-[#f0f3f4] dark:border-gray-700 transition-all cursor-pointer">
                            Foodie Travel
                        </button>
                        <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 text-sm font-medium border border-[#f0f3f4] dark:border-gray-700 transition-all cursor-pointer">
                            Industry News
                        </button>
                        <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 text-sm font-medium border border-[#f0f3f4] dark:border-gray-700 transition-all cursor-pointer">
                            Sustainable Gear
                        </button>
                    </div>
                </section>
                {/* Grid Feed Section */}
                <section className="px-10 pt-10">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-black tracking-tight">Latest Stories</h2>
                        <div className="flex items-center gap-2 text-primary font-bold cursor-pointer hover:underline">
                            View Archive <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <article className="flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative shadow-sm">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACk8XVUPhencma1CF77HcES_xWLnP-qxa30koxGryVmXy4Ef93crjpXnx0y5AkMX-8mvDs_FDpJAOhHXhjxPjd_PN9KMFst-aS2zo2gZMc_lYmrtFFrjHIjCI2qEKBwZYE1I53SKhWddJFVmRdCtNN4WJWKysuWi9jKMgI34oSnDU_DT2vir7u_kFjiJeorBxB__4siQk1ls-18JmD1ZAbkPYYDUCchRbNiHipZLpuXKkj7GABzlYbaRi7-sA8ZinsXhYX2hGPXA")' }}
                                ></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 dark:bg-background-dark/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">Tips</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-[#617c89] text-xs font-medium mb-2">
                                    <span>Mar 24, 2024</span>
                                    <span>•</span>
                                    <span>5 min read</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-2">10 Budget Hacks for Solo Travelers</h3>
                                <p className="text-[#617c89] dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                    Learn how to see the world without breaking the bank with these expert tips from seasoned explorers.
                                </p>
                            </div>
                        </article>
                        {/* Card 2 */}
                        <article className="flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative shadow-sm">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEU7R4ZODgzAu5wWqp8CFz3Bm009m8Tb7nqHvjLy2JgHhHgxUPmbEe_UHZeFCkSeBy-bUmJSOEI6Y4MOmyqp5lVlQUnBQg4zXxsCyuQrOrswEkoOufACU-Vr0-JzxC7e-P8rT9XqLEpIwDZb8D1TpxpX51xTpBjo1k98IPG1WyVrNqt_4CqLfYMniYZGMhMi2bxDCFJ3v9Cz_YfYDjEvUvgkJlU5OFZ7T9YL80ZvMQHg-fs5j_u2l7tRMNEUeotWia2Q7k-_Qazw")' }}
                                ></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 dark:bg-background-dark/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">Destination</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-[#617c89] text-xs font-medium mb-2">
                                    <span>Mar 22, 2024</span>
                                    <span>•</span>
                                    <span>8 min read</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-2">Why Tokyo is the Ultimate Foodie Destination</h3>
                                <p className="text-[#617c89] dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                    From street food stalls to Michelin stars, Tokyo is a culinary dream that surprises at every corner.
                                </p>
                            </div>
                        </article>
                        {/* Card 3 */}
                        <article className="flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative shadow-sm">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiVl_h_uiDy8vlC_Fpu_EIp9HB8P7w--tCmIO6QlgWZIRSROyf5OJQ4M1FIgZr56PDuPuCSXc02MmxB_3Lmb65LKKCZOUZY6Qu3LicyAF5f3Qa8EE9Ap7cYy3GVYLUpX085eyW-PuS6FMzawnvUhm8HouFFcje50VA05QzolvMvIE2L9kIh7PNUxGvOlvh-2Y82NNKsE2eKkUx4Zx4IdRHAu6ml0-YXMekLPmAPvV7MZ4IPLjrxVJt8ADnU6sZmZiyEGUMhzHEFw")' }}
                                ></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 dark:bg-background-dark/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">News</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-[#617c89] text-xs font-medium mb-2">
                                    <span>Mar 20, 2024</span>
                                    <span>•</span>
                                    <span>4 min read</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-2">New Airline Routes Opening This Summer</h3>
                                <p className="text-[#617c89] dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                    Major carriers announce direct flights to several hidden European gems starting this June.
                                </p>
                            </div>
                        </article>
                        {/* Card 4 */}
                        <article className="flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative shadow-sm">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnCWec_oRWCt8FHookfHd0cZssOH2FfXmuH1279x-kkcFdnyjQfZwD_-GZm0JXt-DHDVr1rxk4blxPR3FJbkhqTyJmL_Hph3KGEfSyw04o2uWthhhBBGfSm2rnHjqso4jYE0U24wTR5IKrgmeAG0mLfw-_MS_rsUWRmotlm8LRH6TLHEu_KEbZ-urowuszD9IJGC-yw3_8mjyWn3wvkoVFbeuyBqmSjVoLMl9LAINtzoQCJxbO_7SBS8CbxqfV6kQGT4DT1vwzZw")' }}
                                ></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 dark:bg-background-dark/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">Guide</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-[#617c89] text-xs font-medium mb-2">
                                    <span>Mar 18, 2024</span>
                                    <span>•</span>
                                    <span>10 min read</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-2">Northern Lights in Iceland: 2024 Update</h3>
                                <p className="text-[#617c89] dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                    A guide to catching the aurora borealis during the peak solar cycle this winter season.
                                </p>
                            </div>
                        </article>
                        {/* Card 5 */}
                        <article className="flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative shadow-sm">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDc4dOoSdBgZpVfJvkTmKRdTuEFpuKGNrNFFmFP8D71fVgi_39v8zvM-DG9LsN6o2vRaqHIqqxaiII5_o8j-MERLM27HRPjiss1VYfhPsWamwrgNnGs3PuIpZsCYbZwkCmNlhKiNE9KSvgo1n3Ige8mdUpET8MsC154vas6ZQJcqei3sBgHQ-Ehbgq34O8EP2Fs4cZY_BkJZAY9KF5CVjQe9wzlp3URDBoWGd57ba9WaLVwx9O0C-tPov2HajQZqJRQkgacvgEW2g")' }}
                                ></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 dark:bg-background-dark/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">Gear</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-[#617c89] text-xs font-medium mb-2">
                                    <span>Mar 15, 2024</span>
                                    <span>•</span>
                                    <span>6 min read</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-2">Sustainable Travel: Eco-Friendly Packing</h3>
                                <p className="text-[#617c89] dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                    Reduce your footprint with these essential gear recommendations for the conscious traveler.
                                </p>
                            </div>
                        </article>
                        {/* Card 6 */}
                        <article className="flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative shadow-sm">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGfyw4AyuzQbfs-La6vi7S3U9n2qVi-Q6x4SSQ7o2R2cIoxoJUyRsbfqQWbaaACzrcook8S0tjL5wkrHL7MULVFZWAqwykRYtQYFwhVfrl4DJpgc6hmf7DLv1OfRsJTwlmfGOS3FW6ahyK0z6CzytyquQLh68LrXGKdUDgy2YedWdMRVLb4BxeqTG729wntL4lBr0pwcaHs6k72BFnEcMCRraQhGYr0Z0eP57mP3DPpfBRSO_ZU9QiavnydQee-sXzvE8JSSd1iQ")' }}
                                ></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 dark:bg-background-dark/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">Destination</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-[#617c89] text-xs font-medium mb-2">
                                    <span>Mar 12, 2024</span>
                                    <span>•</span>
                                    <span>7 min read</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-2">A Weekend in Mexico City: Itinerary</h3>
                                <p className="text-[#617c89] dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                    The ultimate itinerary for a culture-filled weekend in CDMX, from art galleries to taco stands.
                                </p>
                            </div>
                        </article>
                    </div>
                    {/* Load More Button */}
                    <div className="flex justify-center mt-16">
                        <button className="bg-white dark:bg-gray-800 border border-[#f0f3f4] dark:border-gray-700 hover:border-primary text-primary px-10 py-4 rounded-lg font-bold transition-all shadow-sm cursor-pointer">
                            Load More Stories
                        </button>
                    </div>
                </section>
                {/* Newsletter Section */}
                <section className="mx-10 mt-20 mb-10 bg-primary/10 dark:bg-primary/5 rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-black mb-4">Never miss a story.</h2>
                    <p className="text-[#617c89] dark:text-gray-400 mb-8 max-w-lg mx-auto">
                        Join our community of 50,000+ travelers and get our weekly newsletter with hidden gems and travel hacks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input className="flex-1 rounded-lg border-none bg-white dark:bg-gray-800 px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50" placeholder="Your email address" type="email" />
                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all cursor-pointer">
                            Subscribe
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
