import React from "react";
interface Props {
  title: string;
  description: string;
}

function ProfileSection({ title, description }: Props) {
  return (
    <div className="grid grid-flow-row auto-rows-max gap-1 justify-center">
      <div className="flex justify-center">
        <span className="font-bold text-center text-3xl">{title}</span>
      </div>
      <div className="flex justify-center">
        <span className="base-text text-center w-1/2">{description}</span>
      </div>
    </div>
  );
}

export { ProfileSection };
