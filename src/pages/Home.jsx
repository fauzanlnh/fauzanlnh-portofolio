import Card from "../components/Card";
import imgProgrammer from "../assets/img/programmer.png";
import ProjectData from "../data/ProjectData";
export default function Home() {
  const latestProjects = ProjectData.slice(-2);
  return (
    <div>
      <div className="row">
        <div className="col-7 mt-5">
          <p className="fs-1 fw-bold">Fauzan Lukmanul Hakim.</p>
          <p className="fs-3 text-start mt-2">
            Software engineer specialized in backend development
          </p>
          <p className="fs-5 text-start mt-4">
            I have a passion in the field of backend development, but recently,
            i have an interest in frontend development, especially react.
            Currently, I am seeking for job opportunities
          </p>
        </div>
        {/* mt-md-3 meant div has margin-top 3 when screen is md or bigger */}
        <div className="col-5 d-sm-block d-sm-block d-lg-block d-xl-block d-none d-flex align-self-center mt-md-3 text-center">
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
          <div className="row">
            {latestProjects.map((project, index) => (
              <div key={index} className="col-12 col-md-6 mt-1 mt-md-0">
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
          </div>
        </Card>
      </div>
    </div>
  );
}
