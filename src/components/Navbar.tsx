import Logo from "../assets/logo-text.png"

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-b-gray-100 bg-white/95 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-3 lg:px-10 md:py-4">

            {/* Mobile Navbar */}
            <div className="grid grid-cols-3 items-center md:hidden">

                {/* Hamburger */}
                <button className="flex w-fit flex-col gap-1">
                    <span className="h-0.5 w-4 bg-gray-600"></span>
                    <span className="h-0.5 w-4 bg-gray-600"></span>
                    <span className="h-0.5 w-4 bg-gray-600"></span>
                </button>

                {/* Logo */}
                <img
                    src={Logo}
                    className="mx-auto h-auto w-24"
                    alt="Dev Stack"
                />

                {/* Buttons */}
                <div className="flex items-center justify-end gap-2">
                    <button className="text-[10px] font-medium">
                        Sign In
                    </button>

                    <button className="rounded-[22px] bg-pink-500 px-3 py-1.5 text-[10px] text-white">
                        Sign Up
                    </button>
                </div>

            </div>


            {/* Desktop Navbar */}
            <div className="hidden items-center justify-between gap-4 md:flex">

                {/* Logo */}
                <img
                    src={Logo}
                    className="h-auto w-30"
                    alt="Dev Stack"
                />

                {/* Navigation */}
                <ul className="flex gap-4 text-gray-700 font-normal">

                    <li className="text-pink-600">
                        <a href="">Home</a>
                    </li>

                    <li>
                        <a href="">Technologies</a>
                    </li>

                    <li>
                        <a href="">Projects</a>
                    </li>

                    <li>
                        <a href="">About</a>
                    </li>

                    <li>
                        <a href="">Contact</a>
                    </li>

                </ul>

                {/* Sign In / Sign Up */}
                <div className="flex items-center gap-4">

                    <button className="hover:scale-110 transition">
                        Sign In
                    </button>

                    <button className="rounded-[22px] bg-pink-500 px-4 py-2 text-white hover:scale-110 transition">
                        Sign Up
                    </button>

                </div>

            </div>

        </nav>
        </header>
    );
};

export default Navbar;