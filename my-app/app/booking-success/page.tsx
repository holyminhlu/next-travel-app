import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BookingSuccess() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-[#111618] dark:text-white transition-colors duration-200">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                {/* Main Content Container */}
                <main className="flex flex-1 justify-center py-12 px-4">
                    <div className="layout-content-container flex flex-col max-w-[1000px] flex-1">
                        {/* Celebration Illustration */}
                        <div className="@container mb-8">
                            <div
                                className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[320px] shadow-lg relative"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUql_t4DGxuVGqwPRqdjenHNyV7GhT30iOABM15svbE76C8hvInA6fut1VZn79BMEeGW4Vu-03G7964tPgk81hvn_H99GwOk1j_--kKvu257FmzJlkmZZGxAt7CE7vadfICm3IHMqXsa0nKygKqvTg54YjSI0nbySB9JHl1fs8a0hhhCOCTgLj4wzau0M3gNvsUersYCO770lIdFYN6ooJ7DuLbEEi7kUoCqus1ZQp14QO4oYe7Y281Sum6yiXKG8Fioi0iUKk9Q")' }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="relative p-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500 text-white text-sm font-bold mb-4">
                                        <span className="material-symbols-outlined text-sm">check_circle</span>
                                        BOOKING VERIFIED
                                    </div>
                                    <h1 className="text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight">Booking Confirmed!</h1>
                                    <p className="text-white/90 text-lg font-normal leading-normal mt-2">Pack your bags, Alex! You're going to Tokyo, Japan.</p>
                                </div>
                            </div>
                        </div>
                        {/* Summary Card */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 overflow-hidden">
                            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                                {/* Left: Map Preview or Side Illustration */}
                                <div className="w-full md:w-1/3 h-64 md:h-auto bg-slate-200 dark:bg-slate-800 rounded-lg relative overflow-hidden shrink-0">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAgiewFtRRaQ1RZ_0XKzV4OCXkKw25UHjzHNC2qhkxdThvOBMIPhFbTMaA1Histm19xAsqlMVl3irUkiwXRB5L6snWjuKgtC0O3nVWcKuaUk7lNKV0ntepY-Rjkf-rg-fxZk3_BT4bz0z7w1_fgZMITfQb-0g0l2s23Wbd92Z4-08ZX_XiLeaUtG_BcGldo9bb46-REeCE1LzLmLIxrN5cwtPCS6bhCYdc5ynk6kxa_8iYTXxBlJXqnaU_QAq5FxQ-FkgvZ5KbgA")' }}
                                    >
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white dark:bg-slate-900 p-2 rounded-lg shadow-md flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">location_on</span>
                                        <span className="text-xs font-bold dark:text-white uppercase tracking-wider">Tokyo, Japan</span>
                                    </div>
                                </div>
                                {/* Right: Booking Details */}
                                <div className="flex-1 flex flex-col gap-6">
                                    <div className="flex flex-wrap justify-between items-start gap-4">
                                        <div>
                                            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-1">Success Payment Received</p>
                                            <h3 className="text-[#111618] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Booking ID: #TRV-882910</h3>
                                        </div>
                                        <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 cursor-pointer">
                                            <span className="material-symbols-outlined">download</span>
                                            <span>Download PDF Receipt</span>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-100 dark:border-slate-800 pt-6">
                                        <div className="flex gap-4">
                                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <span className="material-symbols-outlined">calendar_month</span>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Itinerary Dates</p>
                                                <p className="text-[#111618] dark:text-white font-medium">Oct 12 - Oct 18, 2023</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <span className="material-symbols-outlined">group</span>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Travelers</p>
                                                <p className="text-[#111618] dark:text-white font-medium">2 Adults</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <span className="material-symbols-outlined">hotel</span>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Accommodation</p>
                                                <p className="text-[#111618] dark:text-white font-medium">Park Hyatt Tokyo (4-Star)</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <span className="material-symbols-outlined">flight</span>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Flight Type</p>
                                                <p className="text-[#111618] dark:text-white font-medium">Round-trip (Economy)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-background-light dark:bg-slate-800/50 p-4 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 mt-2">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-amber-500">info</span>
                                            <p className="text-sm text-slate-600 dark:text-slate-300">A confirmation email has been sent to <strong>alex.travels@example.com</strong>. Please check your inbox for next steps.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Post-Booking Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                            <Link className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all cursor-pointer" href="/dashboard">
                                <span className="material-symbols-outlined">confirmation_number</span>
                                <span>View in My Bookings</span>
                            </Link>
                            <Link className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all cursor-pointer" href="/">
                                <span className="material-symbols-outlined">home</span>
                                <span>Back to Home</span>
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
