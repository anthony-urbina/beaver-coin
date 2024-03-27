import Image from "next/image";
import { TokenomicsIcon } from "./icons/tokenomics";

export const Tokenomics = () => {
  return (
    <section className='w-full flex-col flex gap-y-8 items-center' id='tokenomics'>
      <h1 className='font-bold md:text-5xl text-4xl'>Tokenomics</h1>

      <div className='md:flex md:items-center'>
        <div className='basis-2/5 relative h-auto w-auto'>
          <TokenomicsIcon className='md:w-[554px] md:h-[554px] w-[300px] h-[300px]' />
        </div>
        <div className='basis-6/12 flex flex-col gap-y-5'>
          <ul className='list-disc md:text-2xl text-lg'>
            <li>69.00B $PUSS</li>
            <li>90% in circulation</li>
            <li>10% reserved for CEXs</li>
            <li>No presale</li>
            <li>No BS</li>
            <li className='pt-8 absolute list-none underline'>
              <a href='https://contractbrowser.com/A.687e1a7aef17b78b.Beaver' target='_blank' >CA: A.687e1a7aef17b78b.Beaver</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
