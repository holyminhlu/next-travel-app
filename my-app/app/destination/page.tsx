import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DestinationDetail() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111618] dark:text-white transition-colors duration-200">
            <Header />
            <main className="max-w-[1280px] mx-auto px-6 lg:px-40 py-8">
                {/* Breadcrumbs */}
                <nav className="flex flex-wrap gap-2 mb-6">
                    <Link className="text-[#617c89] text-sm font-medium hover:text-primary" href="/">Home</Link>
                    <span className="text-[#617c89] text-sm font-medium">/</span>
                    <Link className="text-[#617c89] text-sm font-medium hover:text-primary" href="/destination">Destinations</Link>
                    <span className="text-[#617c89] text-sm font-medium">/</span>
                    <span className="text-primary text-sm font-medium">Bali Spiritual Retreat</span>
                </nav>
                {/* Headline */}
                <div className="mb-8">
                    <h1 className="text-[#111618] dark:text-white tracking-tight text-4xl font-extrabold leading-tight mb-2">Bali Spiritual Retreat & Island Explorer</h1>
                    <div className="flex items-center gap-4 text-[#617c89]">
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                            <span className="text-sm">Ubud, Bali, Indonesia</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-yellow-500 font-variation-FILL-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="text-sm font-bold text-[#111618] dark:text-white">4.9</span>
                            <span className="text-sm">(248 reviews)</span>
                        </div>
                    </div>
                </div>
                {/* Carousel Gallery */}
                <div className="mb-12 overflow-hidden rounded-xl bg-white dark:bg-background-dark shadow-sm">
                    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex items-stretch gap-4 p-2">
                            <div className="relative min-w-[700px] h-[450px] snap-center rounded-lg overflow-hidden group">
                                <div
                                    className="w-full h-full bg-center bg-no-repeat bg-cover"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeCtIRRkLXqyOfszi9d5wYRa5Rk9oy-Iq9SSVxpWIcVVt9UpR-6DDpkjsfMyRSN2KrVjTI4hAQcQLGpp6KVlYJYhRJ2pgV-5vOlTaGoqIjdenBXi2ivRu4f8kXZJLdzLHA-DIlsjHnLVpfncVx8BOerG__0NdYhSnOZXPZnvtq9P9uF1se-M3NmhBegwG-XjNHzpTMEI879v15SpZADPRnCWxgyV211o1cPtoucOcyMs1xEjuHZh2GYX4pj2DD8oK1bDF6ImbO1Q")' }}
                                ></div>
                                <div className="absolute bottom-4 right-4">
                                    <button className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg cursor-pointer">
                                        <span className="material-symbols-outlined">grid_view</span> View Gallery
                                    </button>
                                </div>
                            </div>
                            <div className="min-w-[350px] h-[450px] snap-center rounded-lg overflow-hidden">
                                <div
                                    className="w-full h-[217px] bg-center bg-no-repeat bg-cover mb-[16px] rounded-lg"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB12dMf-sZus6Q7KxZ-a7n59vpJ5pKfE5fDnBhGxFu2B35ulvGlwjkjiXrJrkkZdZT31qeOFQYFXxaVVmDX9eXYwQXPYQE8XLayncAruhAXYJ-sBNGaGT3iGwGNr2GZQ5kqtROlv0ocTbxz_NYvPJx-4IkL_PUTpjNgJ7pM5jO0_7Hs-TJWL3UuggakL8XowpSx5SQpRYE0Opyv_zKWkznjLymfbGtMa9CA2L8RimVGS3_DWx1aQWoBuS0NXaJKcSl-wUM6oy_hgw")' }}
                                ></div>
                                <div
                                    className="w-full h-[217px] bg-center bg-no-repeat bg-cover rounded-lg"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4b1Q5xlompefD2Lg8H_V43vT8NE2kUxrfHzAobExL_PMylCVyweh2ywkrIhLBRxlBhsPDveMEfnNcNfTBwvx3ldsL_nimFS7CH7KfF-BmiAdr9OjGFPKt2KIq0jUV3AVAlMdq8j5wBDUAThr0O1-C6JWCvo4wCAhgxjn9nVXaiMOR9a2J5Ung-UO2Kic9GJAyGPKj2w0bKkeuTRPg2CVynfZBHiOc8G612cafDAXaOj8gWJP_JB1qt3pPxL4NdDc26ULoxVK7vg")' }}
                                ></div>
                            </div>
                            <div className="min-w-[350px] h-[450px] snap-center rounded-lg overflow-hidden">
                                <div
                                    className="w-full h-full bg-center bg-no-repeat bg-cover"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZQCPgf12gc3YnpJhDKZL8HjOpvV1Xi21nm6tvMLnmUGYWlFwFYRNCQDqXM13bn-ZYhQSDqzbeD5s0MxsdxSdX1L01887f2pVmfEiggtoI2_rY8vOnB6St0dCTFjs2T36W44kBFv7TVU7tirCoahVn4wiWMn0j7nmZVavXibPBcmFb3gHRufT8oy105LQGmcsWK6RRn84q49RgbieX5RZlXlulS_koLzNGsfVcSowop8wuotGnqOxCmcQzWbWNNlDTWaqdF3jM_Q")' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Content Two-Column Layout */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Content */}
                    <div className="flex-1 lg:max-w-[65%]">
                        {/* Overview Section */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-4">Overview</h2>
                            <p className="text-[#617c89] leading-relaxed mb-6">
                                Embark on a transformative 7-day journey through the heart of Bali. This curated experience blends spiritual wellness with adventurous exploration. From the mist-covered rice terraces of Ubud to the sacred water temples of Tirta Empul, you'll discover the "Island of the Gods" through local eyes.
                            </p>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-[#f0f3f4] dark:border-gray-700">
                                    <span className="material-symbols-outlined text-primary mb-2">calendar_today</span>
                                    <p className="text-xs text-[#617c89] uppercase font-bold tracking-wider">Duration</p>
                                    <p className="font-bold">7 Days</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-[#f0f3f4] dark:border-gray-700">
                                    <span className="material-symbols-outlined text-primary mb-2">groups</span>
                                    <p className="text-xs text-[#617c89] uppercase font-bold tracking-wider">Group Size</p>
                                    <p className="font-bold">Max 12 People</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-[#f0f3f4] dark:border-gray-700">
                                    <span className="material-symbols-outlined text-primary mb-2">translate</span>
                                    <p className="text-xs text-[#617c89] uppercase font-bold tracking-wider">Language</p>
                                    <p className="font-bold">English, Balinese</p>
                                </div>
                            </div>
                        </section>
                        {/* Itinerary Section */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-8 border-l-4 border-primary pl-4">Itinerary</h2>
                            <div className="space-y-0">
                                {/* Day 1 */}
                                <div className="relative pb-8 flex gap-6 last:pb-0">
                                    <div className="relative">
                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 relative">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                        <div className="absolute left-[11px] top-[24px] bottom-0 w-[2px] bg-[#e5e7eb]"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Day 1: Arrival & Welcome Ceremony</h3>
                                        <p className="text-[#617c89] text-sm">Transfer from Ngurah Rai Airport to our sanctuary in Ubud. Evening traditional welcome dinner and fire dance performance.</p>
                                        <div className="mt-3 flex gap-4">
                                            <span className="flex items-center gap-1 text-xs bg-background-light dark:bg-gray-800 px-2 py-1 rounded">
                                                <span className="material-symbols-outlined text-[14px]">restaurant</span> Dinner
                                            </span>
                                            <span className="flex items-center gap-1 text-xs bg-background-light dark:bg-gray-800 px-2 py-1 rounded">
                                                <span className="material-symbols-outlined text-[14px]">hotel</span> Ubud Resort
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Day 2 */}
                                <div className="relative pb-8 flex gap-6 last:pb-0">
                                    <div className="relative">
                                        <div className="w-6 h-6 rounded-full border-2 border-primary bg-white dark:bg-background-dark flex items-center justify-center z-10 relative">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        </div>
                                        <div className="absolute left-[11px] top-[24px] bottom-0 w-[2px] bg-[#e5e7eb]"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Day 2: Sacred Temples & Holy Springs</h3>
                                        <p className="text-[#617c89] text-sm">Sunrise visit to Tirta Empul for a traditional purification ritual. Afternoon hike through Tegalalang rice terraces.</p>
                                    </div>
                                </div>
                                {/* Day 3 */}
                                <div className="relative pb-8 flex gap-6 last:pb-0">
                                    <div className="relative">
                                        <div className="w-6 h-6 rounded-full border-2 border-primary bg-white dark:bg-background-dark flex items-center justify-center z-10 relative">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        </div>
                                        <div className="absolute left-[11px] top-[24px] bottom-0 w-[2px] bg-[#e5e7eb]"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Day 3: Balinese Cooking & Crafts</h3>
                                        <p className="text-[#617c89] text-sm">Farm-to-table cooking class in a local village. Learn the art of silver jewelry making with master artisans.</p>
                                    </div>
                                </div>
                                {/* Day 4 */}
                                <div className="relative pb-8 flex gap-6 last:pb-0">
                                    <div className="relative">
                                        <div className="w-6 h-6 rounded-full border-2 border-primary bg-white dark:bg-background-dark flex items-center justify-center z-10 relative">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Day 4: Jungle Trek & Waterfall Bliss</h3>
                                        <p className="text-[#617c89] text-sm">Moderate trek through untouched tropical rainforest, culminating in a swim at Kanto Lampo waterfall.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-4 text-primary font-bold flex items-center gap-2 hover:underline cursor-pointer">
                                View full 7-day itinerary <span className="material-symbols-outlined">expand_more</span>
                            </button>
                        </section>
                        {/* Included/Excluded */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">Included & Excluded</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-green-50/50 dark:bg-green-900/10 p-6 rounded-xl">
                                    <p className="font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined">check_circle</span> What's Included
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-[#111618] dark:text-gray-300">
                                            <span className="material-symbols-outlined text-green-600 text-sm mt-1">check</span>
                                            6 Nights in Boutique Luxury Resorts
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-[#111618] dark:text-gray-300">
                                            <span className="material-symbols-outlined text-green-600 text-sm mt-1">check</span>
                                            Daily Breakfast and 4 Signature Dinners
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-[#111618] dark:text-gray-300">
                                            <span className="material-symbols-outlined text-green-600 text-sm mt-1">check</span>
                                            Private Air-Conditioned Transportation
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-[#111618] dark:text-gray-300">
                                            <span className="material-symbols-outlined text-green-600 text-sm mt-1">check</span>
                                            All Entrance Fees and Activities
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-red-50/50 dark:bg-red-900/10 p-6 rounded-xl">
                                    <p className="font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined">cancel</span> What's Excluded
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-[#111618] dark:text-gray-300">
                                            <span className="material-symbols-outlined text-red-600 text-sm mt-1">close</span>
                                            International Airfare
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-[#111618] dark:text-gray-300">
                                            <span className="material-symbols-outlined text-red-600 text-sm mt-1">close</span>
                                            Travel Insurance (Mandatory)
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-[#111618] dark:text-gray-300">
                                            <span className="material-symbols-outlined text-red-600 text-sm mt-1">close</span>
                                            Personal Expenses & Tips
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        {/* Rating Summary */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">Reviews</h2>
                            <div className="flex flex-wrap gap-x-12 gap-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl border border-[#f0f3f4] dark:border-gray-700">
                                <div className="flex flex-col items-center justify-center gap-2 border-r border-gray-100 dark:border-gray-700 pr-12">
                                    <p className="text-[#111618] dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">4.9</p>
                                    <div className="flex gap-0.5 text-yellow-500">
                                        <span className="material-symbols-outlined font-variation-FILL-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined font-variation-FILL-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined font-variation-FILL-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined font-variation-FILL-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined font-variation-FILL-1" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                                    </div>
                                    <p className="text-[#617c89] text-sm font-normal">248 reviews</p>
                                </div>
                                <div className="grid min-w-[300px] flex-1 grid-cols-[30px_1fr_45px] items-center gap-y-2">
                                    <p className="text-[#111618] dark:text-white text-sm">5</p>
                                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dbe2e6] dark:bg-gray-700"><div className="rounded-full bg-primary" style={{ width: '88%' }}></div></div>
                                    <p className="text-[#617c89] text-xs text-right">88%</p>
                                    <p className="text-[#111618] dark:text-white text-sm">4</p>
                                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dbe2e6] dark:bg-gray-700"><div className="rounded-full bg-primary" style={{ width: '10%' }}></div></div>
                                    <p className="text-[#617c89] text-xs text-right">10%</p>
                                    <p className="text-[#111618] dark:text-white text-sm">3</p>
                                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dbe2e6] dark:bg-gray-700"><div className="rounded-full bg-primary" style={{ width: '1%' }}></div></div>
                                    <p className="text-[#617c89] text-xs text-right">1%</p>
                                    <p className="text-[#111618] dark:text-white text-sm">2</p>
                                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dbe2e6] dark:bg-gray-700"><div className="rounded-full bg-primary" style={{ width: '1%' }}></div></div>
                                    <p className="text-[#617c89] text-xs text-right">1%</p>
                                    <p className="text-[#111618] dark:text-white text-sm">1</p>
                                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dbe2e6] dark:bg-gray-700"><div className="rounded-full bg-primary" style={{ width: '0%' }}></div></div>
                                    <p className="text-[#617c89] text-xs text-right">0%</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Right Column: Sticky Booking Widget */}
                    <aside className="flex-1 lg:max-w-[35%]">
                        <div className="sticky top-24">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-[#f0f3f4] dark:border-gray-700 p-6">
                                <div className="flex justify-between items-baseline mb-6">
                                    <div>
                                        <span className="text-3xl font-black text-primary">$1,299</span>
                                        <span className="text-[#617c89] text-sm ml-1">/ person</span>
                                    </div>
                                    <div className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Best Value</div>
                                </div>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <label className="block text-xs font-bold text-[#617c89] uppercase mb-1">Select Dates</label>
                                        <div className="relative">
                                            <input className="w-full bg-background-light dark:bg-gray-900 border-none rounded-lg py-3 pl-10 text-sm focus:ring-2 focus:ring-primary" readOnly type="text" value="Oct 12 - Oct 19, 2024" />
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#617c89] text-[20px]">calendar_month</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-[#617c89] uppercase mb-1">Guests</label>
                                            <div className="relative">
                                                <select className="w-full bg-background-light dark:bg-gray-900 border-none rounded-lg py-3 pl-10 text-sm focus:ring-2 focus:ring-primary">
                                                    <option>2 Guests</option>
                                                    <option>1 Guest</option>
                                                    <option>3 Guests</option>
                                                    <option>4 Guests</option>
                                                </select>
                                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#617c89] text-[20px]">person</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-[#617c89] uppercase mb-1">Room Type</label>
                                            <div className="relative">
                                                <select className="w-full bg-background-light dark:bg-gray-900 border-none rounded-lg py-3 pl-10 text-sm focus:ring-2 focus:ring-primary">
                                                    <option>King Suite</option>
                                                    <option>Twin Room</option>
                                                </select>
                                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#617c89] text-[20px]">bed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-[#f0f3f4] dark:border-gray-700 pt-4 mb-6 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#617c89]">$1,299 x 2 Guests</span>
                                        <span className="font-medium">$2,598</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#617c89]">Service Fee</span>
                                        <span className="font-medium">$120</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold pt-2">
                                        <span>Total</span>
                                        <span className="text-primary">$2,718</span>
                                    </div>
                                </div>
                                <Link href="/booking" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer">
                                    Book Now <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                                <p className="text-center text-[11px] text-[#617c89] mt-4">Free cancellation up to 14 days before departure</p>
                            </div>
                            {/* Help Widget */}
                            <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-4 border border-[#f0f3f4] dark:border-gray-700 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">support_agent</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Need help with booking?</p>
                                    <a className="text-xs text-primary font-medium hover:underline cursor-pointer" href="#">Chat with a travel expert</a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
}
