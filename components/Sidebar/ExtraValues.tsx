import { FC } from "react";
import { FaBox } from "react-icons/fa";

interface ExtraValuesProps {
  values: string[];
  icon?: FC;
}

const ExtraValues: FC<ExtraValuesProps> = ({ values, icon: Icon = FaBox }) => {
  var str = values.join(", ");
  return (
    <div className="flex items-center space-x-5 ">
      <Icon className="flex-none app-highlighter-color w-5" />
      <span className="base-text"> {str} </span>
    </div>
  );
};

export { ExtraValues };
