import { useTranslation } from "next-i18next";
import React from "react";
import Image from "next/image";
import profilePic from "@/public/img/perfil.jpg";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  name: string;
  jobTitle: string;
  description: string;
  email: string;
  subject: string;
}

function Header({ name, jobTitle, description, email, subject }: Props) {
  const { t } = useTranslation("common");
  return (
    <div className="grid grid-cols-5 gap-5 card">
      <div className="col-span-3 grid grid-flow-row auto-rows-max place-content-between m-1/10">
        <div className="row-span-2 grid place-content-between">
          <span className="font-bold text-5xl">
            {t("profile.greeting")}
            {name}
          </span>
          <span className="font-bold text-5xl app-highlighter-color ">
            {jobTitle}
          </span>
        </div>
        <div className="grid place-content-center">
          <span className="base-text">{description}</span>
        </div>
        <div className="grid content-end">
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-app-highlighter-color w-56 h-16 text-2xl rounded-lg">
              {t("profile.hireMe")}
              <FaArrowRight className="inline-block ml-5" />
            </button>
          </a>
        </div>
      </div>
      <div className="grid col-span-2 place-content-center">
        <Image src={profilePic} alt="foto perfil redondeado" />
      </div>
    </div>
  );
}

export { Header };
