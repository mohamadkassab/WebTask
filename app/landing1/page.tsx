import Image from "next/image";
import Features from "@/components/features";
import { productsImagesHero1 } from "@/app/data/productsImages";

export default function Landing1() {
  return (
    <div className="h-full w-full pb-[2rem]">
      <div className="relative w-screen pt-hero bg-hero-1">
        <div className="grid grid-cols-3 gap-3 md:gap-5 mt-8 md:mt-0 pl-[2%] md:pl-[4%]">

          {/*Hero C Image Show on Large Devices */}
          <div className="flex hidden lg:block justify-end pt-[50%] md:pt-[30%] relative h-full">
            <div className="relative w-full h-full aspect-[2/1] flex justify-center">
              <Image
                src="/c-letter.png"
                alt="C"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          <div className="relative col-span-3 lg:col-span-2 pt-[10%] pb-[20%] px-[10%] lg:pr-[14%]">
            {/*Hero C Image Show on small Devices */}
            <div className="absolute inset-0 lg:hidden w-full h-full aspect-[2/1] flex justify-center z-[0]">
              <Image
                src="/c-letter.png"
                alt="C"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className="relative w-full h-full flex flex-col z-10">
              <h1 className="text-2xl md:text-6xl font-normal">Chocolate</h1>
              <p className="font-roboto font-medium text-xs mt-2">
                {`All you need is love. But a little chocolate now and then
                doesn't hurt.`}
              </p>
              <p className="font-roboto font-light text-xs mt-1 md:mt-2">
                (Charles M. Shulz)
              </p>
              <p className="font-roboto font-light text-xs  mt-4 md:mt-8">
                Pastry is baked food made with a dough of flour, water, and
                shortening that may be savoury or sweetened. Sweetened pastries
                are often described as bakers confectionery.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-[100%] w-full -translate-y-2/5 sm:-translate-y-1/2 grid grid-cols-3 gap-3 md:gap-5   lg:pl-[110px]">
          <div className="flex col-span-3 lg:col-span-1 justify-center lg:justify-start  w-full">
          <div className="relative w-[280px] h-[280px] md:w-[310px] md:h-[310px]">
              <Image
                src="/chocolate application.png"
                alt="chocolate"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Features Display on large devices  */}
          <div className="col-span-2 hidden lg:flex items-center justify-start w-full lg:px-10">
            <Features></Features>
          </div>
        </div>
      </div>

      {/*Features Display on small devices  */}
      <div className="flex lg:hidden mt-[50%] md:mt-[30%]  items-center justify-center w-full px-4">
        <Features></Features>
      </div>

 <div className="mt-[4rem] lg:mt-[10rem] p-4 relative">
   <div className="absolute inset-0 flex justify-center items-center pb-[4rem] lg:pb-[12rem] text-white opacity-30">
     <span className="text-[4rem] lg:text-[8rem] font-bold">Displays</span>
   </div>
   <div className="flex flex-wrap flex-col lg:flex-row items-center gap-4 lg:gap-0 justify-center relative">
     {productsImagesHero1?.map((item, index) => {
       return (
         <div key={index} className="relative lg:w-1/4 w-full group cursor-pointer">
           <div className="relative w-full h-[500px] aspect-[2/1] flex flex-col justify-center items-center">
             <Image
               src={item?.path}
               alt={item?.name}
               fill
               style={{ objectFit: "contain" }}
               priority
             />
           </div>
           <div className="absolute inset-0 top-[90%] w-full text-xs text-center">
             <p className="font-medium group-hover:text-hover">
               {item?.name}
             </p>
           </div>
         </div>
       );
     })}
   </div>
 </div>


    </div>
  );
}
