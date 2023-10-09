import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { SideBar } from "@/components/SideBar";
import esData from "@/public/locales/es/data.json";
import enData from "@/public/locales/en/data.json";
import { useTranslation } from "next-i18next";
import { Profile } from "@/components/Profile";
import Footer from "@/components/Footer";
import SocialNetworks from "@/components/SocialNetworks";

type Props = {
  language: string;
};

const Home = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const data: CvData = currentLanguage === "es" ? esData : enData;

  return (
    <div className="grid grid-cols-12 bg-gray-100 gap-10">
      <div className="col-span-2">
        <SideBar data={data} />
      </div>
      <div className="col-span-9">
        <Profile
          name={data.name}
          jobTitle={data.jobTitle}
          profile={data.profile}
        />
        <Footer />
      </div>
      <div className="col-span-1">
        <SocialNetworks data={data.networks} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
    language: locale ?? "es",
  },
});

export default Home;
