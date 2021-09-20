import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //custom components do not support className, so we tweek it with this constant
  return <div className={classes}>{props.children}</div>;
};

export default Card;
