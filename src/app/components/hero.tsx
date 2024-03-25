import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className='flex flex-col md:flex-row grow w-full justify-between items-center -mt-9' id='about'>
      <div className='basis-6/12 flex flex-col gap-y-2 md:gap-y-5'>
        <h1 className='md:text-6xl font-bold md:leading-[4rem] text-4xl'>
          Beavers make the blockchain better
        </h1>
        <p className='text-xl'>If she leavin, then my teeth aint beavin</p>
      </div>
      <div className='basis-2/5 relative h-auto'>
        <Image
          src={"/images/beaver.png"}
          alt='beaver-logo'
          width={650}
          height={595}
          className='hidden md:block'
        />
        <Image
          src={"/images/beaver.png"}
          alt='beaver-logo'
          width={325}
          height={297.5}
          className='md:hidden'
        />
      </div>
    </section>
  );
};
