import './styles/font.css'



const Header = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center">
        <span 
        className="text-4xl font-bold segoePrint"
        style={{color: '#9395C5'}}>
            Печаталка</span>
        <span 
        className="text-4xl font-bold segoePrint"
        style={{color: '#9395C5'}}
        >Лучший результат:</span>
    </div>
  )}

export default Header