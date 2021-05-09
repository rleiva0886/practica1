let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamanoWidth = sliderInd[0].clientWidth;
let intervalo = 3000;



setInterval(function tiempo(){
    slide();
},intervalo)

console.log(sliderInd.length)

function slide(){
    slider.style.transform = `translate(${-tamanoWidth * contador}px)`;
    slider.style.transition = 'transform 2s';
    contador++;

    if(contador === sliderInd.length){
        contador = 0;

        setTimeout( () => {
            slider.style.transform = `translate(0px)`;
            slider.style.transition = 'transform 0s';
            console.log(slider.style.transition)
        },intervalo)
    }
}

console.log(intervalo);