import './styles/font.css'
import { Link } from "@tanstack/react-router";

const YourText = () => {
  return (
    <div>
        <Link to='/'
        className='no-underline text-4xl font-bold segoePrint'
        style={{color: '#9395C5'}}>
          Главн
        </Link>
    </div>
  )
}

export default YourText