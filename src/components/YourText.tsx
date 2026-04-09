import './styles/font.css'
import { Link } from "@tanstack/react-router";
import CurrentText from './CurrentText';
import { useYourText } from './Hooks/useYourText';

const YourText = () => {
  const {
        text,
        submitText,
        active,
        wpm,
        accuracy,
        handleSubmit,
        setText,
    } = useYourText()
  return (
    <div
    style={{color: '#9395C5'}}
    className='pr-2 pl-2 lg:pr-5 lg:pl-5 xl:pr-10 xl:pl-10'>
      <div className="flex justify-between mt-2 lg:mt-5 xl:mt-7 text-lg lg:text-xl xl:text-2xl">
        <div className="flex gap-1 xl:gap-3 items-center h-10 segoePrint">
          <span className="font-bold"
          >WPM: {wpm}</span>
          <span className="font-thin text-xl lg:text-2xl xl:text-3xl lg:pb-0.5 xl:pb-1"
          >|</span>
          <span className="font-bold"
          >Accuracy: {accuracy.toFixed(1)}</span>
        </div>
        <Link to='/'
          className='no-underline border-2 border-indigo-200 rounded-xl pl-1 lg:pl-2 xl:pl-3 pr-1 lg:pr-2 xl:pr-3 pb-1 grid place-items-center font-bold transition-all duration-50 ease-in active:border-indigo-500 active:animate-ping'
          style={{color: '#9395C5'}}>
            &#8592;   Готовые тексты
          </Link>
      </div>
      <hr className="border-t-3 rounded-full m-4 lg:m-5 mr-5 lg:mr-10 ml-5 lg:ml-10 border-dashed"
          style={{color: 'rgba(114, 118, 197, 40%)'}}/>
      <div className='min-h-80 flex flex-col gap-5 justify-center items-center pr-10 pl-10 text-justify'>
        {!active && <textarea className="border border-indigo-200 rounded-xl min-h-60 min-w-full p-1 lg:p-3 xl:p-4 grid place-items-center segoePrint text-2xl xl:text-3xl" value={text} onChange={(e) => {setText(e.target.value)}}></textarea>}
        {!active && <button type='button' onClick={handleSubmit} className="border-2 border-indigo-200 rounded-xl pl-1 lg:pl-2 xl:pl-3 pr-1 lg:pr-2 xl:pr-3 grid place-items-center segoePrint text-2xl xl:text-3xl  transition-all duration-50 ease-in active:border-indigo-500 active:animate-ping">Жамк</button>}
        {active && <CurrentText textR = {submitText} />}
      </div>
      <hr className="border-t-3 rounded-full m-4 lg:m-5 mr-5 lg:mr-10 ml-5 lg:ml-10 border-dashed"
            style={{color: 'rgba(114, 118, 197, 40%)'}}/>
  </div>
  )
}

export default YourText