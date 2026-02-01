import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Signup() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111618] dark:text-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center px-4 py-20">
                <div className="bg-white dark:bg-[#1a2b34] p-8 md:p-10 rounded-2xl shadow-xl border border-[#f0f3f4] dark:border-slate-800 w-full max-w-[480px]">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                        <p className="text-[#617c89] text-sm">Join the Wanderlust community today</p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold mb-2 ml-1" htmlFor="name">Full Name</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-3 text-[#617c89]">person</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#dbe2e6] dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                    id="name"
                                    placeholder="John Doe"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2 ml-1" htmlFor="email">Email Address</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-3 text-[#617c89]">mail</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#dbe2e6] dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                    id="email"
                                    placeholder="john@example.com"
                                    type="email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2 ml-1" htmlFor="password">Password</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-3 text-[#617c89]">lock</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#dbe2e6] dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                    id="password"
                                    placeholder="Create a password"
                                    type="password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                            <input className="checkbox-primary rounded-md" id="terms" type="checkbox" />
                            <label className="text-xs text-[#617c89]" htmlFor="terms">
                                I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>
                            </label>
                        </div>

                        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all transform hover:scale-[1.02] cursor-pointer">
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-[#f0f3f4] dark:border-slate-800 text-center">
                        <p className="text-[#617c89] text-sm">
                            Already have an account?{" "}
                            <Link className="text-primary font-bold hover:underline" href="/login">Sign In</Link>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
