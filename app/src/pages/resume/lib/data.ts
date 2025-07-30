import type { ResumeEntry, ResumeEntryReapeating } from "./ResumeEntry";

export function getEducation() {
  const data: ResumeEntry[] = [
    {
      title: "Bachelor i Informatikk",
      workplace: "NTNU Trondheim",
      startTime: "August 2021",
      endTime: "Juni 2024",
      description:
        "Min grad der jeg hadde emner innen varierende emner, inkludert webutvikling, ki, databaser og sikkerhet",
      jobInfoUrl: "https://www.ntnu.no/studier/bit",
    },
    {
      title: "Videregående",
      workplace: "Oslo Katedralskole",
      startTime: "August 2018",
      endTime: "Juni 2021",
      description:
        "Jeg fullførte videregående med fag innen matte, fysikk og informasjonsteknologi",
      jobInfoUrl: "https://oslo-katedral.vgs.no/",
    },
  ];
  return data;
}

export function getJobs() {
  const data: (ResumeEntry | ResumeEntryReapeating)[] = [
    {
      title: "Læringsassistent",
      workplace: "NTNU Trondheim",
      startTime: "August 2022",
      endTime: "Desember 2023",
      description:
        "Bisto med å rette øvinger og hjelpe studenter i emnet MA0001 Matematikk Grunnkurs (sjekk emnekode)",
      jobInfoUrl: "",
    },
    {
      title: "Assistent",
      workplace: "Sommerskolen Oslo",
      startTime: "Juni 2021",
      endTime: "Juni 2022",
      description:
        "Ledet flere klasser gjennom en gøyal uke med matte, koding og fysisk aktivitet",
      jobInfoUrl: "",
    },
    {
      title: "Kodeinstruktør",
      workplace: "Osloskolen",
      startTime: "Januar 2017",
      endTime: "April 2018",
      description:
        "Ledet kurs for ulike klasser på ASK, der elevene lærte Scratch",
      jobInfoUrl: "",
    },
  ];
  return data;
}

export function getVolunteerings() {
  const data: ResumeEntry[] = [
    {
      title: "Nestleder",
      workplace: "Profil- og aviskomiteen, Linjeforeningen Online",
      startTime: "August 2022",
      endTime: "Juni 2024",
      description:
        "I to år under bacheloren var jeg medlem i komiteen. Her skrev jeg flere artikler, og tok på meg noen administrative roller",
      jobInfoUrl: "",
    },
    {
      title: "Frivillig i Infobod",
      workplace: "Øyafestivalen",
      startTime: "August 2022",
      endTime: "August 2022",
      description:
        "Under øyafestivalen satt jeg i inforboden, der jeg gav informasjon til festivaldeltakerne angående hvaenn de lurte på",
      jobInfoUrl: "",
    },
    {
      title: "Speider",
      workplace: "Norges Speiderforbund",
      startTime: "September 2013",
      endTime: "Juli 2023",
      description:
        "Jeg har vært speider i lang tid, og har deltatt som vanlig speider, patruljeører, leder og stab på roverleir",
      jobInfoUrl: "",
    },
  ];
  return data;
}

export function getCourses() {
  const data: ResumeEntry[] = [
    {
      title: "LAOS",
      workplace: "NTNU Trondheim",
      startTime: "August 2023",
      endTime: "Desember 2023",
      description:
        "Dette er et kurs jeg tok under første perioden jeg var læringsassistent. Dette pedagogiske kurset hjalp i jobben ved å vise til hva man bør og ikke bør gjøre som læringsassistent, fra perspektivet til en som trenger hjelp",
      jobInfoUrl: "",
    },
    {
      title: "Minilederkurs",
      workplace: "Hauketo-Prinsdal Kirke",
      startTime: "August 2017",
      endTime: "Juli 2018",
      description:
        "I ett år var jeg med i kirka, der jeg hjalp til med å lede konfirmeringsprogrammet for kullet som kom etter meg. Jeg satt også i konfirmantstyret dette året",
      jobInfoUrl: "",
    },
  ];
  return data;
}
