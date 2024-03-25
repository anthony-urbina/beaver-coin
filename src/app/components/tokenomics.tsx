import Image from "next/image";
import { TokenomicsIcon } from "./icons/tokenomics";

export const Tokenomics = () => {
  return (
    <section className='w-full flex-col flex gap-y-8 items-center' id='tokenomics'>
      <h1 className='font-bold text-5xl'>Tokenomics</h1>

      <div className='flex items-center'>
        <div className='basis-2/5 relative h-auto'>
          <TokenomicsIcon />
        </div>
        <div className='basis-6/12 flex flex-col gap-y-5'>
          <ul className='list-disc text-2xl'>
            <li>69.00B $PUSS</li>
            <li>90% in circulation</li>
            <li>10% reserved for CEXs</li>
            <li>No presale</li>
            <li>No BS</li>
            <li className='pt-8 absolute list-none'>0x687e1a7aef17b78b</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
