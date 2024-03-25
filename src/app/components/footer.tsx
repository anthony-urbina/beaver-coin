import { BeaverLogo } from "./icons/beaver-logo";
import { HamburgerMenu } from "./icons/hamburger-menu";

export const Footer = () => {
  return (
    <section className='w-full flex  items-center justify-between pt-32 md:pt-0'>
      <div className='container flex flex-col md:flex-row items-center md:justify-between mx-auto'>
        <section className='text-xl flex gap-x-2 md:gap-x-3 items-center font-medium'>
          <p>&copy; Beaver Coin 2024</p>
        </section>
        <section className=''>
          <ul className='flex gap-x-2 text-xl font-medium'>
            <Li>
              <a href='#about'>About</a>
            </Li>
            <Li>
              <a href='#tokenomics'>Tokenomics</a>
            </Li>
            <Li>
              <a
                className='underline'
                href='https://app.increment.fi/swap?in=A.1654653399040a61.FlowToken&out=A.687e1a7aef17b78b.Beaver'
                target='_blank'
              >
                Buy
              </a>
            </Li>
          </ul>
        </section>
      </div>
    </section>
  );
};

const Li = ({ children }: { children: React.ReactNode }) => {
  return <li className='py-2 px-5'>{children}</li>;
};
