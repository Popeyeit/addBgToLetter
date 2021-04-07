const arrValues = ['Inventory','item','boom','Inventory','Invsdfsdf']




const setWords = (arr) => {
   return  arr.map(el => {
       return `<p>
            ${el.split('').map(word=>{return`<span>${word}</span>`}).join('')}
        </p>`

    })
}

const setInDom = () => {
    const root = document.querySelector('.words')
    const words = setWords(arrValues).join('')
    root.insertAdjacentHTML('beforeend',words)

}

setInDom()

const allWordsInDom = [...document.querySelectorAll('p')]

let correctWords = []
let counter = 0


const addBg = (inputText)=>{const  spans = correctWords.map(element => {
           return [...element.querySelectorAll('span')]
});
    spans.forEach(el => {
          
            const content = el[inputText.length - 1]
            

            if (inputText.length > el.length) {
                return
            }
         
            if (content.textContent === inputText[inputText.length - 1]) {
                content.style.backgroundColor = 'red';
            }
        })
}
        
const deleteBg = (inputText) => {

    const  spans = correctWords.map(element => {
           return [...element.querySelectorAll('span')]
           
    });
    

    spans.forEach(el => {
        let content = ''
        
        if (inputText.length > 0) {
         content = el[inputText.length - 1]
        } else {
             content = el[0]
    }
       
  
              if (content.textContent === inputText[inputText.length - 1]) {
            content.nextSibling.style.backgroundColor = 'inherit';
        }
     
        if (inputText.length === 0) {
            content.style.backgroundColor = 'inherit'
       
        
        }
        })

}
const findWord = (e) => {
    const inputText = e.currentTarget.value

if(inputText.length < 2){    for (let index = 0; index < allWordsInDom.length; index++) {
        const element = allWordsInDom[index];
    const text = element.querySelector('span').textContent

        if (text === inputText[0] && inputText.length > 0 && correctWords.length === 0) {
            correctWords = [...correctWords ,allWordsInDom[index] ]
        }
}
    
}
  

    if (counter >= inputText.length) {
        deleteBg(inputText)
        counter = inputText.length
    }


    if (counter < inputText.length) {
           if (correctWords.length) {
       addBg(inputText)
    }
        counter++
    }
    
 if (inputText.length === 0) {
        correctWords = []
    }
}



const input = document.querySelector('#search').addEventListener('input',findWord)





