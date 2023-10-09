import React from "react";
interface Props {
  data: EducationSection;
}

function EducationSection({ data }: Props) {
  return (
    <div className="border-b-2 m-1/25">
      <div className="grid grid-cols-5 gap-4 my-1/50">
        <span className="col-span-2 font-bold text-xl">{data.institution}</span>
        <span className="col-span-3 font-bold text-xl">{data.title}</span>
        <div className="col-span-2">
          <span className="bg-app-highlighter-color w-fit px-4 py-1">
            {data.initDate} - {data.endDate}
          </span>
        </div>
        <span className="col-span-3 base-text">{data.description}</span>
      </div>
    </div>
  );
}

export { EducationSection };
