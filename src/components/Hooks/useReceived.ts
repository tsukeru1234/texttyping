import { useAtomValue, useSetAtom, useAtom } from "jotai"
import { useState } from "react"
import { accuracyAtom, act, clearPar, setText, startTimeAtom, text, WPM } from "../../stores/storeText"

export const useReceived = () => {
    const [selectValue, setSelectValue] = useState<string>('easy') //уровень сложности
    const txt = useAtomValue(text) //текущий текст из storeText
    const setTxt = useSetAtom(setText) //изменение текста, это функция
    const accuracy = useAtomValue(accuracyAtom)
    const wpm = useAtomValue(WPM)
    const setStartTime = useSetAtom(startTimeAtom)
    const [active, setActive] = useAtom(act);
    const val: 'easy' | 'medium' | 'hard' = selectValue as 'easy' | 'medium' | 'hard' //если выдаст ошибку то значить что ощибка в коде, а именно в названиях сложности
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectValue(event.target.value) //текущий уровень сложности
    }
    const clearParam = useSetAtom(clearPar);

    const handleStart = () => {
        setTxt(val)//берёт заданную сложность и передаёт её в джотай функцию
        setActive(prev => !prev)
        setStartTime(performance.now())
    }
    const handleStop = () => {
        setActive(false)
        clearParam()
    }

    return {
        selectValue,
        txt,
        accuracy,
        wpm,
        active,
        handleChange,
        handleStart,
        handleStop,
    }
}