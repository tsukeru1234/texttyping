import { useAtom, useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { act, clearPar, corr, durationAtom, setAccuracy, setCheckAtomChard, setMPW, setPointsAtom, startTimeAtom, symbol } from "../../stores/storeText";


export const useCurrentText = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const setWpm = useSetAtom(setMPW);
        const [, setSym] = useAtom(symbol);
        const [active, setActive] = useAtom(act); // включение секундомера
        const setAcc = useSetAtom(setAccuracy);
        const [, setCorrect] = useAtom(corr);
        const [startTime] = useAtom(startTimeAtom);
        const setDuration = useSetAtom(durationAtom);
        const clearParam = useSetAtom(clearPar);
        const checkChard = useSetAtom(setCheckAtomChard);
        const setPoint = useSetAtom(setPointsAtom);
        const inputRef = useRef<HTMLDivElement>(null);
        
        useEffect(() => {
                if(active){
                    return () => {
                        clearParam();
                    }};
            },[active, clearParam]);

        return {
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
        };
};