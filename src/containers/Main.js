import { useContext } from "react";
import Context from "../Context";
import ButtonDetail from "../components/ButtonDetail";
import HistoryRequests from "../components/HistoryRequests";
import ResponseData from "../components/ResponseData";
import ResponseMessage from "../components/ResponseMessage";
import Form from "../components/Form";

function Main() {
  const { responseValue, responseMessage } = useContext(Context);

  return (
    <div className="container">
      <Form />
      <ButtonDetail />
      {responseMessage && (
        <div className="container_info">
          <HistoryRequests />
          <ResponseMessage />
        </div>
      )}
      {responseValue.length > 0 && <ResponseData />}
    </div>
  );
}

export default Main;
