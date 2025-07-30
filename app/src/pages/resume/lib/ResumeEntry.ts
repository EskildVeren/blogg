export interface ResumeEntry {
  title: string;
  workplace: string;
  startTime: string;
  endTime: string;
  description: string;
  jobInfoUrl: string;
}
export interface ResumeEntryReapeating {
  title: string;
  workplace: string;
  timePeriods: string[];
  description: string;
  jobInfoUrl: string;
}
