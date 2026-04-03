import { atom } from 'jotai'
import dataFromJSON from './data.json'

interface textObj {
    'id': string;
    'text': string;
}
interface dataPars {
    'easy': textObj[];
    'medium': textObj[];
    'hard': textObj[];
}//интерфейсы для наших текстов
const data: dataPars = dataFromJSON

export const text = atom<textObj>(data['easy'][Math.floor(Math.random() * data['easy'].length)]); //начальный текс

export const setText = atom(null, (_, set, different: 'easy' | 'medium' | 'hard') => { //изменяем начальный текс
    set(text, data[different][Math.floor(Math.random() * data[different].length)]);
});

export const symbol = atom(0)


export const act = atom(false)

export const startTimeAtom = atom(0)
export const durationAtom = atom(0)

export const WPM = atom(0)

export const setMPW = atom(null, (get, set) => {
    set(WPM, Math.floor(get(symbol) / 5 / (get(durationAtom) /60)))
})

export const accuracy = atom(0)

export const corr = atom(0)

export const setAccuracy = atom(null, (get, set) => {
    set(accuracy, (get(corr) * 100 / get(symbol)))
})

export const clearPar = atom(null, (_, set) => {
    set(corr, 0)
    set(symbol, 0)
    set(durationAtom, 0)
})


export const setCheckAtomChard = atom(null,(_, set, el: Element | undefined, class_: string) => {
        if (!el)return;
        el.classList.add(class_);
    })

export const pointsAtom = atom(0)

export const setPointsAtom = atom(null, (get, set) => {
    if (get(pointsAtom) < (get(WPM) * get(accuracy) / 100)){
        set(pointsAtom, Math.floor(get(WPM) * get(accuracy) / 100));
    }
})