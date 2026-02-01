import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Dashboard() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111618] dark:text-white transition-colors duration-200">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <Header />
                <div className="layout-container flex h-full grow flex-col">
                    <main className="flex flex-1 justify-center">
                        <div className="flex w-full max-w-[1440px] px-4 lg:px-40 gap-8 py-8 flex-col md:flex-row">
                            {/* Side Navigation Bar */}
                            <aside className="flex w-full md:w-72 shrink-0 flex-col gap-8">
                                <div className="flex flex-col bg-white dark:bg-background-dark border border-[#f0f3f4] dark:border-slate-800 rounded-xl p-4 shadow-sm h-fit">
                                    <div className="flex items-center gap-3 px-2 py-4 border-b border-[#f0f3f4] dark:border-slate-800 mb-4">
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQwxwrAhSeyv1C9s13ciW7oJPIhOO90h5z10WYCZiepYjC7SRZUsRIRcAJ5VAC8ksvgDDwGVqvlPN3pemyuMB23MyiWlp5r3PUyo0QlgozJAQR7fDVn-P4YxgyPhbPRMzvNz_oEYZDRzA5Hw5ip3NGEDbyXvV969ak5bZHFticWeNOcyAtLDzLBtaHhEjn6-McnTaUHou5xaYtBQohOkl2_bRLWan36kH44gK6jIClUR8zcbzUFu2joLQP6vUYf2lGL-msMqTr8A")' }}
                                        ></div>
                                        <div className="flex flex-col">
                                            <h1 className="text-[#111618] dark:text-white text-base font-bold leading-normal">Alex Johnson</h1>
                                            <p className="text-[#617c89] text-xs font-normal leading-normal">Frequent Traveler</p>
                                        </div>
                                    </div>
                                    <nav className="flex flex-col gap-1">
                                        <Link className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#111618] dark:text-white hover:bg-background-light dark:hover:bg-slate-800 transition-colors" href="/dashboard">
                                            <span className="material-symbols-outlined text-[24px]">person</span>
                                            <p className="text-sm font-semibold">Profile</p>
                                        </Link>
                                        <Link className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/10 text-primary" href="/dashboard">
                                            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>luggage</span>
                                            <p className="text-sm font-semibold">My Bookings</p>
                                        </Link>
                                        <Link className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#111618] dark:text-white hover:bg-background-light dark:hover:bg-slate-800 transition-colors" href="#">
                                            <span className="material-symbols-outlined text-[24px]">favorite</span>
                                            <p className="text-sm font-semibold">Wishlist</p>
                                        </Link>
                                        <Link className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#111618] dark:text-white hover:bg-background-light dark:hover:bg-slate-800 transition-colors" href="#">
                                            <span className="material-symbols-outlined text-[24px]">settings</span>
                                            <p className="text-sm font-semibold">Settings</p>
                                        </Link>
                                    </nav>
                                    <div className="mt-8 pt-4 border-t border-[#f0f3f4] dark:border-slate-800">
                                        <Link className="flex items-center gap-3 px-3 py-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors" href="/">
                                            <span className="material-symbols-outlined text-[24px]">logout</span>
                                            <p className="text-sm font-semibold">Logout</p>
                                        </Link>
                                    </div>
                                </div>
                                {/* Travel Stats Card */}
                                <div className="bg-primary p-6 rounded-xl text-white shadow-lg overflow-hidden relative hidden md:block">
                                    <div className="relative z-10">
                                        <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">Travel Miles</p>
                                        <h3 className="text-3xl font-black mb-4">42,850</h3>
                                        <div className="h-2 w-full bg-white/20 rounded-full mb-4">
                                            <div className="h-full bg-white rounded-full" style={{ width: '75%' }}></div>
                                        </div>
                                        <p className="text-xs font-medium">12,150 miles to Platinum status</p>
                                    </div>
                                    <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-white/10 rotate-12">flight</span>
                                </div>
                            </aside>
                            {/* Main Content Area */}
                            <div className="flex flex-1 flex-col gap-8">
                                {/* Page Heading */}
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[#111618] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Welcome back, Alex!</p>
                                        <p className="text-[#617c89] text-base font-normal leading-normal">Manage your upcoming trips and saved destinations.</p>
                                    </div>
                                    <Link href="/search" className="bg-primary text-white font-bold px-6 py-2.5 rounded-lg shadow-sm hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer">
                                        <span className="material-symbols-outlined">add</span>
                                        <span>New Booking</span>
                                    </Link>
                                </div>
                                {/* Upcoming Bookings Section */}
                                <section className="flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-[#111618] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Upcoming Bookings</h2>
                                        <Link className="text-primary text-sm font-bold hover:underline cursor-pointer" href="#">View all</Link>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {/* Confirmed Booking Card */}
                                        <div className="bg-white dark:bg-background-dark border border-[#f0f3f4] dark:border-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group">
                                            <div className="flex flex-col md:flex-row items-stretch gap-6">
                                                <div
                                                    className="w-full md:w-52 bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden"
                                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClbRB4JmMlvp-YkfCJqz7crdNIc55MyMKDPfVN_YkRtKZ3oYnpPUcHFQGu9O4Nrn9djAD0WwGNHa281BAJAPag1DyK6UH-ANbvMVNrqSTUXc-4BpUAE-Sd7eNpy_uv4LJw9--yomaZEL5Uuabfqh-u6jNQ2r74JI-0GatzuqZXwnmZfOafZSbnF4LWf-yMxZO17McQYjPB7JGU7zyqqWfu3y00-EnYU2r9bySg_Xhfm7Jl3uphkJmGtKeiuYMK-MIf-6oSaDIfFA")' }}
                                                ></div>
                                                <div className="flex flex-1 flex-col justify-between">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex items-center justify-between">
                                                            <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                                Confirmed
                                                            </span>
                                                            <p className="text-[#617c89] text-sm">Booking ID: #TR-8821</p>
                                                        </div>
                                                        <h3 className="text-[#111618] dark:text-white text-xl font-bold">Aman Resort & Spa</h3>
                                                        <div className="flex items-center gap-4 text-[#617c89] text-sm">
                                                            <div className="flex items-center gap-1">
                                                                <span className="material-symbols-outlined text-base">calendar_today</span>
                                                                <span>Oct 12 - Oct 15, 2023</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <span className="material-symbols-outlined text-base">location_on</span>
                                                                <span>Bali, Indonesia</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-end gap-3 mt-4">
                                                        <button className="px-4 py-2 text-sm font-bold text-[#617c89] hover:bg-[#f0f3f4] dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Cancel</button>
                                                        <button className="px-5 py-2 text-sm font-bold bg-[#f0f3f4] dark:bg-slate-800 text-[#111618] dark:text-white rounded-lg hover:bg-primary hover:text-white transition-all cursor-pointer">Manage Booking</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Pending Booking Card */}
                                        <div className="bg-white dark:bg-background-dark border border-[#f0f3f4] dark:border-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group">
                                            <div className="flex flex-col md:flex-row items-stretch gap-6">
                                                <div
                                                    className="w-full md:w-52 bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden"
                                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDe1nihtCJkKatWHYjCvCLte87-bNwrHLQSpj6qbm80GSWLCQjFMTKp80UDFxhPYUEXdV83Fi9gy-gSGcx5wSGG-HUelqfSVpkQSRD4MKrM_YNsQpb9wnnR5N-yjU7zl8-y4RwJsvynQAqLhaAX4v95GnYgHVYio8s15Qtn_GzD3P3OD1x0Esr2t7Mu_kckbByXiCbAzAs_hMKReLlCd7Si28-EtRG1bTGYBdAVGcCJwJk_jh11D7lBK8b-Ij1pAmhr4TLVkYGGgQ")' }}
                                                ></div>
                                                <div className="flex flex-1 flex-col justify-between">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex items-center justify-between">
                                                            <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                                                                Pending Payment
                                                            </span>
                                                            <p className="text-[#617c89] text-sm">Booking ID: #MT-9042</p>
                                                        </div>
                                                        <h3 className="text-[#111618] dark:text-white text-xl font-bold">Cloudy Peaks Lodge</h3>
                                                        <div className="flex items-center gap-4 text-[#617c89] text-sm">
                                                            <div className="flex items-center gap-1">
                                                                <span className="material-symbols-outlined text-base">calendar_today</span>
                                                                <span>Nov 20 - Nov 23, 2023</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <span className="material-symbols-outlined text-base">location_on</span>
                                                                <span>Zermatt, Switzerland</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-end gap-3 mt-4">
                                                        <Link href="/booking" className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg shadow-sm hover:brightness-110 transition-all cursor-pointer">Complete Payment</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Wishlist Grid */}
                                <section className="flex flex-col">
                                    <div className="flex items-center justify-between mb-4 mt-4">
                                        <h2 className="text-[#111618] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Your Wishlist</h2>
                                        <Link className="text-primary text-sm font-bold hover:underline cursor-pointer" href="#">View all</Link>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {/* Wishlist Card 1 */}
                                        <div className="bg-white dark:bg-background-dark border border-[#f0f3f4] dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative">
                                            <button className="absolute top-3 right-3 z-10 size-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-red-500 shadow-sm">
                                                <span className="material-symbols-outlined text-xl fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                            </button>
                                            <div
                                                className="aspect-[4/3] bg-center bg-no-repeat bg-cover"
                                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwOZZHTqDYf5V2T3GgWe-fciKpVJV31DebCDMxI42FJEMPlf_YZUZPsc30zDEPB19FkQkk93pkA8l1efbLau0sHk2_M6sXWLp7jyxQoeJCswv-558KkaiF8g9Q9VVaWQnQ_85ogHCWrUzLXfWy_EcRqAkUNQ49zPp9hdxp9sLwyWr-vHtvLVaWp_XAiRo65TTvC9a-Hd11npAuGe4J5mOG5P_XRKa6os4Gfojsxs7-UjHQ6H5rEhH8ucIHe2o_KiuIGSGFxGLOrg")' }}
                                            ></div>
                                            <div className="p-4 flex flex-col gap-1">
                                                <div className="flex justify-between items-start">
                                                    <h4 className="font-bold text-[#111618] dark:text-white">Santorini, Greece</h4>
                                                    <div className="flex items-center text-amber-500">
                                                        <span className="material-symbols-outlined text-sm">star</span>
                                                        <span className="text-xs font-bold ml-0.5">4.9</span>
                                                    </div>
                                                </div>
                                                <p className="text-[#617c89] text-xs">Island Paradise • 5-Star</p>
                                                <div className="mt-3 flex items-center justify-between">
                                                    <p className="text-sm font-bold text-primary">From $450/night</p>
                                                    <Link href="/destination" className="text-xs font-bold text-[#111618] dark:text-white underline decoration-primary underline-offset-4 cursor-pointer">Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Wishlist Card 2 */}
                                        <div className="bg-white dark:bg-background-dark border border-[#f0f3f4] dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative">
                                            <button className="absolute top-3 right-3 z-10 size-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-red-500 shadow-sm">
                                                <span className="material-symbols-outlined text-xl fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                            </button>
                                            <div
                                                className="aspect-[4/3] bg-center bg-no-repeat bg-cover"
                                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3abY0ee6gr6d9PGz3AoK04z2v7OVRqpCN1RrBfwjGSfPFXlyReklsiIoGK0K9ttwP2S__kHsmyU8fk0E8qoiCdNVA279suGIIvaycbzoU8XtJb7lJbkmBQB5k-XRFch4pJLJUdKBfN7lXadZ7gJdLwhEYaRsYmH2cLIZpESy__ngWjQj_2HxAL_z0jfSaIVBP2NbQ6SVYkg70uOe0YZmXFsOkhvynb7zhkyx1e00U7muUR8LqGa1yOnwOdOycfjIllPIblZcJBg")' }}
                                            ></div>
                                            <div className="p-4 flex flex-col gap-1">
                                                <div className="flex justify-between items-start">
                                                    <h4 className="font-bold text-[#111618] dark:text-white">Kyoto, Japan</h4>
                                                    <div className="flex items-center text-amber-500">
                                                        <span className="material-symbols-outlined text-sm">star</span>
                                                        <span className="text-xs font-bold ml-0.5">4.8</span>
                                                    </div>
                                                </div>
                                                <p className="text-[#617c89] text-xs">Cultural Heritage • Boutique</p>
                                                <div className="mt-3 flex items-center justify-between">
                                                    <p className="text-sm font-bold text-primary">From $280/night</p>
                                                    <Link href="/destination" className="text-xs font-bold text-[#111618] dark:text-white underline decoration-primary underline-offset-4 cursor-pointer">Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Wishlist Card 3 */}
                                        <div className="bg-white dark:bg-background-dark border border-[#f0f3f4] dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative">
                                            <button className="absolute top-3 right-3 z-10 size-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-red-500 shadow-sm">
                                                <span className="material-symbols-outlined text-xl fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                            </button>
                                            <div
                                                className="aspect-[4/3] bg-center bg-no-repeat bg-cover"
                                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhW5DoXvpEwboyfZNDa84aqR-oUiY5QIi6yMNvwAFDObPthsgz0vDkBFSkY2aaK32GJMPidn30m5BuRqZ8XaUCQToXArWa0Z6ocdB5aVvEWREBIllgg0kR2dF2kytnMtVYB5xF6vTPHwBrKGNKvM5f6_IQCHYVt3BXXVOaVrs8vAVpG5Dfya0lCXEuxY-7BvPhDH8YSL5cz6MhSnGl0B5K3kYzpOQ_zY_oAucif01rQ3rDGOTZNfY3RJ0ZYN7G8LVoLbw27BI3Eg")' }}
                                            ></div>
                                            <div className="p-4 flex flex-col gap-1">
                                                <div className="flex justify-between items-start">
                                                    <h4 className="font-bold text-[#111618] dark:text-white">Cape Town, SA</h4>
                                                    <div className="flex items-center text-amber-500">
                                                        <span className="material-symbols-outlined text-sm">star</span>
                                                        <span className="text-xs font-bold ml-0.5">4.7</span>
                                                    </div>
                                                </div>
                                                <p className="text-[#617c89] text-xs">Scenic Coastal • Adventure</p>
                                                <div className="mt-3 flex items-center justify-between">
                                                    <p className="text-sm font-bold text-primary">From $320/night</p>
                                                    <Link href="/destination" className="text-xs font-bold text-[#111618] dark:text-white underline decoration-primary underline-offset-4 cursor-pointer">Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
