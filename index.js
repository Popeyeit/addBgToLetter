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




const addBg = (inputText) => {


    const spans = correctWords.map(element => {
        return [...element.querySelectorAll('span')]
    });
    
    
    for (let index = 0; index < inputText.length; index++) {
        spans.forEach(element => {
              if (element[index]) {
                  if (element[index].textContent === inputText[index]) {
                
                const text = element.map(el => el.textContent).join('')
                  const newText = text.slice(0,inputText.length)
        
                if (newText === inputText) {
                  
                    element[index].style.backgroundColor = 'red';
           
                        if (element[index].previousElementSibling) {
                            if (element[index].previousElementSibling.style.backgroundColor === 'red')
                            
                            
                            {
                                element[index].style.backgroundColor = 'red';
                            
                            }
                        }
            
                        }
          
                    }}
            
        });
   
            }
        }


const deleteBg = (inputText) => {

    const spans = correctWords.map(element => {
        return [...element.querySelectorAll('span')]
           
    });

    for (let index = 0; index < inputText.length + 1; index++) {
       
        spans.forEach(element => {
                if (inputText.length === 0) {
                element[0].style.backgroundColor = 'inherit'
            
                }
         

            if (element[index]) {
                if (element[index].textContent === inputText[index]) {
                    
                
                    const text = element.map(el => el.textContent).join('')
                    const newText = text.slice(0, inputText.length)
        
                    if (newText === inputText) {
                        if (element[inputText.length - 1].nextSibling.style) {
           

                            element[inputText.length-1].nextSibling.style.backgroundColor = 'inherit';
                        }
               
          
                    }
                      
                }
            }


        }
            );
   
    }
 
    console.log(counter);
    console.log(inputText.length);

    if (counter > inputText.length) {
        spans.forEach(el => {
            console.log(el)
        })
    }
}
const findWord = (e) => {
    const inputText = e.currentTarget.value



    if (correctWords.length < arrValues.length && correctWords.length=== 0) {
        for (let index = 0; index < allWordsInDom.length; index++) {
            const element = allWordsInDom[index];
            const text = [...element.querySelectorAll('span')].map(el => el.textContent).join('')
            const newText = text.slice(0, inputText.length)
            if (newText === inputText && inputText.length > 0) {
                correctWords = [...correctWords, allWordsInDom[index]]
            }
        }
    }
    

      if (counter < inputText.length) {
           if (correctWords.length) {
       addBg(inputText)
           }
          if (counter === 0 && inputText.length > 1) {
              counter = inputText.length
          }
        counter++
    }

    if (counter >= inputText.length || counter===0 && inputText.length > 1) {
        deleteBg(inputText)
        counter = inputText.length
    }

 if (inputText.length === 0) {
        correctWords = []
 }

}


        
const input = document.querySelector('#search').addEventListener('input',findWord)