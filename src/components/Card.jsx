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
    children: PropTypes.array,
  };

  const style = {
    width: props.width ? { width: props } : {},
    backgroundColor: props.backgroundColor,
    color: props.textColor,
  };
  // w"18rem"
  return (
    <div className="card" style={style}>
      <div className="card-body">
        <h5 className={`card-title ${props.textAlign} ${props.textSize} `}>
          {props.title}
        </h5>
        <p className={`card-text ${props.textAlign}`}>{props.description}</p>
        {props.img && (
          <img className="card-img-top" src={props.img} alt="Card image cap" />
        )}
        <div className="row">{props.children}</div>
        <div className="row mt-2">
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
