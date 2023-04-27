const loadprofile = () =>{
    const sesion = JSON.parse(localStorage.getItem('Session'));
    let nombre2 = document.querySelector('.nameeidan');
    let bio = document.getElementById('bio')
sesion.forEach((element) => {
    nombre2.innerHTML = element.nombre;
    bio.innerHTML = element.bio
    var picture = document.getElementById('picture')
    picture.src = element.fotoperfil;
});
}
var line1 = document.getElementById('line1');
const images = JSON.parse(localStorage.getItem('images'));


images.forEach((image) => {
    var imagen = new Image;
        imagen.src = image.foto;
        imagen.className = "foto";
        line1.appendChild(imagen)
    
});

function changehome(){
    window.location.href = '../pages/homepage.html';
}
function topost(){
    window.location.href = '../pages/publi.html';
}