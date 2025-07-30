import "../style.css";

function ProjectSection(props: { projects: ProjectEntry[] }) {
  return (
    <>
      <h2 className="section-title">Kodeprosjekter</h2>
      <div className="card-container">
        {props.projects.map((project) => {
          return <ProjectCard data={project} />;
        })}
      </div>
    </>
  );
}

function ProjectCard(props: { data: ProjectEntry }) {
  const data = props.data;
  return (
    <div className="card technology-card card-column">
      <h2>{data.title}</h2>
      <p>{data.timePeriod}</p>
      <p>{data.description}</p>
      <div className="card-row flex-wrap">
        {data.technologies.map((tech) => {
          return <ResumeTechnology tech={tech} />;
        })}
      </div>
    </div>
  );
}

function ResumeTechnology(props: { tech: ResumeTechnology }) {
  return (
    <a className="logo clickable-enlarge" href={props.tech.technologyLink}>
      <img
        className="logo-image"
        src={props.tech.iconSource}
        alt={"Logo for " + props.tech.name}
      ></img>
      <p className="logo-title">
        <b>{props.tech.name}</b>
      </p>
    </a>
  );
}

export interface ProjectEntry {
  title: string;
  timePeriod: string;
  description: string;
  technologies: ResumeTechnology[];
}

export interface ResumeTechnology {
  name: string;
  iconSource: string;
  technologyLink: string;
}

export default ProjectSection;
