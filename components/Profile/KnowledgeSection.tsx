import React from "react";
import * as FaIcons from "react-icons/ri";
import { IconType } from "react-icons";

interface Props {
  iconName: string;
  title: string;
  description: string;
}

function KnowledgeSection({ iconName, title, description }: Props) {
  var iconNameComponent = iconName as keyof typeof FaIcons;
  const IconComponent = FaIcons[iconNameComponent] as IconType;
  return (
    <div className="card">
      <div className="grid grid-flow-row auto-rows-max m-1/10">
        <div className="flex justify-center">
          <IconComponent className="h-full w-1/3 app-highlighter-color" />
        </div>
        <div className="grid grid-flow-dense grid-rows-2">
          <span className="grid place-content-center font-bold text-xl">
            {title}
          </span>
          <span className="grid place-content-center base-text text-center">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}

export { KnowledgeSection };
