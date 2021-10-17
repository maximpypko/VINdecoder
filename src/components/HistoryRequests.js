import { useContext } from "react";
import Context from "../Context";
import HistoryRequestsItem from "./HistoryRequestsItem";

function HistoryRequests() {
  const { historyRequests } = useContext(Context);

  return (
    <>
      {historyRequests.length > 0 && (
        <div className="container_history history">
          <h2 className="history_title">История поиска</h2>
          <ol className="history_list">
            {historyRequests.map((element) => (
              <HistoryRequestsItem key={element.id} text={element.text} />
            ))}
          </ol>
        </div>
      )}
    </>
  );
}

export default HistoryRequests;
