import { useState, useEffect, useRef } from 'react';
import './styles/currentText.css'
import { chekChard } from './util'

type receivedText = {
    textR: string;
}; //принимает текст

const CurrentText = ({ textR }: receivedText) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const inputRef = useRef<HTMLDivElement>(null);
    const text: string = textR;
    const splitText = text.split('').map((char: string, index: number) => {
        return <span
        key={index}>
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
            } else {
                chekChard(expCharEl, 'uncorrect');
            };
            setCurrentIndex(prev => prev + 1);
            if (currentIndex === text.length - 1) {
                alert("dc") //выводит при полном заполнении текста
            }
        }
        const currentChard = inputRef.current?.children[currentIndex];
        currentChard?.classList.add('current'); //ставим метку
        window.addEventListener('keydown', handleKeyDown);
         return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }; //вызываем отслеживание нажатий с очисткой
    });
    return (
        <div ref={inputRef}>
            {splitText}
        </div>
    )
}

export default CurrentText;