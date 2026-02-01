import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-background-light dark:bg-background-dark font-display">
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-[1440px] px-4 md:px-10 lg:px-20 pt-6">
        <div
          className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center text-center p-6 bg-cover bg-center"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaVcipbzPON8gxlSt990zOX2A0ZhubaYUMHBDeD5VSrHo-EKHYhWkYrDQli5_ri30PKECMckMeAhC5Rul3P1fcGsOaRuSGs-aBWDEMoXGQXE0CeNALhC77QlaLVj42yXGRkaYQ2kCgBJTffKeEfB5tkwkX9eIZj5sQEic6K_mnEjVAnIQy31Azm4AYZL0My30RB9-fELfM8PBXWCiPmlp_EymCS06iHesMuRoIJEYBg6AS7rQMsc4Rwk-DcNZfcqwRcgp2zrklSw")' }}
        >
          <div className="max-w-[800px] z-10 space-y-6">
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em]">
              Explore the World's Hidden Gems
            </h1>
            <p className="text-white text-lg md:text-xl font-medium opacity-90">
              Experience the breathtaking beauty of Bali and beyond with our curated travel packages.
            </p>
            {/* Search Bar Overlay */}
            <div className="glass-effect rounded-2xl p-2 md:p-4 shadow-xl mt-12 w-full max-w-[900px] mx-auto flex flex-col md:flex-row gap-2 items-center bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex flex-1 items-center px-3 border-r border-white/20 w-full">
                <span className="material-symbols-outlined text-white/80 mr-2">location_on</span>
                <input className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-white/70 py-3 outline-none" placeholder="Destination" type="text" />
              </div>
              <div className="flex flex-1 items-center px-3 border-r border-white/20 w-full">
                <span className="material-symbols-outlined text-white/80 mr-2">calendar_today</span>
                <input className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-white/70 py-3 outline-none" placeholder="Date" type="text" />
              </div>
              <div className="flex flex-1 items-center px-3 border-r border-white/20 w-full">
                <span className="material-symbols-outlined text-white/80 mr-2">group</span>
                <input className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-white/70 py-3 outline-none" placeholder="Guests" type="text" />
              </div>
              <div className="flex flex-1 items-center px-3 w-full">
                <span className="material-symbols-outlined text-white/80 mr-2">payments</span>
                <input className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-white/70 py-3 outline-none" placeholder="Budget" type="text" />
              </div>
              <Link href="/search" className="w-full md:w-auto min-w-[120px] bg-primary text-white font-bold h-12 md:h-14 px-8 rounded-xl shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer border-none">
                <span>Search</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="w-full max-w-[1440px] px-4 md:px-20 lg:px-40 py-16">
        <div className="flex items-end justify-between mb-8 px-4">
          <div>
            <h2 className="text-[#111618] dark:text-white text-3xl font-bold tracking-tight">Featured Destinations</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Discover handpicked locations just for you.</p>
          </div>
          <Link href="/search" className="text-primary font-semibold flex items-center gap-1 hover:underline cursor-pointer">
            View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link href="/destination" className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer block">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzLMCAQ8nZUwvASD8wn2-qv31hZr6S-LzuAaXEOXtIGlyRC3B7cO_8e53-du9hrKKOYzudnN4T3SIoTfa4MFLFPT-HjsNB5CrNGNnSqurWwfjVyleOrIHKTx2XYViHwvgMEoDXpo1Yg7n9DzgAf7uFL2LBP590-Z0LPx0Aid8l0V4tT49EFAPQH84lyK078wDjTU_1tuSTUc2gy1kMNgeJcuSH1BEiZGPbfszfr8Exsy4e8Coh5mVP0Sb4UrDU90nSlcD_LuqdJA")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-widest font-bold text-primary mb-1">Greece</p>
              <h3 className="text-2xl font-bold">Santorini</h3>
            </div>
          </Link>
          {/* Card 2 */}
          <Link href="/destination" className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer block">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBasB7jVZZz7VEC7YWJm_PEFV4bUbkVzZFFaWqmwKLDxF6uWlvDhEa-yLDUqIYfA_hIQJc3CWCs0ljNgijlJTPTJ4R8iXPxXU3zurzj9Rgci9WeraD4wnfPoWMaE2RZ4jmIQgku-eBK57pxRP3zQnIKywPqOq_vi0DWjwOGBN7lWj2PvcAdp7WdbAClWFsX00tsRlo8Ydh5KP1Y6aDGtmmxaKbH13gKxx1jfeDas3DSvbaHHzNNks9HKpHVb1wZ4vgQW_ChA4fdZg")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-widest font-bold text-primary mb-1">Japan</p>
              <h3 className="text-2xl font-bold">Tokyo</h3>
            </div>
          </Link>
          {/* Card 3 */}
          <Link href="/destination" className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer block">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRVqFDI9kk3Y0ijponujvidVrbFtwj4sEghvytW-Yq0kE6ZrU_CBVk9U_VOCyuOU2bqNEzkdfciceDb_4LMzbfho1b7g58TNwZXyG79LHysSuiPVGn5uDz6IkxhPazyfogwoe-_HSNm4ae8LIaKjCGQ1AldhFtsJ4F4bJv1KevFXzZMtrxxmslJLmB8ohS3AUROokQb5SVujmE4iiGmkdA-8Xr83qxaThKm-8vTMSAmkvXzETIZ6YQCrzrrR9XLR4L3OBe_FgRyA")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-widest font-bold text-primary mb-1">France</p>
              <h3 className="text-2xl font-bold">Paris</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="w-full bg-white dark:bg-[#0b1419] py-20 flex justify-center">
        <div className="w-full max-w-[1440px] px-4 md:px-20 lg:px-40">
          <h2 className="text-[#111618] dark:text-white text-3xl font-bold px-4 mb-10">Popular Tours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {/* Tour 1 */}
            <Link href="/destination" className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow block">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSq2Bn3WPycD6SGKUXZcp7b6ToUk-JHtigrmK9KiymZqXv3LgHf20mZpNMOwIuGeQfhStaGMntZuiPTIkQswWfNqqGwl7bruNTuD7QNOdZSkVM4cDnxzm7Odtql3jvB44rM4gmp6vQc3XPfRNDj-OkbJZDfn7OJFwdlUtwIqyy8CpvKWRXe73hR5xcJgPzaRuEUtEmWxGZ92WZMWuqeJnuRlg0E2kVAk9p19S8YcB8l7QOKejzAfiwgR0D8GVExbbS7oNYl12qoQ")' }}
              ></div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-primary text-sm font-semibold mb-2">
                  <span className="material-symbols-outlined text-sm">star</span>
                  4.9 (1.2k reviews)
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#111618] dark:text-white">Mt. Fuji Day Trip</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Tokyo, Japan</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-primary font-bold text-lg">$120</span>
                  <span className="text-sm font-bold text-primary hover:underline hover:cursor-pointer">Details</span>
                </div>
              </div>
            </Link>
            {/* Tour 2 */}
            <Link href="/destination" className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow block">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIezB8oLnKr5NpLafBna97cseh3_N8jrtil7pf3vwrW5oACRtTa2l0MAgplbB8H3Bm4ZXriKrcAZaGvR71GhvhVP4VsR2JECC4Yqc43tv_JaXLosaGvk4NJT0j5WYntoZDsVdPBvnsVb4LlxANpLQp4FpgwEb1n-rWa6ljCykEV2sZfEdYmjU5snNj9u5wAmX-nYrOvr889TyrHsf6eQ0HbDlMST0NkSTp62GGdOOWm74bIWxlbDXuaudBM2aETGHvRBUTwwawcQ")' }}
              ></div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-primary text-sm font-semibold mb-2">
                  <span className="material-symbols-outlined text-sm">star</span>
                  4.8 (850 reviews)
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#111618] dark:text-white">Seine River Dinner</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Paris, France</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-primary font-bold text-lg">$95</span>
                  <span className="text-sm font-bold text-primary hover:underline hover:cursor-pointer">Details</span>
                </div>
              </div>
            </Link>
            {/* Tour 3 */}
            <Link href="/destination" className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow block">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA59G8gy7yXqAGhNxnRC5I4tjD1llHoRsCDQoOSFnyJzdfrsDO4_CZRFw8cEjcmp99Znndi-qdL7zhWdfL9AsqAagqWMIUTX389tUhb_Yt1uwMH-gJAbjhibpymWima24SNOai-13OBnXa_MlbUi_8qNllUlv1ZDNJEb_1dpbCEjf0y0Xh7-Ktbw_--PXpdc3-tlonD-wfsSwk1tWIjq3UMLdRjvB_hKWiAQ9aII2viPexh6HsGXb3XlbKtsrYyHVb_eKBHhDPYsg")' }}
              ></div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-primary text-sm font-semibold mb-2">
                  <span className="material-symbols-outlined text-sm">star</span>
                  5.0 (540 reviews)
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#111618] dark:text-white">Santorini Sailing</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Oia, Greece</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-primary font-bold text-lg">$210</span>
                  <span className="text-sm font-bold text-primary hover:underline hover:cursor-pointer">Details</span>
                </div>
              </div>
            </Link>
            {/* Tour 4 */}
            <Link href="/destination" className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow block">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBn3_8nJRRHb61-av6tHWztMC0OcLzwbwgfvUNmaTXwvx42gQlxIsVeCvo55aT86rIy5d5KrDcdh4EbM5uJURNRdmQOzX3QkhiKoGY25rgqgpfOhZYxm11eVVprXI_sDH26xoSymHfOjw2dwZn41IBddUzyBvSNWUL2bo35ufIbcW7GJC5BQLjF6i3GCbdyp-Xl210a3wMsDjt9JaHneBGaERLaHCipMPveFH8T1LUDrPRPBNh-8ro4AcmsIEnQjT9Pg43RaBkELA")' }}
              ></div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-primary text-sm font-semibold mb-2">
                  <span className="material-symbols-outlined text-sm">star</span>
                  4.9 (2k reviews)
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#111618] dark:text-white">Maldives Snorkeling</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Male, Maldives</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-primary font-bold text-lg">$350</span>
                  <span className="text-sm font-bold text-primary hover:underline hover:cursor-pointer">Details</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="w-full max-w-[1440px] px-4 md:px-20 lg:px-40 py-16">
        <div className="px-4 mb-10">
          <h2 className="text-[#111618] dark:text-white text-3xl font-bold">Special Offers</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Limited time deals for your next escape.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 px-4">
          <div className="flex-1 bg-white dark:bg-[#1a2831] border border-primary/20 p-8 rounded-2xl flex items-center justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="relative z-10 w-full sm:w-auto">
              <span className="bg-offer-orange text-white text-xs font-black px-3 py-1 rounded-full uppercase mb-4 inline-block">Last Minute</span>
              <h3 className="text-2xl font-bold mb-2">30% off Maldives Resorts</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">Book any resort for March and get 30% off.</p>
              <Link href="/search" className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl transition-all cursor-pointer inline-block">Claim Offer</Link>
            </div>
            <div
              className="hidden md:block w-48 h-48 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcPEyzAeTP2xETwJgk9Lx0OvVTmCDKw1UhHRFLzdxAZsGw0AXEroUXmJQtFM5cgjoYXEOONcwAD-sLkOB5E4kIV4XSJdQHUxLZpfT5kvkwvYLPhCoKS7T6waB-tqe_jeH-eL8VEKqVaNGnyOPUzmlzgwmDgt6fB2GAkY14F6NWf8CKwcgIkwmWDwpxPRdUJoiaYEtyJfsmvgd7Njxung_wA8-h47pORI0p9mIVDmRWkEhuAFbFP0CAfqPKaC3ItHkuYuyRX3aXhA")' }}
            ></div>
          </div>
          <div className="flex-1 bg-white dark:bg-[#1a2831] border border-accent-teal/20 p-8 rounded-2xl flex items-center justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="relative z-10 w-full sm:w-auto">
              <span className="bg-accent-teal text-white text-xs font-black px-3 py-1 rounded-full uppercase mb-4 inline-block">Early Bird</span>
              <h3 className="text-2xl font-bold mb-2">Europe Summer 2024</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">Plan ahead and save up to $500 on flights.</p>
              <Link href="/search" className="bg-accent-teal text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-teal-500/20 hover:shadow-xl transition-all cursor-pointer inline-block">Explore Dates</Link>
            </div>
            <div
              className="hidden md:block w-48 h-48 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs0bd4-zzn7Y3TqanWBUxVFrEokMoXZvAehIf_YRuknXkGY8IskpM6nvM534fxPAH_yTf8UfovHSWHQxnmBWvV5GWRSfG5eDsFo8h_gbBOgJhHc2lRv_SJoqkUOqAWfoteKBri6tPmEcV4-LF1l0_cI29vkp5KvEATuU2le4NRZs6BQuAgT9ihD8r3ci2p6pwpAFlOvKRi3OomY7nd50W7eqBlSApMwZwJpyPGmo6B2x_Yw8Mf8T8i0aM1-ZVlnXB97WJHKEcOkg")' }}
            ></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
