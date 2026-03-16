import { useState } from "react";
import { text, setText } from './stores/storeText'
import { useAtomValue, useSetAtom } from "jotai";
import CurrentText from "./CurrentText";

const Received = () => {
    const [selectvalue, setSelectValue] = useState<string>('easy') //уровень сложности
    const [show, setShow] = useState<boolean>(true) //показ элементов
    const txt = useAtomValue(text) //текущий текст из storeText
    const setTxt = useSetAtom(setText) //изменение текста, это функция
    const val: 'easy' | 'medium' | 'hard' = selectvalue as 'easy' | 'medium' | 'hard' //если выдаст ошибку то значить что ощибка в коде, а именно в названиях сложности
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectValue(event.target.value) //текущий уровень сложности
    }
    const handleStart = () => {
        setTxt(val)//берёт заданную сложность и передаёт её в джотай функцию
        setShow(!show)
        
    }
        return (
            <div>
                    <label>
                        <input type="radio" name="difficulty" value="easy"
                        checked={selectvalue === 'easy'}
                        onChange={handleChange} />Легко
                    </label>
                    <label>
                        <input type="radio" name="difficulty" value="medium"
                        checked={selectvalue === 'medium'}
                        onChange={handleChange} />Средне
                    </label>
                    <label>
                        <input type="radio" name="difficulty" value="hard"
                        checked={selectvalue === 'hard'}
                        onChange={handleChange} />Жёск
                    </label>
                {show && <button onClick={handleStart}>Жамк</button>}
                {!show && <CurrentText textR={txt.text} />}
            </div>
    )
}

export default Received