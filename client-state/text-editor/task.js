const getTextArea = document.getElementById('editor');
const storedTextAreaValue = localStorage.getItem('textAreaText');

if(storedTextAreaValue){
    getTextArea.value = storedTextAreaValue;
}

getTextArea.addEventListener('input', ()=>{
    const textAreaValue = getTextArea.value;
    localStorage.setItem('textAreaText', textAreaValue);
})