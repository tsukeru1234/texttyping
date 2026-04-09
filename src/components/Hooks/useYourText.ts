import { useSetAtom, useAtom, useAtomValue } from "jotai"
import { useState } from "react"
import { startTimeAtom, WPM, accuracyAtom, act } from "../../stores/storeText"

export const useYourText = () => {
    const [text, setText] = useState<string>('');
    const [submitText, setSubmitText] = useState<string>('');
    const setStartTime = useSetAtom(startTimeAtom);
    const [active, setActive] = useAtom(act);
    const wpm = useAtomValue(WPM);
    const accuracy = useAtomValue(accuracyAtom);
    const handleSubmit = () => {
      const arrText: string[] = text.split('')
      if (arrText.includes(' ') && /[a-zA-Zа-яА-ЯёЁ\d\s,.:;-]/.test(text) && !text.endsWith(' ')){
        setSubmitText(text);
        setActive((prev: boolean) => !prev);
        setStartTime(performance.now());
        setText('');
      } else {
        alert("Ошибка!! текст должен содержать пробелы, хотя бы одну букву/цифру. Или вы ввели недоступный символ, доступны только англиские буквы, русские буквы, цифры, [ ,.:;- ]. Или последним символом у вас стоит пробел. Попробуйте заново ))");
        setText('');
      };
    };

    return {
        text,
        submitText,
        active,
        wpm,
        accuracy,
        handleSubmit,
        setText,
    }
}