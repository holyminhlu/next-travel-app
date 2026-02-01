import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111618] dark:text-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center px-4 py-20">
                <div className="bg-white dark:bg-[#1a2b34] p-8 md:p-10 rounded-2xl shadow-xl border border-[#f0f3f4] dark:border-slate-800 w-full max-w-[480px]">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                        <p className="text-[#617c89] text-sm">Please sign in to your account</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold mb-2 ml-1" htmlFor="email">Email Address</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-3 text-[#617c89]">mail</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#dbe2e6] dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                                    id="email"
                                    placeholder="Enter your email"
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
                                    placeholder="Enter your password"
                                    type="password"
                                />
                            </div>
                            <div className="text-right mt-2">
                                <Link className="text-xs font-bold text-primary hover:underline" href="#">Forgot Password?</Link>
                            </div>
                        </div>

                        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all transform hover:scale-[1.02] cursor-pointer">
                            Sign In
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-[#f0f3f4] dark:border-slate-800 text-center">
                        <p className="text-[#617c89] text-sm">
                            Don't have an account?{" "}
                            <Link className="text-primary font-bold hover:underline" href="/signup">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
