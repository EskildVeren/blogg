import type { ResumeEntry, ResumeEntryReapeating } from "../lib/ResumeEntry";
import "../style.css";

function ResumeSection(props: {
  resumeData: (ResumeEntry | ResumeEntryReapeating)[];
  sectionTitle: string;
}) {
  return (
    <>
      <h2 className="section-title">{props.sectionTitle}</h2>
      <div className="card-container">
        {props.resumeData.map((data) => {
          return <ResumeEntry data={data} />;
        })}
      </div>
    </>
  );
}

function ResumeEntry(props: { data: ResumeEntry | ResumeEntryReapeating }) {
  const data = props.data as ResumeEntry;
  return (
    <a className="card card-column clickable-enlarge" href={data.jobInfoUrl}>
      <h3>
        {data.title},<br />
        {data.workplace}
      </h3>
      <p>
        Fra {data.startTime}
        <br /> til {data.endTime}
      </p>
      <p className="card-description">{data.description}</p>
    </a>
  );
}

export default ResumeSection;
