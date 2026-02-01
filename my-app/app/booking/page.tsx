import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Booking() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111618] dark:text-white transition-colors duration-200 font-display">
            <div className="layout-container flex flex-col min-h-screen">
                <Header />

                <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 lg:px-40 py-8">
                    {/* ProgressBar Component */}
                    <div className="mb-10 max-w-[960px]">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-6 justify-between items-end">
                                <div className="flex gap-2 items-center">
                                    <span className="material-symbols-outlined text-primary">person</span>
                                    <p className="text-[#111618] dark:text-white text-lg font-bold leading-normal">Traveler Information</p>
                                </div>
                                <p className="text-[#617c89] text-sm font-medium">Step 2 of 4</p>
                            </div>
                            <div className="rounded-full bg-[#dbe2e6] dark:bg-[#2a3a42] overflow-hidden">
                                <div className="h-2 rounded-full bg-primary" style={{ width: '50%' }}></div>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-[#617c89] text-xs font-normal">Step 1: Search</p>
                                <p className="text-[#111618] dark:text-white text-xs font-bold">Step 2: Traveler Info</p>
                                <p className="text-[#617c89] text-xs font-normal">Step 3: Payment</p>
                                <p className="text-[#617c89] text-xs font-normal">Step 4: Confirm</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Left Column: Form */}
                        <div className="flex-1 max-w-[960px]">
                            {/* PageHeading Component */}
                            <div className="mb-8">
                                <h1 className="text-[#111618] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Who's traveling?</h1>
                                <p className="text-[#617c89] dark:text-[#a0aec0] text-base font-normal leading-normal mt-2">Please enter the details exactly as they appear on your passport to ensure a smooth boarding process.</p>
                            </div>

                            <div className="bg-white dark:bg-[#1a2b34] rounded-xl shadow-sm border border-[#dbe2e6] dark:border-[#2a3a42] p-2">
                                {/* SectionHeader Component */}
                                <div className="flex items-center gap-2 px-6 pt-6">
                                    <span className="material-symbols-outlined text-primary">verified_user</span>
                                    <h2 className="text-[#111618] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Lead Traveler</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                                    {/* TextField Components */}
                                    <div className="p-4">
                                        <label className="flex flex-col w-full">
                                            <p className="text-[#111618] dark:text-white text-sm font-semibold leading-normal pb-2">Full Name</p>
                                            <input className="form-input flex w-full rounded-lg text-[#111618] dark:text-white border border-[#dbe2e6] dark:border-[#2a3a42] bg-white dark:bg-[#101c22] focus:border-primary focus:ring-1 focus:ring-primary h-12 placeholder:text-[#617c89] px-4 text-base font-normal" placeholder="John Doe" defaultValue="" />
                                        </label>
                                    </div>
                                    <div className="p-4">
                                        <label className="flex flex-col w-full">
                                            <p className="text-[#111618] dark:text-white text-sm font-semibold leading-normal pb-2">Email Address</p>
                                            <input className="form-input flex w-full rounded-lg text-[#111618] dark:text-white border border-[#dbe2e6] dark:border-[#2a3a42] bg-white dark:bg-[#101c22] focus:border-primary focus:ring-1 focus:ring-primary h-12 placeholder:text-[#617c89] px-4 text-base font-normal" placeholder="john.doe@example.com" type="email" defaultValue="" />
                                        </label>
                                    </div>
                                    <div className="p-4">
                                        <label className="flex flex-col w-full">
                                            <p className="text-[#111618] dark:text-white text-sm font-semibold leading-normal pb-2">Passport Number</p>
                                            <input className="form-input flex w-full rounded-lg text-[#111618] dark:text-white border border-[#dbe2e6] dark:border-[#2a3a42] bg-white dark:bg-[#101c22] focus:border-primary focus:ring-1 focus:ring-primary h-12 placeholder:text-[#617c89] px-4 text-base font-normal" placeholder="A12345678" defaultValue="" />
                                        </label>
                                    </div>
                                    <div className="p-4">
                                        <label className="flex flex-col w-full">
                                            <p className="text-[#111618] dark:text-white text-sm font-semibold leading-normal pb-2">Nationality</p>
                                            <select className="form-select flex w-full rounded-lg text-[#111618] dark:text-white border border-[#dbe2e6] dark:border-[#2a3a42] bg-white dark:bg-[#101c22] focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base font-normal">
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>United Kingdom</option>
                                                <option>Germany</option>
                                                <option>France</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="p-4">
                                        <label className="flex flex-col w-full">
                                            <p className="text-[#111618] dark:text-white text-sm font-semibold leading-normal pb-2">Passport Expiry Date</p>
                                            <input className="form-input flex w-full rounded-lg text-[#111618] dark:text-white border border-[#dbe2e6] dark:border-[#2a3a42] bg-white dark:bg-[#101c22] focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base font-normal" type="date" />
                                        </label>
                                    </div>
                                    <div className="p-4">
                                        <label className="flex flex-col w-full">
                                            <p className="text-[#111618] dark:text-white text-sm font-semibold leading-normal pb-2">Phone Number</p>
                                            <div className="flex gap-2">
                                                <div className="w-24">
                                                    <select className="form-select flex w-full rounded-lg text-[#111618] dark:text-white border border-[#dbe2e6] dark:border-[#2a3a42] bg-white dark:bg-[#101c22] focus:border-primary h-12 px-2 text-sm font-normal">
                                                        <option>+1</option>
                                                        <option>+44</option>
                                                        <option>+49</option>
                                                    </select>
                                                </div>
                                                <input className="form-input flex-1 rounded-lg text-[#111618] dark:text-white border border-[#dbe2e6] dark:border-[#2a3a42] bg-white dark:bg-[#101c22] focus:border-primary h-12 px-4 text-base font-normal" placeholder="555-0123" />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="px-6 py-6 border-t border-[#dbe2e6] dark:border-[#2a3a42] bg-background-light/50 dark:bg-background-dark/50 rounded-b-xl">
                                    <div className="flex items-center gap-3">
                                        <input className="rounded border-gray-300 text-primary focus:ring-primary h-5 w-5" id="save-details" type="checkbox" />
                                        <label className="text-sm text-[#111618] dark:text-white font-medium cursor-pointer" htmlFor="save-details">Save these details to my profile for future bookings</label>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="mt-10 flex justify-between items-center">
                                <Link href="/destination" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#dbe2e6] dark:border-[#2a3a42] font-bold text-[#111618] dark:text-white hover:bg-gray-100 dark:hover:bg-[#2a3a42] transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined text-base">arrow_back</span>
                                    Back to Tour Details
                                </Link>
                                <Link href="/booking-success" className="flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform cursor-pointer">
                                    Proceed to Payment
                                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Booking Summary Card */}
                        <aside className="w-full lg:w-[400px]">
                            <div className="sticky top-24 bg-white dark:bg-[#1a2b34] rounded-xl shadow-xl border border-[#dbe2e6] dark:border-[#2a3a42] overflow-hidden">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <div
                                        className="w-full h-full object-cover bg-cover bg-center"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdxqAtZtKWBZ_z242AFY4vfpND41Nn-FV3mDFUlAzk36lAcMUYfv7xSMiUec1ZMUWHvUtrk6JqEkdcAXAAOUFOYCZC-7s0W3TPwT-WP2f8-IYoSA1Jaocyc8QUdJlQlpW5NnQqsNC9SVM_NJaPlamroGvCvvDjtF_h9YPL5dvGkU6mciWXU0zlduQLcnntf60OU0hiIv5tTJgW8CcI_cZgtFPrfih_Y3R58oE462DoCgKwlxlsdfmmAiVYvsPQnAa6XB0IO2X9sw")' }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <span className="bg-primary px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">Top Rated</span>
                                        <h3 className="text-xl font-bold">Grand Canyon Sunset Tour</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-6">
                                    {/* Detail List */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-background-light dark:bg-[#2a3a42] flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined">calendar_today</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-[#617c89] font-medium uppercase">Departure Date</p>
                                                <p className="text-sm font-bold">Oct 14, 2024</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-background-light dark:bg-[#2a3a42] flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined">schedule</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-[#617c89] font-medium uppercase">Duration</p>
                                                <p className="text-sm font-bold">4 Hours (16:00 - 20:00)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-background-light dark:bg-[#2a3a42] flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined">group</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-[#617c89] font-medium uppercase">Travelers</p>
                                                <p className="text-sm font-bold">1 Adult</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Price Breakdown */}
                                    <div className="border-t border-dashed border-[#dbe2e6] dark:border-[#2a3a42] pt-6 flex flex-col gap-3">
                                        <div className="flex justify-between text-sm">
                                            <p className="text-[#617c89]">Base Price</p>
                                            <p className="font-medium">$189.00</p>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <p className="text-[#617c89]">Service Fee</p>
                                            <p className="font-medium">$12.50</p>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <p className="text-[#617c89]">Tax & Fees</p>
                                            <p className="font-medium">$15.75</p>
                                        </div>
                                    </div>
                                    {/* Total */}
                                    <div className="bg-background-light dark:bg-[#101c22] rounded-xl p-4 mt-2">
                                        <div className="flex justify-between items-center">
                                            <p className="text-base font-bold">Total Price</p>
                                            <p className="text-2xl font-black text-primary">$217.25</p>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-center text-[#617c89]">No hidden costs. Price includes all listed amenities and expert guide fees.</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
