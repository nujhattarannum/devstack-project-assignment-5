import BannerLogo from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="flex justify-between container mx-auto py-4 px-20">
            <div className="space-y-4 py-15 ">
            <h2 className="text-5xl font-bold">Build Your Ideal <br></br>
             <span  className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-800 bg-clip-text text-transparent">Development Stack</span></h2>

            <p className="text-gray-500">Explore frontend , backend ,database and tooling options,<br></br>
                 compare them side by side, and put together the stack that fits your<br></br>
                 next project</p>
                 
                 <div className="flex gap-4  mt-10">
                    <button className="text-gray-500 px-4 py-2 border rounded-2xl  hover:scale-110 transition
                     bg-linear-to-r from-orange-500 to-pink-500 text-white font-medium">Explore Technologies</button>
                      <button className="text-gray-500 px-8 py-2 border rounded-2xl  hover:scale-110 transition" >Learn More</button>
                 </div>
            </div>

            <img src = {BannerLogo} className ="w-95 h-95" alt=""></img>
        </div>
    );
};

export default Banner;