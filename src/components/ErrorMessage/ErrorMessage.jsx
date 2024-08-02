import './ErrorMessage.scss';
import errorIcon from "../../assets/Icons/error-24px.svg"

function ErrorMsg() {
return (
<div className="errmsg"> 
<img className="errmsg__icon"src={errorIcon} alt={"erricon"}/>
<div className="errormsg__text"> This field is required</div>
</div>
)};
export default ErrorMsg;