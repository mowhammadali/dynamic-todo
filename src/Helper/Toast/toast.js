import { toast } from "react-toastify";

const notify = (message , type , autoClose , closeOnClick) => 
    toast(message , {
        position: 'top-right',
        autoClose: autoClose,
        hideProgressBar: true,
        closeOnClick: closeOnClick,
        pauseOnHover: false,
        draggable: false,
        theme: 'light',
        type: type,
    })


export default notify;