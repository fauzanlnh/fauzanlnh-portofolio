import PropTypes from "prop-types";
import Button from "./AnchorButton";
export default function Card(props) {
  Card.propTypes = {
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    textAlign: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    width: PropTypes.string,
    img: PropTypes.string,
    target: PropTypes.string,
    btnColor: PropTypes.string,
    textSize: PropTypes.string,
    children: PropTypes.array,
  };

  const style = {
    width: props.width ? { width: props } : {},
    backgroundColor: props.backgroundColor,
    color: props.textColor,
  };

  const titleStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 1, // Number of lines to show before ellipsis
  };

  const descriptionStyle = {
    // maxHeight: "3.5em", // Set a fixed height for three lines
    // overflow: "hidden",
    // textOverflow: "ellipsis",
    // lineHeight: "1.2em", // Control the line height
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3, // Number of lines to show before ellipsis
  };

  // w"18rem"
  return (
    <div className="card" style={style}>
      <div className="card-body">
        <h5 className={`card-title ${props.textAlign} ${props.textSize} `} style={titleStyle}>
          {props.title}
        </h5>
        <p className={`card-text text-start `} style={descriptionStyle}>
          {props.description}
        </p>
        {props.img && (
          <img className="card-img-top" src={props.img} alt={props.title} />
        )}
        <div className="row">{props.children}</div>
        <div className="row mt-3">
          {props.link && (
            <Button
              link={props.link}
              textButton="View on Github"
              icon="bi bi-github"
              target={props.target}
              btnColor={props.btnColor}
            />
          )}
        </div>
      </div>
    </div>
  );
}
