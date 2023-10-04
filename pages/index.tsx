import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { SideBar } from "@/components/SideBar";

type Props = {
  // Add custom props here
}

const Home = () => {
  return (
    <div className="h-screen flex">
      <SideBar />
      <main></main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'es', [
      'common',
      'footer',
    ])),
  },
})

export default Home;

