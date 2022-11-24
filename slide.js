const app = {

init: () => {
console.log('Slider Init');
app.listener();
},

listener: () => {
document.getElementById('slider').addEventListener('input', app.comparaisonSlider);
},

comparaisonSlider: () => {
    let slideValue = document.getElementById("slider").value;
    document.getElementById("top-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
},

}

document.addEventListener('DOMContentLoaded', app.init);