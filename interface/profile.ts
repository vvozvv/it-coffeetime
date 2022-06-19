export interface IProfileInfo {
  company?: string;
  city: string;
  tags: string[];
}

export interface IProfile {
  id: number;
  name: string;
  about: string;
  age: number;
  profession: string;
  info: IProfileInfo;
}
