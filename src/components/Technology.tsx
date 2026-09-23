import { use } from "react";
import type { ITechnology } from "../types/techtype";

interface ITechnologyProps{
    technologiesPromise : Promise<ITechnology[]>;
}

const Technology = ({technologiesPromise}: ITechnologyProps) => {
       console.log(technologiesPromise,"technologiesPromise");

const data = use(technologiesPromise);
         console.log(data ,"data");

    return (
    <section className=" container mx-auto py-4 px-20">
            <h2 className="text-4xl font-bold mb-2">Explore the <span className=" text-fuchsia-500">Technologies</span> </h2>
            <p  className=" text-xl text-gray-500 font-normal mb-10">Pick one technology per category to build your ideal stack.</p>

           
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                { data.map( (item) => {
                       return (
                        <div className="flex flex-col justify-between gap-3 rounded-2xl border border-slate-300 bg-white p-4 shadow-xs transition-shadow hover:shadow-md" >
                        <div >
                             <div className="flex justify-between items-center mb-4">
                                   <img src={item.icon} alt = {item.name} className="w-8 h-8"></img>
                                <h6 className="text-md text-blue-400">{item.badge}</h6>
                              
                            </div>
                               <h2 className="  text-slate-950 text-2xl font-bold mb-2">{item.name}</h2>
                               <p className="text-md text-gray-500 " >{item.description}</p>
                        </div>

                          <div className="flex items-center justify-between ">
                            <span className="text-md text-gray-500">{item.category}</span>
                             <span className="text-md text-gray-500">{item.difficulty}</span>
                              <span>{item.rating}</span>
                          </div>    

                              <button className=" bg-slate-950 text-xl text-gray-100 border rounded-2xl px-10 py-4" >{item.buttonText}</button>

                        </div>
                    
                       );
                   })
                       }
              </div>

               <div className=" lg:col-span-1 lg:sticky rounded-2xl border border-slate-300 bg-white p-4 shadow-xs transition-shadow hover:shadow-md ">
                <h2 className="text-xl font-bold ">Your Stack</h2>
                <p className="text-md text-gray-500"> no technologies selected</p>
                <button></button>
              </div>
                   
          </div>
    </section>
    );
};

export default Technology;