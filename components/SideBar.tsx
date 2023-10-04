import Image from "next/image";
import { useTranslation } from "next-i18next";
import profilePic from "@/public/img/perfil_sqr.jpg";

const SideBar = () => {
  const { t } = useTranslation("common");
  return (
    <aside className="debug w-56 p-5 flex flex-col">
      <div className="p-5 flex flex-col border-b-2">
        <Image
          src={profilePic}
          alt="foto perfil redondeado"
          className="debug rounded-full"
          width={200}
          height={200}
        />
        <span className="text-center text-l font-bold">
          Juan Sebastián Ramírez Solarte
        </span>
        <span className="text-center text-m text-gray-500">
          {t("sidebar.position")}
        </span>
      </div>
    </aside>
  );
};

export { SideBar };
