import imgProgrammer from "../assets/img/programmer.png";
import AnchorCard from "../components/AnchorCard";

export default function About() {
  return (
    <div>
      <div className="row">
        <div className="col-7 mt-5">
          <p className="fs-1 fw-bold">Hi, I`m Fauzan Lukmanul Hakim.</p>
          <p className="fs-4 text-start mt-4">
            I am a software engineer specialized in backend development,
          </p>
          <p className="fs-4 text-start mt-2">
            Currently Based on Bandung, Indonesia. I have a Bachelor`s degree in
            Informatics Engineering at the Universitas Komputer Indonesia
            (UNIKOM) in July 2023. Currently, I am seeking for a job.
          </p>
          <p className="fs-4 text-start mt-4">
            Started programming on backend development creating an medical for
            clinics record and e-commerce for t-shirt screen printing shop using
            Laravel. While looking for work, I learned about frontend
            development, specifically React.
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
      <hr />
      <div className="row">
        <p className="fs-1 fw-bold">Contact Me!</p>
      </div>

      {/* <div className="row">
        <div className="col-12">
          <AnchorCard
            link="https://github.com/fauzanlnh"
            textButton="Github"
            icon="bi bi-github"
          />
        </div>
      </div> */}

      <div className="row mt-2">
        <div className="col-6 col-md-3">
          <AnchorCard
            link="https://github.com/fauzanlnh"
            textButton="Github"
            icon="bi bi-github"
            target="_blank"
          />
        </div>
        <div className="col-6 col-md-3">
          <AnchorCard
            link="https://www.linkedin.com/in/fauzanlnh/"
            textButton="Linked In"
            icon="bi bi-linkedin"
            target="_blank"
          />
        </div>
        <div className="col-6 col-md-3">
          <AnchorCard
            link="mailto:fauzanlnh@gmail.com"
            textButton="Email"
            icon="bi bi-envelope-fill"
            target="_blank"
          />
        </div>
        <div className="col-6 col-md-3">
          <AnchorCard
            link="https://drive.google.com/file/d/1xOWDAuLL6ac85ZSe8_JmkrDsYOGpePCy/view"
            textButton="CV"
            icon="bi bi-file-earmark-fill"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}
