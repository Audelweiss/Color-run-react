import { Link } from 'react-router-dom'

export default function Button({ to, children, className = '', ...props }) {
  return (
    <Link to={to} className={`btn ${className}`} {...props}>
      {children}
    </Link>
  )
}
