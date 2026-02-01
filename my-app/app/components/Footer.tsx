import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-background-dark border-t border-[#f0f3f4] dark:border-gray-800 py-16 px-4 md:px-20 lg:px-40 mt-10">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="text-primary size-6">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#111618] dark:text-white text-lg font-bold">Wanderlust</h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        Connecting curious travelers with unique experiences and hidden gems around the globe. Your journey starts here.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                        <li><Link className="hover:text-primary transition-colors hover:cursor-pointer" href="#">About Us</Link></li>
                        <li><Link className="hover:text-primary transition-colors hover:cursor-pointer" href="#">Careers</Link></li>
                        <li><Link className="hover:text-primary transition-colors hover:cursor-pointer" href="/blog">Blog</Link></li>
                        <li><Link className="hover:text-primary transition-colors hover:cursor-pointer" href="#">Press</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Support</h4>
                    <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                        <li><Link className="hover:text-primary transition-colors hover:cursor-pointer" href="#">Help Center</Link></li>
                        <li><Link className="hover:text-primary transition-colors hover:cursor-pointer" href="#">Safety Information</Link></li>
                        <li><Link className="hover:text-primary transition-colors hover:cursor-pointer" href="#">Cancellation Options</Link></li>
                        <li><Link className="hover:text-primary transition-colors hover:cursor-pointer" href="#">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Stay Updated</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Subscribe for the latest travel guides and deals.</p>
                    <div className="flex gap-2">
                        <input className="flex-1 bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-2 text-sm focus:ring-primary focus:border-primary outline-none" placeholder="Email address" type="email" />
                        <button className="bg-primary text-white p-2 rounded-lg cursor-pointer">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto pt-16 mt-16 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-400">© 2024 Wanderlust Travel Agency. All rights reserved.</p>
                <div className="flex gap-6 text-gray-400">
                    <Link className="hover:text-primary hover:cursor-pointer" href="#"><span className="material-symbols-outlined">language</span></Link>
                    <Link className="hover:text-primary hover:cursor-pointer" href="#"><span className="material-symbols-outlined">share</span></Link>
                    <Link className="hover:text-primary hover:cursor-pointer" href="#"><span className="material-symbols-outlined">contact_support</span></Link>
                </div>
            </div>
        </footer>
    );
}
