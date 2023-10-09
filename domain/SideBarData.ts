interface SideBarData {
  age: string;
  residence: string;
  address: string;
  state: string;
  extraSkills: string[][];
  languages: PercentKeyValue[];
  programmingLanguages: PercentKeyValue[];
}

interface PercentKeyValue {
  percentage: number;
  title: string;
}
