interface ProfileData {
  description: string;
  email: string;
  subject: string;
  knowledge: KnowledgeData;
  education: EducationData;
  portfolio: PortfolioData;
}

interface PortfolioData {
  description: string;
  sections: PortfolioSection[];
}

interface PortfolioSection {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface KnowledgeData {
  description: string;
  sections: KnowledgeSection[];
}

interface KnowledgeSection {
  title: string;
  description: string;
  faIconName: string;
}

interface EducationData {
  description: string;
  sections: EducationSection[];
}

interface EducationSection {
  institution: string;
  title: string;
  description: string;
  initDate: string;
  endDate: string;
}
