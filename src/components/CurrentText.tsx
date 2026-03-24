import { useState, useEffect, useRef } from 'react';
import './styles/currentText.css'
import { chekChard } from './util'
import { setSymbol, act, setAct, secInc, clearSec, setMPW, setCorr, clearCorr, setAccuracy } from './stores/storeText'
import { useAtomValue, useSetAtom } from "jotai";
import './styles/font.css'

type receivedText = {
    textR: string;
}; //принимает текст

const CurrentText = ({ textR }: receivedText) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    //кол во слов в минуту
    const setwpm = useSetAtom(setMPW);

    const setSym = useSetAtom(setSymbol)

    const setSec = useSetAtom(secInc); 
    const cSec = useSetAtom(clearSec); //обнуление секундомера

    const active = useAtomValue(act); // включение секундомера
    const setActive = useSetAtom(setAct);

    const setCo = useSetAtom(setCorr);
    const setAcc = useSetAtom(setAccuracy);
    const cCo = useSetAtom(clearCorr);

    const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if(active){
            intervalRef.current = setInterval(() => {
                setSec();
            }, 1000);
        } else if (intervalRef.current){
            clearInterval(intervalRef.current);
            cSec();
            cCo();
        };

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [active, setSec, cSec, cCo]);

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
                setSym()
                setCo()
            } else {
                chekChard(expCharEl, 'uncorrect');
                setSym()
            };
            setCurrentIndex(prev => prev + 1);
            if (currentIndex === text.length - 1) {
                setwpm() 
                setAcc();//выводит при полном заполнении текста
                setActive()//отключает таймер
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