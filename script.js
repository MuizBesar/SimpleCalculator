let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerHTML = '';
                break;
            case '←':
                if(display.innerHTML){
                    display.innerHTML = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerHTML = 'Invalid Calculation';
                }
                
                break;
            default:

    
                display.innerHTML += e.target.innerHTML;
        }
    })
})