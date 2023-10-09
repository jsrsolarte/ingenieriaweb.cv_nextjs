import React from "react";
import { Header } from "./Profile/Header";
import { KnowledgeSection } from "./Profile/KnowledgeSection";
import { useTranslation } from "next-i18next";
import { ProfileSection } from "./Profile/ProfileSection";
import { EducationSection } from "./Profile/EducationSection";
import { PortfolioSection } from "./Profile/PortfolioSection";

interface Props {
  name: string;
  jobTitle: string;
  profile: ProfileData;
}

function Profile({ name, jobTitle, profile }: Props) {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col space-y-10 justify-center">
      <Header
        name={name}
        jobTitle={jobTitle}
        description={profile.description}
        email={profile.email}
        subject={profile.subject}
      />
      <ProfileSection
        title={t("profile.knowledge")}
        description={profile.knowledge.description}
      />
      <div className="grid grid-flow-row grid-cols-3 gap-10">
        {profile.knowledge.sections.map((knowledgeItem, index) => (
          <KnowledgeSection
            key={index}
            iconName={knowledgeItem.faIconName}
            title={knowledgeItem.title}
            description={knowledgeItem.description}
          />
        ))}
      </div>
      <ProfileSection
        title={t("profile.education")}
        description={profile.education.description}
      />
      <div className="card">
        {profile.education.sections.map((educationItem, index) => (
          <EducationSection key={index} data={educationItem} />
        ))}
      </div>
      <ProfileSection
        title={t("profile.portfolio")}
        description={profile.portfolio.description}
      />
      <div className="grid grid-flow-row grid-cols-3 gap-10">
        {profile.portfolio.sections.map((portfolioItem, index) => (
          <PortfolioSection key={index} data={portfolioItem} />
        ))}
      </div>
    </div>
  );
}

export { Profile };
