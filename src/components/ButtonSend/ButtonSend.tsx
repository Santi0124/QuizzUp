import React from "react";
import "../ButtonSend/buttonSend.css"


export type SendProps = {
  disabled?: boolean
  handleClick?: () => void
}

const Send: React.FC<SendProps> = ({ disabled, handleClick  }) => {
  const ButtonSendDisabled = !disabled 
  const composeClassName = () => {
    let result = !disabled ? 'send' : 'sendDisabled'
    if(ButtonSendDisabled) return 'send'
    return result
  }

  return (
    <button 
    className={composeClassName()}
    disabled={disabled}
    onClick={handleClick}>
      SEND
    </button>
  )
}

export default Send