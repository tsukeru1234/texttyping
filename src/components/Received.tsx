import { useState } from "react";
import { text, setText, setAct, WPM, accuracy, act } from './stores/storeText'
import { useAtomValue, useSetAtom } from "jotai";
import CurrentText from "./CurrentText";
import './styles/font.css'

const Received = () => {
    const [selectvalue, setSelectValue] = useState<string>('easy') //уровень сложности

    const txt = useAtomValue(text) //текущий текст из storeText
    const setTxt = useSetAtom(setText) //изменение текста, это функция

    const accur = useAtomValue(accuracy)

    const wpm = useAtomValue(WPM)

    const active = useAtomValue(act);
    const setActive = useSetAtom(setAct)

    const val: 'easy' | 'medium' | 'hard' = selectvalue as 'easy' | 'medium' | 'hard' //если выдаст ошибку то значить что ощибка в коде, а именно в названиях сложности
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectValue(event.target.value) //текущий уровень сложности
    }
    const handleStart = () => {
        setTxt(val)//берёт заданную сложность и передаёт её в джотай функцию
        setActive()
        
    }
        return (
            <div className="pr-10 pl-10">
                <div className="flex justify-between mt-7">
                    <div style={{color: '#9395C5'}}
                    className="flex gap-3 items-center h-10 text-2xl segoePrint">
                        <span className="font-bold">WPM: {wpm}</span>
                        <span style={{color: '#9395C5'}}
                        className="font-thin text-2xl pb-1">|</span>
                        <span className="font-bold">Accuracy: {accur.toFixed(1)}</span>
                    </div>
                    <div className="flex gap-3 items-center h-10">
                        <label style={{color: '#9395C5'}}
                        className="border-2 border-indigo-200 rounded-xl pl-3 pr-3 grid place-items-center segoePrint text-2xl">
                            <input type="radio" name="difficulty" value="easy"
                            checked={selectvalue === 'easy'}
                            onChange={handleChange} 
                            className="hidden m-0"/>Легко
                        </label>
                        <span style={{color: '#9395C5'}}
                        className="font-thin text-3xl pb-2.5">|</span>
                        <label style={{color: '#9395C5'}}
                        className="border-2 border-indigo-200 rounded-xl pl-3 pr-3 grid place-items-center segoePrint text-2xl">
                            <input type="radio" name="difficulty" value="medium"
                            checked={selectvalue === 'medium'}
                            onChange={handleChange} 
                            className="hidden"/>Средне
                        </label>
                        <span style={{color: '#9395C5'}}
                        className="font-thin text-3xl pb-2.5">|</span>
                        <label style={{color: '#9395C5'}}
                        className="border-2 border-indigo-200 rounded-xl pl-3 pr-3 grid place-items-center segoePrint text-2xl">
                            <input type="radio" name="difficulty" value="hard"
                            checked={selectvalue === 'hard'}
                            onChange={handleChange} 
                            className="hidden"/>Жёск
                            </label>
                    </div>
                </div>
                    <hr 
                    className="border-t-3 rounded-full m-5 mr-10 ml-10 border-dashed"
                    style={{color: 'rgba(114, 118, 197, 40%)'}}/>
                <div className="min-h-80 flex justify-center items-center pr-10 pl-10 text-justify">
                    {!active && <button onClick={handleStart}
                    style={{color: '#9395C5'}}
                    className="border-2 border-indigo-200 rounded-xl pl-5 pr-5 pt-1 pb-1 grid place-items-center segoePrint text-3xl mt-40">Жамк</button>}
                    {active && <CurrentText textR={txt.text} />}
                </div>
            </div>
    )
}

export default Received