import Image from "next/image";
import Features from "@/components/features";
import { productsImagesHero1 } from "@/app/data/productsImages";

export default function Landing1() {
  return (
    <div className="h-full w-full pb-[2rem]">
      <div className="relative w-screen pt-hero bg-hero-1">
        <div className="grid grid-cols-3 gap-3 md:gap-5 mt-8 md:mt-0 pl-[2%] md:pl-[4%]">
          {/*Hero C Image Show on Large Devices */}
          <div className="flex hidden md:block justify-end pt-[50%] md:pt-[30%] relative h-full">
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

          <div className="relative col-span-3 md:col-span-2 pb-[20%] px-[10%] md:pr-[14%]">
            {/*Hero C Image Show on small Devices */}
            <div className="absolute inset-0 md:hidden w-full h-full aspect-[2/1] flex justify-center z-[0]">
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

        <div className="absolute top-[100%] w-full -translate-y-1/2 grid grid-cols-3 gap-3 md:gap-5  pl-[2%] md:pl-[4%]">
          <div className="flex col-span-3 md:col-span-1 justify-center md:justify-start  w-full">
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
          <div className="col-span-2 hidden md:flex items-center justify-start w-full px-10">
            <Features></Features>
          </div>
        </div>
      </div>

      {/*Features Display on small devices  */}
      <div className="flex md:hidden mt-[40%]  items-center justify-center w-full px-4">
        <Features></Features>
      </div>

 <div className="mt-[4rem] md:mt-[10rem] p-4 relative">
   <div className="absolute inset-0 flex justify-center items-center pb-[4rem] md:pb-[12rem] text-white opacity-30">
     <span className="text-[4rem] md:text-[8rem] font-bold">Displays</span>
   </div>
   <div className="flex flex-wrap gap-4 md:gap-0 justify-center relative">
     {productsImagesHero1?.map((item, index) => {
       return (
         <div key={index} className="relative md:w-1/4 w-full group cursor-pointer">
           <div className="relative w-full h-[500px] aspect-[2/1] flex flex-col justify-center items-center">
             <Image
               src={item?.path}
               alt={item?.name}
               fill
               style={{ objectFit: "cover" }}
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
