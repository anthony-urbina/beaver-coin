import Image from "next/image";

export const Increment = ({ className }: { className?: string }) => {
  return (
    <div className='relative'>
      <div className='bg-[#152E65] rounded-full w-16 h-16' />
      <Image
        src={"/images/increment-logo.webp"}
        alt='increment-logo'
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        width={50}
        height={50}
      />
    </div>
  );
};
