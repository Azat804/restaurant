import Styled from "./index.module.css";
function Modal({ children }) {
  return (
    <div className={Styled["modal"]}>
      <div className={Styled["modal__wrapper"]}>
        <div className={Styled["modal-content"]}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
