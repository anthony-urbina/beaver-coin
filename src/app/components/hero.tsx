import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className='flex grow w-full justify-between items-center' id='about'>
      <div className='basis-6/12 flex flex-col gap-y-5'>
        <h1 className='text-6xl font-bold leading-[4rem]'>Beavers make the blockchain better</h1>
        <p className='text-3xl'>If she leavin, then my teeth aint beavin</p>
      </div>
      <div className='basis-2/5 relative h-auto'>
        <Image src={"/images/beaver.png"} alt='beaver-logo' width={650} height={595} />
      </div>
    </section>
  );
};
