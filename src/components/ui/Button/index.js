import Styled from "./index.module.css";
function Button({
  name = "Выйти",
  bgColor = "transparent",
  color = "#D58C51",
  border = "1px solid #D58C51",
  onClick = () => {},
}) {
  const button = {
    backgroundColor: bgColor,
    color: color,
    border: border,
  };
  return (
    <button style={button} onClick={onClick} className={Styled["button"]}>
      {name}
    </button>
  );
}

export default Button;
