import Logo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <footer className="container mx-auto border-t border-slate-100 bg-white px-4 pt-6 pb-6 md:px-10 md:pt-16 md:pb-12">

            <div className="container mx-auto">

                {/* Top Section */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">

                    {/* Brand Info */}
                    <div className="text-center md:text-left lg:col-span-2">

                        <img
                            src={Logo}
                            alt="Dev Stack"
                            className="mx-auto mb-4 h-auto w-32 md:mx-0"
                        />

                        <p className="mx-auto max-w-sm text-sm leading-relaxed text-slate-500 md:mx-0">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex items-center justify-center gap-6 text-xs font-semibold text-slate-700 md:justify-start">

                            <a
                                href="https://github.com"
                                className="transition hover:text-pink-600"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://twitter.com"
                                className="transition hover:text-pink-600"
                            >
                                Twitter
                            </a>

                            <a
                                href="https://linkedin.com"
                                className="transition hover:text-pink-600"
                            >
                                LinkedIn
                            </a>

                        </div>
                    </div>


                    {/* Product - hidden on mobile */}
                    <div className="hidden md:block">

                        <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
                            Product
                        </h4>

                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <a
                                    href=""
                                    className="transition hover:text-slate-900"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href=""
                                    className="transition hover:text-slate-900"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href=""
                                    className="transition hover:text-slate-900"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>

                    </div>


                    {/* Company - hidden on mobile */}
                    <div className="hidden md:block">

                        <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
                            Company
                        </h4>

                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <a
                                    href=""
                                    className="transition hover:text-slate-900"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href=""
                                    className="transition hover:text-slate-900"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href=""
                                    className="transition hover:text-slate-900"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>

                    </div>


                    {/* Legal - hidden on mobile */}
                    <div className="hidden md:block">

                        <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
                            Legal
                        </h4>

                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>


                {/* Divider */}
                <div className="my-6 border-t border-slate-100 md:my-10" />


                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">

                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">

                        <a
                            href="#"
                            className="transition hover:text-slate-600"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-slate-600"
                        >
                            Terms
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;