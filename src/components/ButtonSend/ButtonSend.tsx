import React from "react";
import "../ButtonSend/ButtonSend.css"


export type SendProps ={
  disabled?: boolean
  handleClick?: () => void
}

const Send: React.FC<SendProps> = ({ disabled , handleClick }) => {
  return (
    <button className="send" disabled={disabled} onClick={handleClick}>
      SEND
    </button>
  )
}

export default Send