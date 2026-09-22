import { use } from "react";
import type { ITechnology } from "../types/techtype";

interface ITechnologyProps{
    technologiesPromise : Promise<ITechnology[]>;
}

const Technology = ({technologiesPromise}: ITechnologyProps) => {
      
const data = use(technologiesPromise);
         console.log(data ,"data");

    return (
    <section className=" container mx-auto py-4 px-20">
            <h2 className="text-2xl font-bold">Explore the <span className=" text-fuchsia-500">Technologies</span> </h2>
            <p  className="text-gray-700 font-normal">Pick one technology per category to build your ideal stack.</p>

           
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">

              </div>

               <div className=" lg:col-span-1 lg:sticky">
              </div>

          </div>
    </section>
    );
};

export default Technology;