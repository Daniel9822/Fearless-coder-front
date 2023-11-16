import { createPortal } from 'react-dom'

export default function ParentModal({ children, close }) {
  return createPortal(
    <div
      onClick={close}
      style={{
        cursor: 'default',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#0009'
      }}
    >
      {children}
    </div>,
    window.document.body
  )
}
