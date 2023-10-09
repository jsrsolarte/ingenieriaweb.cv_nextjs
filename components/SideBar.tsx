import Image from "next/image";
import { useTranslation } from "next-i18next";
import profilePic from "@/public/img/perfil_sqr.jpg";
import { KeyValue } from "./Sidebar/KeyValue";
import { ExtraValues } from "./Sidebar/ExtraValues";
import { SidebarPercentageSection } from "./Sidebar/SideBarPercentageSection";

type Props = {
  data: CvData;
};

const SideBar = (props: Props) => {
  const { t } = useTranslation("common");
  return (
    <aside className="p-5 flex-none flex-col card h-full">
      <div className="p-5 flex flex-col border-b-2">
        <Image
          src={props.data.squarePic}
          alt="foto perfil redondeado"
          className="rounded-full"
          width={200}
          height={200}
        />
        <span className="text-center text-l font-bold">{props.data.name}</span>
        <span className="text-center text-m text-gray-500">
          {props.data.jobTitle}
        </span>
      </div>
      <div className="sidebar-section">
        <KeyValue
          keyText={t("sidebar.age")}
          valueText={props.data.sidebar.age}
        />
        <KeyValue
          keyText={t("sidebar.residence")}
          valueText={props.data.sidebar.residence}
        />
        <KeyValue
          keyText={t("sidebar.address")}
          valueText={props.data.sidebar.address}
        />
        <KeyValue
          keyText={t("sidebar.state")}
          valueText={props.data.sidebar.state}
        />
      </div>
      <SidebarPercentageSection
        title={t("sidebar.languages")}
        data={props.data.sidebar.languages}
      />
      <SidebarPercentageSection
        title={t("sidebar.programmingLanguages")}
        data={props.data.sidebar.programmingLanguages}
      />
      <div className="sidebar-section">
        <span className="font-bold">{t("sidebar.extraSkills")}</span>
        {props.data.sidebar.extraSkills.map((item, index) => (
          <ExtraValues key={index} values={item} />
        ))}
      </div>
    </aside>
  );
};

export { SideBar };
