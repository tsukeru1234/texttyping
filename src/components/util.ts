export const chekChard = (el: Element | undefined, clas: string) => {
        if (!el)return;
        el.classList.add(clas);
        el.classList.remove('current');
    }; //для currentText

    interface mainTextTaker {
        data: object
        randomTextIndex: (dif: string) => number;
    }
    
export const takeTextObject = new Promise<mainTextTaker>((resolve) => {
    
    fetch('/src/store/data.json')
        .then(response => response.json())
        .then(data => {
            if(!data)return;
            const mainObj: mainTextTaker ={
                data: data,
                randomTextIndex: (dif) => {
                    return Math.floor(Math.random() * data[dif].length);
                },
            };
            resolve(mainObj)
        });

})