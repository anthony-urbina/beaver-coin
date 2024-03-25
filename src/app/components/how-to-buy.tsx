import { Flow } from "./icons/Flow";
import { FlowWallet } from "./icons/FlowWallet";
import { Increment } from "./icons/Increment";
import { Wallet } from "./icons/wallet";

export const HowToBuy = () => {
  return (
    <section className='w-full flex-col flex gap-y-24 items-center' id='how-to-buy'>
      <h1 className='font-bold text-5xl'>How to Buy</h1>
      <div className='flex flex-col gap-y-4 w-full'>
        {steps.map((step, idx) => {
          return (
            <BlueSection key={`${step.title}-${idx}`}>
              <h2 className='text-4xl font-bold'>{step.title}</h2>
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
    <section className='w-full flex flex-col items-center justify-center gap-y-4 bg-blue py-12 px-5 rounded-[1.25rem] text-3xl'>
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
          IncrementFi
        </a>
      </p>
    ),
    description: "On IncrementFi, click 'Swap', select FLOW for PUSS, and click 'Swap'",
    image: <Increment />,
  },
];
