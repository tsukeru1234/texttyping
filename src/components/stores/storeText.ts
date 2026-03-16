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

