import { useContext } from "react";
import Context from "../Context";

function Form() {
  const { formRef, hendlerForm, validateMessage } = useContext(Context);

  return (
    <form className="form" ref={formRef}>
      <div className="form_input-wrapper">
        <input
          className="form_input"
          type="text"
          placeholder="Введите VIN для поиска"
        ></input>
        <p className="form_validate-message">{validateMessage}</p>
      </div>
      <button
        className="form_button"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          hendlerForm(e);
        }}
      >
        Поиск
      </button>
    </form>
  );
}

export default Form;
