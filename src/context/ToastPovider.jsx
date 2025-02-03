import React, { createContext, useCallback, useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export const ToastContext = createContext()

const ToastPovider = ({ children }) => {
    const toastIdRef = useRef(null)

    const showToast = (type, message) => {

        if (toastIdRef.current && toast.isActive(toastIdRef.current)) {
            toast.update(toastIdRef.current, { render: message, type })
        } else {
            const Id = toast[type](message)
            toastIdRef.current = Id
        }
    }

    const dissmisToast = () => {
        toast.dismiss(toastId)
        setToastId(null)
    }

    return (
        <ToastContext.Provider value={{ showToast, dissmisToast }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    )
}

export default ToastPovider