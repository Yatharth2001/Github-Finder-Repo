import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  //   return alert!= null && (
  //     <p className="flex-items-start mb-4 space-x-2">

  //     </p>
  //   )
  //   return (
  //     alert !== null && (
  //       <div className={`alert alert-${alert.type}`}>
  //         <i className="fas fa-info-circle" /> {alert.msg}
  //       </div>
  //     )
  //   );
}

export default Alert;
