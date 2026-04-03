import { useAtomValue } from 'jotai'
import './styles/font.css'
import { pointsAtom } from './stores/storeText'



const Header = () => {
  const point = useAtomValue(pointsAtom)

  return (
    <div className="w-full h-12 pb-5 mt-6 lg:h-20 lg:pb-0 lg:mt-0 flex justify-between items-center text-2xl lg:text-3xl xl:text-4xl font-bold segoePrint"
    style={{color: '#9395C5'}}>
        <span>
            Печаталка</span>
        <span>Лучший результат: {point}</span>
    </div>
  )}

export default Header