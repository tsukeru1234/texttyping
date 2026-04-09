import { useEffect } from 'react';
import './styles/currentText.css'
import './styles/font.css'
import { useCurrentText } from './Hooks/useCurrentText';
import type { receivedText } from './types';

const CurrentText = ({ textR }: receivedText) => {
    const {
            currentIndex,
            setCurrentIndex,
            setWpm,
            setSym,
            setActive,
            setAcc,
            setCorrect,
            startTime,
            setDuration,
            checkChard,
            setPoint,
            inputRef,
        } = useCurrentText();
    const text: string = textR;
    const splitText = text.split('').map((char: string, index: number) => {
        return <span
        key={index}
        className='segoePrint main_text'>
            {char}
        </span>
    });// создаём массв span с каждой буквой

    useEffect(() => {
    const firstChar = inputRef.current?.children[0];
    if (firstChar) {
        firstChar.classList.add('current');
    }
}, []);     

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key.length > 1) return; //берём только буквы
            const expCharEl: Element | undefined = inputRef.current?.children[currentIndex] 
            const expChar = text[currentIndex]; //нужная буква

            expCharEl?.classList.remove('current')

            if (event.key === expChar){
                checkChard(expCharEl, 'correct');
                setSym(prev => prev + 1);
                setCorrect(prev => prev + 1);
            } else {
                checkChard(expCharEl, 'incorrect');
                setSym(prev => prev + 1);
            };

            const nextIndex = currentIndex + 1;
            if (inputRef.current?.children[nextIndex]) {
                inputRef.current?.children[nextIndex].classList.add('current');
            }
            setCurrentIndex(nextIndex);

            if (currentIndex === text.length - 1){
                if(startTime > 0){
                    const endTime = performance.now();
                    const diff = endTime - startTime;
                    setDuration(Math.floor(diff/1000));
                };
                setActive(prev => !prev);
                setWpm();
                setAcc();//выводит при полном заполнении текста
                setPoint();
            };
        };
        window.addEventListener('keydown', handleKeyDown);
         return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }; //вызываем отслеживание нажатий с очисткой
    }, [currentIndex]);
    return (
        <div ref={inputRef} className='text-2xl lg:text-3xl xl:text-4xl'>
            {splitText}
        </div>
    );
};

export default CurrentText;