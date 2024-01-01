import PropTypes from "prop-types";
export default function LayoutNavbar(props) {
  LayoutNavbar.propTypes = {
    pages: PropTypes.string,
  };

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className={`nav-item nav-link ${
                  props.pages === "index" ? "active" : ""
                }`}
                href="/"
              >
                Home
              </a>
              <a
                className={`nav-item nav-link ${
                  props.pages === "about" ? "active" : ""
                }`}
                href="/about"
              >
                About
              </a>
              <a
                className={`nav-item nav-link ${
                  props.pages === "projects" ? "active" : ""
                }`}
                href="/projects"
              >
                Projects
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
