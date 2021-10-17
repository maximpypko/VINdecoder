import { useContext } from "react";
import Context from "../Context";

function ResponseMessage() {
  const { responseMessage } = useContext(Context);

  return (
    <div className="container_message">
      <p className="message_text">{responseMessage}</p>
    </div>
  );
}

export default ResponseMessage;
