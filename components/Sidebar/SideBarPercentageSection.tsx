import { PercentageIndicator } from "./PercentageIndicator";

interface Props {
  title: string;
  data: PercentKeyValue[];
}

const SidebarPercentageSection = ({ title, data }: Props) => {
  return (
    <div className="sidebar-section">
      <span className="font-bold">{title}</span>
      {data.map((item, index) => (
        <PercentageIndicator
          key={index}
          percentage={item.percentage}
          title={item.title}
        />
      ))}
    </div>
  );
};

export { SidebarPercentageSection };
