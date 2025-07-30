import ProjectSection, { type ProjectEntry } from "./components/ProjectSection";
import ResumeSection from "./components/ResumeSection";
import {
  getCourses,
  getEducation,
  getJobs,
  getVolunteerings,
} from "./lib/data";

function ResumePage() {
  return (
    <>
      <ProjectSection projects={getMockProjects()} />
      <ResumeSection
        resumeData={getEducation()}
        sectionTitle={"Min utdanning"}
      />
      <ResumeSection
        resumeData={getJobs()}
        sectionTitle={"Hva jeg har jobbet med"}
      />
      <ResumeSection
        resumeData={getVolunteerings()}
        sectionTitle={"Frivillige verv jeg har deltatt i"}
      />
      <ResumeSection
        resumeData={getCourses()}
        sectionTitle={"Også har jeg et par kurs da"}
      />
    </>
  );
}

function getMockProjects() {
  const projectEntries: ProjectEntry[] = [
    {
      title: "nRFHabitTracker, Nordic Semiconductor",
      timePeriod: "Vår 2024",
      description:
        "Min bachelorgruppe tok et oppdrag fra Nordic Semiconductor, der vi fikk tildelt en tolv-sidet terning med sensorer som skulle brukes til å måle hva eieren gjorde i løpet av en dag. Hver terningside representerte en aktivitet, der aktiviteten målt var avhengig av hvilken terningside som var opp. Produktet støttet aktiviteter som ble målt ved telling eller tidtaking. Under dette prosjektet jobbet jeg med et teammedlem med å bygge en back-end ved bruk av AWS og TypeScript. Under prosjektet tilegnet jeg meg tekniske ferdigheter om skyplatformer og back-end utvikling. Jeg fikk også erfaring med å jobbe med et velsmurt team",
      technologies: [
        {
          name: "TypeScript",
          iconSource: "./typescript.png",
          technologyLink:
            "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",
        },
        {
          name: "AWS Lambda",
          iconSource: "./lambda.png",
          technologyLink:
            "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
        {
          name: "Amazon DynamoDB",
          iconSource: "./dynamodb.png",
          technologyLink:
            "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html",
        },
        {
          name: "AWS IoT Core",
          iconSource: "./iot-core.png",
          technologyLink:
            "https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html",
        },
        {
          name: "API Gateway",
          iconSource: "apigateway.png",
          technologyLink:
            "https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html",
        },
        {
          name: "AWS CDK",
          iconSource: "cdk.png",
          technologyLink: "https://docs.aws.amazon.com/cdk/v2/guide/home.html",
        },
        {
          name: "Jest",
          iconSource: "jest.png",
          technologyLink: "https://jestjs.io/",
        },
        {
          name: "MQTT",
          iconSource: "mqtt.png",
          technologyLink: "https://mqtt.org/",
        },
      ],
    },
    {
      title: "DrinksDB",
      timePeriod: "Høsten 2023",
      description:
        "I emnet IT2810 - Webutvikling lagde min gruppe en nettside som lar deg finne din nye favorittdrink. Nettsiden støtter søk, filtrering, sortering og dynamisk innlasting av en stor mengde drinker. Om du prøver ut en drink du digger kan du legge igjen en anmeldelse, og rangere drinken mellom en og fem martiniglass",
      technologies: [
        {
          name: "React",
          iconSource: "./react.png",
          technologyLink: "https://react.dev/",
        },
        {
          name: "TypeScript",
          iconSource: "./typescript.png",
          technologyLink:
            "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",
        },
        {
          name: "Vite",
          iconSource: "./vite.svg",
          technologyLink: "https://vite.dev/guide/",
        },
        {
          name: "Tailwind",
          iconSource: "tailwind.png",
          technologyLink: "https://tailwindcss.com/",
        },
        {
          name: "GraphQL",
          iconSource: "graphql.png",
          technologyLink: "https://graphql.org/learn/",
        },
        {
          name: "Prisma",
          iconSource: "./prisma.png",
          technologyLink: "https://www.prisma.io/docs",
        },
        {
          name: "Cypress",
          iconSource: "./cypress.png",
          technologyLink: "https://www.cypress.io/",
        },
      ],
    },
  ];
  return projectEntries;
}

export default ResumePage;
