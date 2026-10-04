import type { IProject } from "./projects";

export interface IWorkExperience {
  id: string;
  name: string;
  label?: string;
  description: Record<string, string>;
  position: string;
  location: string;
  startDate: Date;
  endDate: Date;
  projects: IProject[];
}

export interface responseWorkExperience {
  success: boolean;
  data: IWorkExperience[];
}
