import React from "react";
import { WordSection } from './TextPicBlockStyle'

const Block: React.FC = () => {
  return (
    <section className="h-fit xl:grid xl:place-items-center xl:mt-5 max-w-7xl">
      <div className="xl:grid grid-cols-2 xl:gap-1">
        <WordSection>
          <h1>
            <span>Form with engaging interfaces,</span> defying the
            ordinary.
          </h1>
          <p>
            Enhance your data collection efforts by designing forms that not
            only capture signups and feedback but also offer a{" "} 
            <span>refreshing user experience.</span>
          </p>

          <div className="button__row flex w-full gap-5">
            <a href="" className="py-2 px-3 bg-slate-900 text-white rounded-md text-sm">Get started - it's free</a>
            <a href="" className="py-2 px-3 text-slate-800 text-sm font-bold ">Browse templates</a>
          </div>
        </WordSection>
        <div></div>
      </div>
    </section>
  );
};

export default Block;
