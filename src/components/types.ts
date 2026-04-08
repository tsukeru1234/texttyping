export interface textObj {
    'id': string;
    'text': string;
}
export interface dataPars {
    'easy': textObj[];
    'medium': textObj[];
    'hard': textObj[];
}//интерфейсы для наших текстов

export type receivedText = {
    textR: string;
}; //принимает текст