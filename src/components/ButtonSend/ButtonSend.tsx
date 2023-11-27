import React from "react";
import "../ButtonSend/ButtonSend.css"


interface SendProps {
  disabled: boolean
}


const Send: React.FC <SendProps> = ({disabled}) => {
  return(
    <button className="send" disabled={disabled}>
      SEND
      </button>
  )
}

export default Send