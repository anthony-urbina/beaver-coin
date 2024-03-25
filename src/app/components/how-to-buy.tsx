import { Flow } from "./icons/Flow";
import { FlowWallet } from "./icons/FlowWallet";
import { Increment } from "./icons/Increment";
import { Wallet } from "./icons/wallet";

export const HowToBuy = () => {
  return (
    <section className='w-full flex-col flex md:gap-y-24 gap-y-12 items-center' id='how-to-buy'>
      <h1 className='font-bold md:text-5xl text-3xl'>How to Buy</h1>
      <div className='flex flex-col gap-y-4 w-full'>
        {steps.map((step, idx) => {
          return (
            <BlueSection key={`${step.title}-${idx}`}>
              <h2 className='md:text-4xl text-2xl font-bold'>{step.title}</h2>
              <p>{step.description}</p>
              {step.image}
            </BlueSection>
          );
        })}
      </div>
    </section>
  );
};

export const BlueSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='w-full flex flex-col items-center justify-center md:gap-y-4 gap-y-2 bg-blue md:p-12 p-8 text-xl rounded-[1.25rem] md:text-3xl'>
      {children}
    </section>
  );
};

const steps = [
  {
    title: "Create a Wallet",
    description: "Install the Flow wallet app/extension",
    image: <FlowWallet />,
  },
  {
    title: "Load Your Wallet",
    description: "Buy Flow from a trusted exchange and send it to your Flow wallet",
    image: <Flow />,
  },

  {
    title: (
      <p>
        Swap on{" "}
        <a
          href='https://app.increment.fi/swap?in=A.1654653399040a61.FlowToken&out=A.687e1a7aef17b78b.Beaver'
          target='_blank'
          className='underline'
        >
          Increment
        </a>
      </p>
    ),
    description: "On Increment, click 'Swap', select FLOW for PUSS, and click 'Swap'",
    image: <Increment />,
  },
];
