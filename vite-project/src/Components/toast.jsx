// Toast.jsx
import './Toast.css'

export default function Toast({ message }) {
  if (!message) return null   // render nothing if no message

  return (
    <div className="toast">{message}</div>
  )
}
