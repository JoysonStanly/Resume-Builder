import React from 'react'
import toast from 'react-hot-toast'
import CustomToast from '../components/CustomToast.jsx'

const TOAST_DURATION = 3000

export const successToast = (message) => {
  toast.custom(
    (t) => React.createElement(CustomToast, { toast: { ...t, message, type: 'success', duration: TOAST_DURATION } }),
    { duration: TOAST_DURATION }
  )
}

export const errorToast = (message) => {
  toast.custom(
    (t) => React.createElement(CustomToast, { toast: { ...t, message, type: 'error', duration: TOAST_DURATION } }),
    { duration: TOAST_DURATION }
  )
}

export const defaultToast = (message) => {
  toast.custom(
    (t) => React.createElement(CustomToast, { toast: { ...t, message, type: 'default', duration: TOAST_DURATION } }),
    { duration: TOAST_DURATION }
  )
}

// Namespace export for compatibility
const customToastAPI = {
  success: successToast,
  error: errorToast,
  default: defaultToast,
  custom: toast.custom,
  dismiss: toast.dismiss,
  loading: (message) => toast.loading(message, { duration: TOAST_DURATION }),
  promise: toast.promise,
}

export default customToastAPI
