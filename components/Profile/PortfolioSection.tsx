import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  data: PortfolioSection;
}

function PortfolioSection({ data }: Props) {
  const { t } = useTranslation("common");
  return (
    <div className="card">
      <div className="grid grid-flow-row-dense grid-rows-2 h-full">
        <div className="imageContainer">
          <Image src={data.image} fill alt="foto" />
        </div>
        <div className="grid grid-flow gap-3 m-1/10">
          <span className="flex flex-col justify-center font-bold text-xl">
            {data.title}
          </span>
          <span className="flex flex-col justify-center base-text">
            {data.description}
          </span>
          <div className="flex flex-col justify-center">
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" font-semibold text-xl app-highlighter-color"
            >
              <div>
                {t("profile.learnMore")}
                <FaArrowRight className="inline-block ml-5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PortfolioSection };
