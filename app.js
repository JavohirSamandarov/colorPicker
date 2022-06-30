const body = document.querySelector('body');


const colors = ['#308DD8', '#29C566', '#F19212', '#E24234', '#924EAD']


i = 0;
window.addEventListener('keydown', (event) => {
    if(event.shiftKey && event.keyCode === 9){
        i++;
        if(i <= 4){
            body.style.backgroundColor = colors[i];
            console.log(colors[i])
        }else{
            body.style.backgroundColor = colors[0];
            i = 0;
        }
        event.preventDefault();
    }
})