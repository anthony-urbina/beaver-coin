import { BeaverLogo } from "./icons/beaver-logo";

export const Navbar = () => {
  return (
    <div className='w-full flex  justify-between'>
      <section className='text-[2.5rem] flex gap-x-3 items-center font-medium'>
        <BeaverLogo />
        <div>BeaverCoin</div>
      </section>
      <section>
        <ul className='flex gap-x-2 text-xl font-medium'>
          <Li>
            <a href='#about'>About</a>
          </Li>
          <Li>
            <a href='#tokenomics'>Tokenomics</a>
          </Li>
          <Li>
            <a href='' className='gradient-border'>
              Buy
            </a>
          </Li>
        </ul>
      </section>
    </div>
  );
};

const Li = ({ children }: { children: React.ReactNode }) => {
  return <li className='py-2 px-5'>{children}</li>;
};
