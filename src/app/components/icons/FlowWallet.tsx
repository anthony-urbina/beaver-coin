import Image from "next/image";

export const FlowWallet = ({ className }: { className?: string }) => {
  return (
    <div className='relative rounded-full w-16 h-16 overflow-hidden '>
      <Image
        src={"/images/flow-ref-logo.png"}
        alt='flow-wallet-logo'
        width={160}
        height={160}
        className='w-full h-full object-cover'
      />
    </div>
  );
};
