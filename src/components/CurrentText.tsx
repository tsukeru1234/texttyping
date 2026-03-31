import { useState, useEffect, useRef } from 'react';
import './styles/currentText.css'
import { chekChard } from './util'
import { symbol, act, setMPW, setAccuracy, startTimeAtom, durationAtom, corr, clearPar } from './stores/storeText'
import { useAtom, useSetAtom } from "jotai";
import './styles/font.css'

type receivedText = {
    textR: string;
}; //принимает текст

const CurrentText = ({ textR }: receivedText) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    //кол во слов в минуту
    const setwpm = useSetAtom(setMPW);

    const [, setSym] = useAtom(symbol)

     //обнуление секундомера

    const [active, setActive] = useAtom(act); // включение секундомера

    const setAcc = useSetAtom(setAccuracy);
    
    const [, setCorrect] = useAtom(corr)

    const [startTime] = useAtom(startTimeAtom);
    const setDuration = useSetAtom(durationAtom);

    const clearParam = useSetAtom(clearPar)

    useEffect(() => {
        if(active){
            return () => {
                clearParam()
            }};
    },[active, clearParam])

    const inputRef = useRef<HTMLDivElement>(null);
    const text: string = textR;
    const splitText = text.split('').map((char: string, index: number) => {
        return <span
        key={index}
        className='segoePrint main_text'
        style={index === currentIndex ? {backgroundColor : '#474a51', color: '#f8f8ff'} : {}}
        >
            {char}
        </span>
    });// создаём массив span с каждой буквой

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key.length > 1) return; //берём только буквы
            const expChar = text[currentIndex]; //нужная буква
            const expCharEl: Element | undefined = inputRef.current?.children[currentIndex]; //текущий DOMэлемент нужен для добавления ему стиля 
            if (event.key === expChar){
                chekChard(expCharEl, 'correct');//функция в util.ts
                setSym(prev => prev + 1)
                setCorrect(prev => prev + 1)
            } else {
                chekChard(expCharEl, 'uncorrect');
                setSym(prev => prev + 1)
            };
            setCurrentIndex(prev => prev + 1);
            if (currentIndex === text.length - 1) {
                if(startTime > 0){
                    const endTime = performance.now();
                    const diff = endTime - startTime;
                    setDuration(Math.floor(diff/1000))
                }
                setActive(prev => !prev)
                setwpm() 
                setAcc();//выводит при полном заполнении текста
            };
        };
        window.addEventListener('keydown', handleKeyDown);
         return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }; //вызываем отслеживание нажатий с очисткой

    });
    return (
        <div ref={inputRef} className='text-4xl'>
            {splitText}
        </div>
    )
}

export default CurrentText;