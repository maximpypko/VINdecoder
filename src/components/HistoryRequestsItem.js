import { useContext } from "react";
import Context from "../Context";

function HistoryRequestsItem({ text }) {
  const { hendlerForm } = useContext(Context);

  return (
    <li
      className="history_item"
      onClick={(e) => {
        hendlerForm(e.target.textContent);
      }}
    >
      {text}
    </li>
  );
}

export default HistoryRequestsItem;
