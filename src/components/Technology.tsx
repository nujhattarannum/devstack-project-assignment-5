import { use,useState } from "react";
import type { ITechnology } from "../types/techtype";
import { toast } from "react-toastify";

interface ITechnologyProps{
    technologiesPromise : Promise<ITechnology[]>;
}

const Technology = ({technologiesPromise}: ITechnologyProps) => {
       console.log(technologiesPromise,"technologiesPromise");
          
    {/* for count array*/}
      const [stack, setStack] = useState <ITechnology[]> ([]);

const data = use(technologiesPromise);
         console.log(data ,"data");
      
         const handleAddToStack = (item: ITechnology) => {
    const alreadyExists = stack.some(
        (stackItem) => stackItem.id === item.id
    );

    if (alreadyExists) {
        toast.warning(`${item.id} is already in your stack!` );
        return;
    }

    setStack([...stack, item]);
        toast.success(`${item.id} added to cart !`);
};

        {/* for removing item*/}
     
    const handleRemoveFromStack = (item: ITechnology) => {
         
        setStack(stack.filter((item) => item.id !== item.id));
        toast.success(`${item.id} is removed from your stack!` );
         
    };

         {/* for removing  All item*/}
         
       const handleRemoveAll = () => {
           setStack([]);
             toast.success(`all items removed from your stack!` );
       };
       
    return (
    <section className=" container mx-auto px-4 py-6 text-center md:py-4 md:px-10 md:text-left">
        
            <h2 className=" text-2xl font-bold mb-2 md:text-4xl ">Explore the <span className=" text-fuchsia-500">Technologies</span> </h2>
            <p  className=" text-gray-500 text-sm font-normal mb-6 md:text-xl md:mb-10">
                Pick one technology per category to build your ideal stack.</p>
      
           
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
                { 
                data.map( (item) => {
                     const isAdded = stack.some( (stackItem) => stackItem.id === item.id );
                       return (
                        <div className="flex flex-col justify-between gap-3 rounded-2xl m-3 border border-slate-300 bg-white p-4 shadow-xs transition-shadow hover:shadow-md" >
                        {/* Card Top Container */}
<div>
  {/* Mobile View: Icon + Name side-by-side | Desktop View: Icon top left, Badge top right */}
  <div className="flex items-center justify-between gap-2">
    <img src={item.icon} alt={item.name} className="h-8 w-8 object-contain" />

    {/* Title visible beside icon ONLY on mobile */}
    <h2 className="text-base font-bold text-slate-950 md:hidden">{item.name}</h2>

    {/* Badge aligned to the right */}
    {item.badge && (
      <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${item.badgeColor}`}>
        {item.badge}
      </span>
    )}
  </div>

  {/* Title visible below icon ONLY on desktop */}
  <h2 className="mt-3 hidden text-2xl font-bold text-slate-950 md:block">{item.name}</h2>
</div>
                               <p className=" text-sm text-gray-500 text-left mb-4  md:text-md" >{item.description}</p>
                         <div className="flex items-center justify-between gap-2 text-xs">
  
                         <span className="shrink-0 rounded-lg bg-slate-100/80 px-2.5 py-1 font-medium text-gray-500">
                                {item.category}
                          </span>


                         <span className="truncate text-center text-gray-500">
                                      {item.difficulty}
                           </span>

 
                              <span className="flex shrink-0 items-center gap-1 font-bold text-gray-600">
                                           <span className="text-amber-400">★</span>
                                                {item.rating}
                                                     </span>
                              </div>
  
                         <button onClick={() => handleAddToStack(item)} 
                                disabled={isAdded}
                             className={`text-xl border rounded-2xl px-10 py-4 
                                ${ isAdded ? "bg-gray-400 text-white cursor-not-allowed" : "bg-slate-950 text-gray-100" }`}>
                            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                        </button>
            
                        </div>
                    
                       );
                   })
                       }
              </div>
                  {/* your stack part */}

               <div className="lg:col-span-1 lg:sticky lg:top-24 self-start rounded-2xl border border-slate-300 bg-white p-4 shadow-xs">

    <h2 className="text-xl font-bold">
        Your Stack
    </h2>


    {stack.length === 0 ? (
       
       <div >
         <p className="text-md text-gray-500 mb-4">
        No Technologies Selected yet
    </p>
            <p className=" mt-5 flex h-20 items-center justify-center rounded-2xl border border-dashed border-slate-300text-sm text-slate-400">
                Your stack is empty.
            </p>
        </div>

    ) : (

        <>
            <div className="flex flex-col gap-3">
                <p className="text-md text-gray-500 mb-4">
        {stack.length} Technology Selected
    </p>
                {stack.map((item) => (

                    <div
                        key={item.id}
                        className="flex items-center justify-between border rounded-xl p-3  border-gray-200 shadow "
                    >

                        <div className="flex items-center gap-3">

                            <img src = {item.icon} alt={item.name} className="w-8 h-8"  />

                            <div>
                                <h3 className=" text-md font-semibold">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {item.category}
                                </p>
                            </div>

                        </div>

                        <button onClick={() => handleRemoveFromStack(item)}
                            className="text-gray-500 font-bold">
                            ✕
                        </button>

                    </div>

                ))}

            </div>

            <button
                onClick={handleRemoveAll}
                className="w-full mt-16 border border-red-500 font-semibold rounded-xl bg-gray-50 px-4 py-3 text-red-500">
                Remove All
            </button>
        </>

    )}

</div>
                   
          </div>
    </section>
    );
};

export default Technology;