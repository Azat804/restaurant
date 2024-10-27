import Styled from "./index.module.css";
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
function Modal({ children }) {
  const navigate = useNavigate();
  return (
    <div className={Styled["modal"]}>
      <div className={Styled["modal__wrapper"]}>
        <div className={Styled["modal-content"]}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
