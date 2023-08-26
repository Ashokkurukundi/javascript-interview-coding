const root = document.getElementById('root')
let count = 0 ;
//Create a progress bar that takes n seconds to complete. Make the progress bar queueable i.e on button click progress bar should restart after current one is completed
function addProgressBar(){
    if(count === 0){
        create();
    }
    count++;
}
function create(n = 2){
    const divEle = document.createElement('div')
    divEle.classList.add('progress-bar');
    divEle.style = `transition: width ${n}s ease`
    root.appendChild(divEle);

    setTimeout(()=>{
        divEle.classList.add('full-width')
    }, 50)

    divEle.addEventListener('transitionend',()=>{
        count = count - 1;
        if(count >= 1){
            create()
        }
    });

    divEle.removeEventListener('transitionend',()=>{})
}

