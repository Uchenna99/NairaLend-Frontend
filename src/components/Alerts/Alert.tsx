import "../../index.css"
import { AlertObj } from "./AlertTypes";


interface Props {
    alertObj: AlertObj;
}

const CustomAlert = ({alertObj}: Props) => {
  return (
    <div className="alert-container" 
        style={{border:`2px solid ${alertObj.color}`, backgroundColor:`${alertObj.background}`}}>
        <div className="alert-symbol">{alertObj.symbol}</div>

        <div className="alert-message-wrapper">
            <div className="alert-title">{alertObj.title}</div>

            <div className="alert-text">{alertObj.text}</div>
        </div>
    </div>
  )
}

export default CustomAlert;