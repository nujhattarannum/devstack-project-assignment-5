import BannerLogo from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start container mx-auto px-2 py-2 md:py-4  md:px-10 text-center md:text-left">

            <div className="space-y-4 py-4 md:py-15">

                <h2 className="text-3xl md:text-5xl font-bold">
                    Build Your Ideal <br ></br>
                    <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-800 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h2>

                <p className="text-gray-500 text-sm md:text-base">
                    Explore frontend, backend, database and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project
                </p>

                <div className="flex gap-4 mt-6 md:mt-10 justify-center md:justify-start">

                    <button className="text-gray-500 px-4 py-2 border rounded-2xl hover:scale-110 transition bg-linear-to-r from-orange-500 to-pink-500 text-white font-medium">
                        Explore Technologies
                    </button>

                    <button className="text-gray-500 px-8 py-2 border rounded-2xl hover:scale-110 transition">
                        Learn More
                    </button>

                </div>
            </div>

            <img
                src={BannerLogo}
                className="w-72 h-auto md:w-95 md:h-95"
                alt=""></img>

        </div>
    );
};

export default Banner;