import PropTypes from "prop-types";

export default function AnchorButton(props) {
  AnchorButton.propTypes = {
    textButton: PropTypes.string,
    link: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    btnColor: PropTypes.string,
  };
  return (
    <a
      href={props.link}
      className={`btn ${props.btnColor} btn-lg`}
      target={props.target}
    >
      {props.icon && <i className={props.icon}></i>}
      {` ` + props.textButton}
    </a>
  );
}
