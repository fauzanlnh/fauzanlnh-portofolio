import Card from "../components/Card";
import imgProgrammer from "../assets/img/programmer.png";
import ProjectData from "../data/ProjectData";
export default function Home() {
  const latestProjects = ProjectData.slice(-2);
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-7 text-center text-md-start">
          <p className="fs-2 fs-md-1 fw-bold">Fauzan Lukmanul Hakim.</p>
          <p className="fs-3 mt-2">
            Web Developer specialized in backend development
          </p>
          <p className="fs-5 mt-4">
            I have a passion in the field of backend development, but recently,
            i have an interest in frontend development, especially react.
            Currently, I am seeking for job opportunities
          </p>
        </div>
        {/* mt-md-3 meant div has margin-top 3 when screen is md or bigger */}
        <div className="d-flex d-none d-md-block align-self-center col-md-5 text-center mt-md-3">
          <img
            className="card-img-top"
            src={imgProgrammer}
            style={{ width: "250px" }}
            alt="Card image cap"
          />
        </div>
      </div>
      <div className="row">
        <Card
          title="Recent Projects"
          description="Here are some my past works from personal projects and open source ones"
          backgroundColor="#2e3748"
          textColor="white"
        >
          {latestProjects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 mt-3 mt-md-0">
              <Card
                title={project.title}
                description={project.descriptionEng}
                link={project.link}
                backgroundColor="#4a5567"
                textColor="white"
                img={project.image}
                textAlign="text-center"
                target="_blank"
                btnColor="btn-dark btn-outline-light"
              />
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
