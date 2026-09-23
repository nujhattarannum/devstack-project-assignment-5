import Logo from "../assets/logo-text.png"

const Footer = () => {
    return (
    <footer className="border-t border-slate-100 bg-white pt-16 pb-12 container mx-auto py-4 px-20">
      <div className="container mx-auto ">
        {/* Top Section: Brand Column + Navigation Links */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2">
            <img src= {Logo} alt="Dev Stack" className="h-auto w-32 mb-4" />
            <p className="max-w-sm text-sm text-slate-500 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-6 font-semibold text-xs text-slate-700">
              <a href="https://github.com"  className="hover:text-pink-600 transition">
                GitHub
              </a>
              <a href="https://twitter.com"  className="hover:text-pink-600 transition">
                Twitter
              </a>
              <a href="https://linkedin.com"  className="hover:text-pink-600 transition">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-slate-900 uppercase">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href=" " className="hover:text-slate-900 transition">Home</a></li>
              <li><a href=" " className="hover:text-slate-900 transition">Technologies</a></li>
              <li><a href=" " className="hover:text-slate-900 transition">Projects</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-slate-900 uppercase">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="" className="hover:text-slate-900 transition">About</a></li>
              <li><a href="" className="hover:text-slate-900 transition">Contact</a></li>
              <li><a href="" className="hover:text-slate-900 transition">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-slate-900 uppercase">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="my-10 border-t border-slate-100" />

        {/* Bottom Section: Copyright & Secondary Legal Links */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-600 transition">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
       
    );
};

export default Footer;