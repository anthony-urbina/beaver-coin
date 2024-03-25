import { BeaverLogo } from "./icons/beaver-logo";
import { HamburgerMenu } from "./icons/hamburger-menu";

export const Navbar = () => {
  return (
    <section className='w-full flex items-center justify-between'>
      <section className='text-3xl md:text-[2.5rem] flex gap-x-2 md:gap-x-3 items-center font-medium'>
        <BeaverLogo className='w-9 h-9 md:w-14 md:h-14' />
        <div>BeaverCoin</div>
      </section>
      <section className='hidden md:block'>
        <ul className='flex gap-x-2 text-xl font-medium'>
          <Li>
            <a href='#about'>About</a>
          </Li>
          <Li>
            <a href='#tokenomics'>Tokenomics</a>
          </Li>
          <Li>
            <a
              href='https://app.increment.fi/swap?in=A.1654653399040a61.FlowToken&out=A.687e1a7aef17b78b.Beaver'
              className='gradient-border'
            >
              Buy
            </a>
          </Li>
        </ul>
      </section>
      <section className='md:hidden'>
        <HamburgerMenu fill='white' className=' fill-white' />
      </section>
    </section>
  );
};

const Li = ({ children }: { children: React.ReactNode }) => {
  return <li className='py-2 px-5'>{children}</li>;
};
