import PropTypes from "prop-types";
import "./AnchorCard.css";
export default function AnchorCard(props) {
  AnchorCard.propTypes = {
    textButton: PropTypes.string,
    link: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
  };
  return (
    <>
      <a
        href={props.link}
        target={props.target}
        style={{ textDecoration: "none" }}
      >
        <div
          className="card mb-2 border-light bg-dark text-white"
          style={{ "max-width": "540p" }}
        >
          <div className="row g-0">
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <span
                className={props.icon}
                style={{ fontSize: "1.8rem" }}
              ></span>
            </div>
            <div className="col-md-8 d-flex align-items-center mt-2">
              <div className="card-body ">
                <h5 className="card-title ">{props.textButton}</h5>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <span
                className="bi bi-arrow-up-right"
                style={{ fontSize: "1.8rem" }}
              ></span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
