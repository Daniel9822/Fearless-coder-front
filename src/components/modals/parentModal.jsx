export default function ParentModal({ children, close }) {
  return <div onClick={close} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#0009' }}>
    {children}
  </div>
}