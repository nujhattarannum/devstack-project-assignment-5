import Logo from "../assets/logo-text.png"

const Navbar = () =>{
  return <nav className = "flex items-center justify-between gap-4 container mx-auto px-20 py-4 border-b border-b-gray-100">
    
    <img src = {Logo} className ="w-30 h-auto" alt=""></img>

   
    <ul className="flex gap-4 align center text-gray-700 font-normal">
        <li className="text-pink-600"><a href ="">Home</a></li>
        <li><a href ="">Technologies</a></li>
        <li><a href ="">Projects</a></li> 
        <li><a href ="">About</a></li>
        <li><a href ="">Contact</a></li>
    </ul>
 
    <div className="flex items-center gap-4">
        <button className="hover:scale-110 transition">Sign In</button>
        <button className="bg-pink-500 text-white px-4 py-2 border rounded-[22px] hover:scale-110 transition">
          Sign Up
        </button>
    </div>
  </nav>
};

export default Navbar ;