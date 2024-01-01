import Card from "../components/Card";
import ProjectData from "../data/ProjectData";
import ProjectFreelanceData from "../data/ProjectFreelanceData";
export default function project() {
  return (
    <div>
      <div className="row">
        <p className="fs-1 fw-bold">Freelance Projects</p>
        <p className="fs-5 text-start mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam
          ducimus, in, et quod ut unde saepe reprehenderit perspiciatis dolor
          officia quis recusandae corporis aut, earum incidunt. Tenetur, quas
          vel?
        </p>
      </div>
      <div className="mt-2 row row-cols-1 row-cols-md-2 g-4">
        {ProjectFreelanceData.map((project, index) => (
          <div key={index} className="col-12 col-md-4 ">
            <Card
              title={project.title}
              description={project.description}
              backgroundColor="#4a5567"
              textColor="white"
              textAlign="text-center"
              textSize="h6"
              img={project.image}
              target="_blank"
              btnColor="btn-dark btn-outline-light"
            />
          </div>
        ))}
      </div>
      <hr className="mt-4" />
      <div className="row mt-2">
        <p className="fs-1 fw-bold">Open Source Projects</p>
        <p className="fs-5 text-start mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam
          ducimus, in, et quod ut unde saepe reprehenderit perspiciatis dolor
          officia quis recusandae corporis aut, earum incidunt. Tenetur, quas
          vel?
        </p>
      </div>
      <div className="mt-2 row row-cols-1 row-cols-md-2 g-4">
        {ProjectData.map((project, index) => (
          <div key={index} className="col-12 col-md-4 ">
            <Card
              title={project.title}
              description={project.description}
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
    </div>
  );
}
