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
            <h2 className="text-2xl font-bold">Explore the <span className=" text-fuchsia-500">Technologies</span> </h2>
            <p  className="text-gray-700 font-normal">Pick one technology per category to build your ideal stack.</p>

           
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3">
                { data.map( (item) => {
                       return (
                        <div className="border rounded-2xl p-4" >
                            <h6 className="text-xl text-blue-400">{item.badge}</h6>
                            <img src={item.icon} alt = {item.name} className="w-8 h-8"></img>
                            <h2 className="  text-slate-950 text-2xl font-bold ">{item.name}</h2>
                            <p className="text-xl text-gray-500" >{item.description}</p>
                            <p className="text-xl text-gray-500">{item.category}</p>
                             <p className="text-xl text-gray-500">{item.difficulty}</p>
                              <p>{item.rating}</p>
                              <button className=" bg-slate-950 text-2xl text-gray-100 border rounded-2xl px-10 py-4" >{item.buttonText}</button>

                        </div>
                    
                       );
                   })
                       }
              </div>

               <div className=" lg:col-span-1 lg:sticky">
              </div>
                   
          </div>
    </section>
    );
};

export default Technology;