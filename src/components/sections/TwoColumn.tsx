import ColumnCallout from "../ui/ColumnCallout";
import { columnCallouts } from "../../data/twoColumn";

const TwoColumn = () => {
  return (
    <section className="flex w-full flex-col items-start bg-white sm:flex-row">
      {columnCallouts.map((column) => (
        <ColumnCallout
          key={column.id}
          column={column}
          heightClassName="h-[400px] sm:h-[500px] md:h-[560px] lg:h-[620px] xl:h-[780px]"
        />
      ))}
    </section>
  );
};

export default TwoColumn;
