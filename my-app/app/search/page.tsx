import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SearchResults() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111618] dark:text-white transition-colors duration-200">
            <Header />
            <main className="max-w-[1440px] mx-auto px-4 lg:px-40 py-8">
                {/* Breadcrumbs */}
                <nav className="flex flex-wrap gap-2 mb-6">
                    <Link className="text-[#617c89] text-sm font-medium hover:text-primary transition-colors" href="/">Home</Link>
                    <span className="text-[#617c89] text-sm">/</span>
                    <Link className="text-[#617c89] text-sm font-medium hover:text-primary transition-colors" href="/search">North Africa</Link>
                    <span className="text-[#617c89] text-sm">/</span>
                    <span className="text-[#111618] dark:text-white text-sm font-semibold">Sahara Tours</span>
                </nav>
                {/* Page Heading & Sort */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[#111618] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Explore Tours in Sahara</h1>
                        <p className="text-[#617c89] text-base font-normal">124 breathtaking tours found for your destination</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[#617c89] text-sm font-medium whitespace-nowrap">Sort by:</span>
                        <select className="form-select rounded-lg border-none bg-white dark:bg-white/10 text-sm font-semibold focus:ring-primary h-10 px-4 min-w-[160px]">
                            <option>Popularity</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Highest Rated</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-72 flex-shrink-0">
                        <div className="sticky top-24 flex flex-col gap-8 bg-white dark:bg-white/5 p-6 rounded-xl shadow-sm border border-[#f0f3f4] dark:border-white/10">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-[#111618] dark:text-white font-bold text-lg">Filters</h3>
                                    <button className="text-primary text-xs font-bold hover:underline">Clear All</button>
                                </div>
                                {/* Price Range Slider Component */}
                                <div className="mb-8">
                                    <p className="text-[#111618] dark:text-white text-sm font-bold mb-4">Price Range</p>
                                    <div className="flex h-[38px] w-full pt-1.5 px-1">
                                        <div className="flex h-1.5 w-full rounded-full bg-[#dbe2e6] dark:bg-white/10 relative">
                                            <div className="absolute left-[15%] right-[25%] h-1.5 bg-primary rounded-full"></div>
                                            <div className="absolute left-[15%] -top-1.5 flex flex-col items-center gap-1 -translate-x-1/2">
                                                <div className="size-4 rounded-full bg-white dark:bg-white border-2 border-primary shadow-md"></div>
                                                <p className="text-[#111618] dark:text-white text-[10px] font-bold mt-1">$200</p>
                                            </div>
                                            <div className="absolute right-[25%] -top-1.5 flex flex-col items-center gap-1 translate-x-1/2">
                                                <div className="size-4 rounded-full bg-white dark:bg-white border-2 border-primary shadow-md"></div>
                                                <p className="text-[#111618] dark:text-white text-[10px] font-bold mt-1">$3,500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Star Rating */}
                                <div className="mb-8">
                                    <p className="text-[#111618] dark:text-white text-sm font-bold mb-3">Star Rating</p>
                                    <div className="flex flex-col gap-2">
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input defaultChecked className="rounded text-primary focus:ring-primary bg-background-light dark:bg-white/10 border-none" type="checkbox" />
                                            <div className="flex text-yellow-400">
                                                <span className="material-symbols-outlined text-sm filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-sm filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-sm filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-sm filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-sm filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                            </div>
                                            <span className="text-xs text-[#617c89]">5 Stars</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input defaultChecked className="rounded text-primary focus:ring-primary bg-background-light dark:bg-white/10 border-none" type="checkbox" />
                                            <div className="flex text-yellow-400">
                                                <span className="material-symbols-outlined text-sm filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-sm filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-sm filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-sm filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-sm">star</span>
                                            </div>
                                            <span className="text-xs text-[#617c89]">4+ Stars</span>
                                        </label>
                                    </div>
                                </div>
                                {/* Duration */}
                                <div className="mb-8">
                                    <p className="text-[#111618] dark:text-white text-sm font-bold mb-3">Duration</p>
                                    <div className="flex flex-col gap-2">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input className="rounded text-primary focus:ring-primary bg-background-light dark:bg-white/10 border-none" type="checkbox" />
                                            <span className="text-sm font-medium">1-3 Days</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input defaultChecked className="rounded text-primary focus:ring-primary bg-background-light dark:bg-white/10 border-none" type="checkbox" />
                                            <span className="text-sm font-medium">4-7 Days</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input className="rounded text-primary focus:ring-primary bg-background-light dark:bg-white/10 border-none" type="checkbox" />
                                            <span className="text-sm font-medium">8+ Days</span>
                                        </label>
                                    </div>
                                </div>
                                {/* Travel Type */}
                                <div className="mb-4">
                                    <p className="text-[#111618] dark:text-white text-sm font-bold mb-3">Travel Type</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1.5 bg-primary text-white rounded-full text-xs font-bold cursor-pointer">Adventure</span>
                                        <span className="px-3 py-1.5 bg-background-light dark:bg-white/10 text-[#617c89] rounded-full text-xs font-bold hover:bg-primary/20 cursor-pointer transition-colors">Luxury</span>
                                        <span className="px-3 py-1.5 bg-background-light dark:bg-white/10 text-[#617c89] rounded-full text-xs font-bold hover:bg-primary/20 cursor-pointer transition-colors">Family</span>
                                        <span className="px-3 py-1.5 bg-background-light dark:bg-white/10 text-[#617c89] rounded-full text-xs font-bold hover:bg-primary/20 cursor-pointer transition-colors">Group</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    {/* Grid of Tour Cards */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {/* Tour Card 1 */}
                            <Link href="/destination" className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm border border-[#f0f3f4] dark:border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col block">
                                <div className="relative h-56 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMWT-4A1tzGGejQLYMsGKmmE9Dw6Gr9LDOBc0xzQhXwNsvejzIAMLl1OhQs90jdg2M3LDtrEtMpi6I_2yHx7Y0pv3lOTlfG1Qv94KVOWC3NEGYConw1ivtu1eGo8jgEk0xJADgXX6qSS_HcdJck-1Jpu7pRaaynXHQgZ8bt1Bu04RL6O20nFQOV4sBSYw_unyHRhBClOsMW6cTV7ewVlnXPcmaaAfDUBYokus51CB9jJ1rn4HtkSi3u3wCWyN5qWMKkutuqUzPag")' }}
                                    ></div>
                                    <div className="absolute top-4 right-4 bg-teal-accent text-white px-3 py-1 rounded-lg font-black shadow-lg">
                                        from $450
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                                        <span className="material-symbols-outlined text-yellow-500 text-xs filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="text-xs font-bold">4.9 (1.2k)</span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Golden Dunes Expedition</h3>
                                    <p className="text-[#617c89] text-sm leading-relaxed mb-4 line-clamp-2">Experience the magic of the Sahara with our luxury desert camp and traditional camel trek under the starlit sky.</p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[#617c89]">
                                            <span className="material-symbols-outlined text-sm">schedule</span>
                                            <span className="text-xs font-medium">4 Days</span>
                                        </div>
                                        <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors cursor-pointer">View Details</span>
                                    </div>
                                </div>
                            </Link>
                            {/* Tour Card 2 */}
                            <Link href="/destination" className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm border border-[#f0f3f4] dark:border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col block">
                                <div className="relative h-56 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjgYSlRTUAB40ZHi9vdjZCm85FuuGWHoe2Udu02pA8kOynhlTcwEreWYpQpnCWnjbDFQcDa-dtvLvggf2KiaSKAMpVarlOuj7y0MxpuhMxLjLHQJwDKxptJ2xnDZNn2se49TsGnDTVmYGN5-hEPFtGk6rDX17Q-Vwv20kKY6fYNWvbQPoT2-q_ccTD10Hj4nuV__EEhr8S2dNrOoLn3ZWT0yDOSAdr-44ROLOFzX-bZ63eqWROYQwQT9eQ-FOkUXu9h3SL-1njTg")' }}
                                    ></div>
                                    <div className="absolute top-4 right-4 bg-teal-accent text-white px-3 py-1 rounded-lg font-black shadow-lg">
                                        from $890
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                                        <span className="material-symbols-outlined text-yellow-500 text-xs filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="text-xs font-bold">4.8 (850)</span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Hidden Oasis Sanctuary</h3>
                                    <p className="text-[#617c89] text-sm leading-relaxed mb-4 line-clamp-2">Discover hidden water springs and ancient palm groves in this exclusive private 4x4 off-road adventure.</p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[#617c89]">
                                            <span className="material-symbols-outlined text-sm">schedule</span>
                                            <span className="text-xs font-medium">7 Days</span>
                                        </div>
                                        <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors cursor-pointer">View Details</span>
                                    </div>
                                </div>
                            </Link>
                            {/* Tour Card 3 */}
                            <Link href="/destination" className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm border border-[#f0f3f4] dark:border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col block">
                                <div className="relative h-56 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCP83w19FoyiPJIBuJdAy38HwiMJLkrR4Mt0Ywnx_IlRNn2IgxN6C1xVsf44ADOsGNWniomPlb5xMrwyzH2a2O3MWy1d4o64p5gjnJSujcG9WYvSBDVgCm9phomW5L1tp2-kRizG8I-sy_YEnZsFs0tDd8ztjMjmMneEVQOHqyn4OSHmbvX6CH3Clumne3IYQ1vtCHiBqe1UbRcyLxeOn69YYvRPh6QHd7wkvpL_dZ238xYXCQYJ2WdSGCSn3ZOfX8usCOklzLExw")' }}
                                    ></div>
                                    <div className="absolute top-4 right-4 bg-teal-accent text-white px-3 py-1 rounded-lg font-black shadow-lg">
                                        from $320
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                                        <span className="material-symbols-outlined text-yellow-500 text-xs filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="text-xs font-bold">4.7 (420)</span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Berber Village Discovery</h3>
                                    <p className="text-[#617c89] text-sm leading-relaxed mb-4 line-clamp-2">Immerse yourself in the rich Berber culture. Visit local markets and enjoy home-cooked tagine with a local family.</p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[#617c89]">
                                            <span className="material-symbols-outlined text-sm">schedule</span>
                                            <span className="text-xs font-medium">3 Days</span>
                                        </div>
                                        <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors cursor-pointer">View Details</span>
                                    </div>
                                </div>
                            </Link>
                            {/* Tour Card 4 */}
                            <Link href="/destination" className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm border border-[#f0f3f4] dark:border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col block">
                                <div className="relative h-56 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ukc477DWsESB06qkgw9Cf5oA5wlURtro8pPz7mbmaqdDlLE_J1YUmnPABs5adEJry3PJJGYiMWYxhRL-chIJzEt-MJB3sWGPM7jPeO72fZNpAYOTeTuXo0QPqYnBqQDdna7W2s5WvchpepEzgZ_6WYzb6DWwJgtB6z1p9GR-mESXLeEboXRz56V-qdiwALsNdCkS5ud-BMT55ksmdnYhE5D3v1vXv_6g2fetNqI8UxMtpjwRHjD1AHtuXAqSIKiJDGGtuXlEBg")' }}
                                    ></div>
                                    <div className="absolute top-4 right-4 bg-teal-accent text-white px-3 py-1 rounded-lg font-black shadow-lg">
                                        from $670
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                                        <span className="material-symbols-outlined text-yellow-500 text-xs filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="text-xs font-bold">5.0 (215)</span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Starlight Astronomy Tour</h3>
                                    <p className="text-[#617c89] text-sm leading-relaxed mb-4 line-clamp-2">Join expert astronomers for a crystal-clear view of the cosmos in one of the darkest places on Earth.</p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[#617c89]">
                                            <span className="material-symbols-outlined text-sm">schedule</span>
                                            <span className="text-xs font-medium">5 Days</span>
                                        </div>
                                        <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors cursor-pointer">View Details</span>
                                    </div>
                                </div>
                            </Link>
                            {/* Tour Card 5 */}
                            <Link href="/destination" className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm border border-[#f0f3f4] dark:border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col block">
                                <div className="relative h-56 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs9XOc2mW7JOXZE_SgIlZ3L-Lz2sjWI9dFvm-Ucd3DcXTBDM3gBjggUM2dRCuODewR0ehLb73IkSo7oTZJyVxMucjANj_gTju4Ah4JmsBnn3MjOFG6rxF7gZ8Xaa0uCcDIDHeaPJTqHlR41WUqvfB9V2l4ku9IVUPZ1bZlrsqx9vxDnCLjX5nz939s8C-wDTuFJVLXSP0MqBW_fEedDSwANqJWouWM_azlu98aoMmQiUG_iebnsGYxCqxxhCCOGDROdjovOBjZvA")' }}
                                    ></div>
                                    <div className="absolute top-4 right-4 bg-teal-accent text-white px-3 py-1 rounded-lg font-black shadow-lg">
                                        from $550
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                                        <span className="material-symbols-outlined text-yellow-500 text-xs filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="text-xs font-bold">4.6 (180)</span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Legends of the Sands</h3>
                                    <p className="text-[#617c89] text-sm leading-relaxed mb-4 line-clamp-2">Explore ancient ruins and learn about the civilizations that once thrived in the heart of the great desert.</p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[#617c89]">
                                            <span className="material-symbols-outlined text-sm">schedule</span>
                                            <span className="text-xs font-medium">6 Days</span>
                                        </div>
                                        <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors cursor-pointer">View Details</span>
                                    </div>
                                </div>
                            </Link>
                            {/* Tour Card 6 */}
                            <Link href="/destination" className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm border border-[#f0f3f4] dark:border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col block">
                                <div className="relative h-56 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKbwcIor1RFcrHYWUo_ESYxMvZ0GDJFeDbPUwd2P47MTnCjEmnGY5ROiNaZWwqibb-A3nmL-iO3f5ZsDQRpnAslDa9UBMhW04yPjKDzXbkzio5fb9Wbrh8zq9vJITMJ6_lop4DxQcELFpKg4WQKRCH6oSc502itoEzBF_fkL6_aFATwo2bxq--dTnvNyZX5LB1Q1t0tpqgK4hiI3EQGryKSnip-8Hk4m6usEBCe-007fiY-ymFfqxuOsCGPNeC04uXA-UWbcZHuw")' }}
                                    ></div>
                                    <div className="absolute top-4 right-4 bg-teal-accent text-white px-3 py-1 rounded-lg font-black shadow-lg">
                                        from $1,200
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                                        <span className="material-symbols-outlined text-yellow-500 text-xs filled-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="text-xs font-bold">4.9 (560)</span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Ultimate Luxury Crossing</h3>
                                    <p className="text-[#617c89] text-sm leading-relaxed mb-4 line-clamp-2">A high-end traverse of the Sahara with premium logistics, gourmet meals, and five-star glamping facilities.</p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[#617c89]">
                                            <span className="material-symbols-outlined text-sm">schedule</span>
                                            <span className="text-xs font-medium">10 Days</span>
                                        </div>
                                        <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors cursor-pointer">View Details</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* Pagination */}
                        <div className="mt-12 flex justify-center items-center gap-2">
                            <button className="size-10 flex items-center justify-center rounded-lg border border-[#f0f3f4] dark:border-white/10 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold cursor-pointer">1</button>
                            <button className="size-10 flex items-center justify-center rounded-lg border border-[#f0f3f4] dark:border-white/10 hover:bg-primary/10 transition-colors font-bold cursor-pointer">2</button>
                            <button className="size-10 flex items-center justify-center rounded-lg border border-[#f0f3f4] dark:border-white/10 hover:bg-primary/10 transition-colors font-bold cursor-pointer">3</button>
                            <span className="px-2">...</span>
                            <button className="size-10 flex items-center justify-center rounded-lg border border-[#f0f3f4] dark:border-white/10 hover:bg-primary/10 transition-colors font-bold cursor-pointer">12</button>
                            <button className="size-10 flex items-center justify-center rounded-lg border border-[#f0f3f4] dark:border-white/10 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
