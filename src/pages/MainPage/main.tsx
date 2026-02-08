import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
    </div>
  )
}

export default MainPage
