import Styled from "./index.module.css";

function Button({
  name = "Выйти",
  bgColor = "transparent",
  color = "#D58C51",
  border = "1px solid #D58C51",
  position = "static",
  left = "0px",
  onClick = ()=> {},
}) {
  const button = {
    backgroundColor: bgColor,
    color: color,
    border: border,
    position: position,
    left: left,
   
  };
  return (
    <button style={button} onClick={onClick} className={Styled["button"]}>
      {name}
    </button>
  );
}

export default Button;
