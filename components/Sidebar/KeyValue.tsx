import React from "react";

type Props = {
  keyText: string;
  valueText: string;
};

const KeyValue: React.FC<Props> = ({ keyText, valueText }) => {
  return (
    <div className="flex justify-between base-text">
      <div>{keyText}</div>
      <div>{valueText}</div>
    </div>
  );
};

export { KeyValue };
