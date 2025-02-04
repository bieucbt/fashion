import { toast } from "react-toastify"

let toadId


const showToast = (type, message) => {

    if (toadId && toast.isActive(toadId)) {
        toast.update(toadId, { render: message, type, isLoading: false, autoClose: 2000 })
    } else {
        toadId = toast[type](message)
    }
}

const dissmisToast = () => {
    toast.dismiss(toastId)
    setToastId(null)
}

export {
    dissmisToast,
    showToast
}
