import ColumnCallout from "../ui/ColumnCallout";
import { mainCallout, smallCallouts } from "../../data/detailedCallout";

const DetailedCallout = () => {
  return (
    <section className="flex w-full flex-col items-start bg-white lg:flex-row">
      {/* Large callout column */}
      <div className="w-full lg:w-1/2">
        <ColumnCallout
          column={mainCallout}
          heightClassName="h-[500px] sm:h-[560px] md:h-[620px] lg:h-[780px]"
        />
      </div>

      {/* 2x2 grid of small callouts */}
      <div className="grid h-[500px] w-full grid-cols-2 grid-rows-2 sm:h-[560px] md:h-[620px] lg:h-[780px] lg:w-1/2">
        {smallCallouts.map((callout) => (
          <ColumnCallout key={callout.id} column={callout} size="small" />
        ))}
      </div>
    </section>
  );
};

export default DetailedCallout;
