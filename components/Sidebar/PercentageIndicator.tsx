import { ReactNode } from "react";

interface Props {
  percentage: number;
  title: ReactNode;
}

const PercentageIndicator = ({
  percentage,
  title,
}: Props) => {
  return (
    <div>
      <div className="flex justify-between py-1 base-text">
        <span>{title}</span>
        <span>{percentage}%</span>
      </div>
      <div className="percentage-indicator">
        <div
          className="bg-yellow-500 h-1 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export { PercentageIndicator };
