import { useState } from "react";
import { text, setText, WPM, accuracy, act, startTimeAtom } from './stores/storeText'
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Link } from "@tanstack/react-router";
import CurrentText from "./CurrentText";
import './styles/font.css'

const Received = () => {
    const [selectvalue, setSelectValue] = useState<string>('easy') //уровень сложности

    const txt = useAtomValue(text) //текущий текст из storeText
    const setTxt = useSetAtom(setText) //изменение текста, это функция

    const accur = useAtomValue(accuracy)

    const wpm = useAtomValue(WPM)

    const setStartTime = useSetAtom(startTimeAtom)

    const [active, setActive] = useAtom(act);

    const val: 'easy' | 'medium' | 'hard' = selectvalue as 'easy' | 'medium' | 'hard' //если выдаст ошибку то значить что ощибка в коде, а именно в названиях сложности
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectValue(event.target.value) //текущий уровень сложности
    }
    const handleStart = () => {
        setTxt(val)//берёт заданную сложность и передаёт её в джотай функцию
        setActive(prev => !prev)
        setStartTime(performance.now())
    }
        return (
            <div style={{color: '#9395C5'}}
            className="pr-2 pl-2 lg:pr-5 lg:pl-5 xl:pr-10 xl:pl-10">
                <div className="flex justify-between mt-2 lg:mt-5 xl:mt-7">
                    <div className="flex gap-1 xl:gap-3 items-center h-10 text-lg lg:text-xl xl:text-2xl segoePrint">
                        <span className="font-bold"
                        >WPM: {wpm}</span>
                        <span className="font-thin text-xl lg:text-2xl xl:text-3xl lg:pb-0.5 xl:pb-1"
                        >|</span>
                        <span className="font-bold"
                        >Accuracy: {accur.toFixed(1)}</span>
                    </div>
                    <div className="flex gap-1 xl:gap-3 items-center h-10 segoePrint text-lg lg:text-xl xl:text-2xl">
                        <label className="border-2 border-indigo-200 rounded-xl pl-1 lg:pl-2 xl:pl-3 pr-1 lg:pr-2 xl:pr-3 pb-1 grid place-items-center">
                            <input type="radio" name="difficulty" value="easy"
                            checked={selectvalue === 'easy'}
                            onChange={handleChange} 
                            className="hidden"/>Легко
                        </label>
                        <span className="font-thin text-xl lg:text-3xl pb-1.5 lg:pb-2.5"
                        >|</span>
                        <label className="border-2 border-indigo-200 rounded-xl pl-1 lg:pl-2 xl:pl-3 pr-1 lg:pr-2 xl:pr-3 pb-1 grid place-items-center">
                            <input type="radio" name="difficulty" value="medium"
                            checked={selectvalue === 'medium'}
                            onChange={handleChange} 
                            className="hidden"/>Средне
                        </label>
                        <span className="font-thin text-xl lg:text-3xl pb-1.5 lg:pb-2.5"
                        >|</span>
                        <label className="border-2 border-indigo-200 rounded-xl pl-1 lg:pl-2 xl:pl-3 pr-1 lg:pr-2 xl:pr-3 pb-1 grid place-items-center">
                            <input type="radio" name="difficulty" value="hard"
                            checked={selectvalue === 'hard'}
                            onChange={handleChange} 
                            className="hidden"/>Жёск
                        </label>
                        <span className="font-thin text-xl lg:text-3xl pb-1.5 lg:pb-2.5"
                        >|</span>
                        <Link to='/yourtextpage'
                            className='no-underline border-2 border-indigo-200 rounded-xl pl-1 lg:pl-2 xl:pl-3 pr-1 lg:pr-2 xl:pr-3 pb-1 grid place-items-center'>
                            Ввести свой текст
                        </Link>
                    </div>
                </div>
                <hr className="border-t-3 rounded-full m-4 lg:m-5 mr-5 lg:mr-10 ml-5 lg:ml-10 border-dashed"
                style={{color: 'rgba(114, 118, 197, 40%)'}}/>
                <div className="min-h-80 flex justify-center items-center pr-10 pl-10 text-justify">
                    {!active && <button onClick={handleStart}
                    className="border-2 border-indigo-200 rounded-xl pl-1 lg:pl-2 xl:pl-3 pr-1 lg:pr-2 xl:pr-3 grid place-items-center segoePrint text-2xl xl:text-3xl">Жамк</button>}
                    {active && <CurrentText textR={txt.text} />}
                </div>
                <hr className="border-t-3 rounded-full m-4 lg:m-5 mr-5 lg:mr-10 ml-5 lg:ml-10 border-dashed"
                style={{color: 'rgba(114, 118, 197, 40%)'}}/>
            </div>
    )
}

export default Received