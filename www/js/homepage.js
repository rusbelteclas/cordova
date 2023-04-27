const signout = () =>{
    localStorage.removeItem("Session");
    window.location.href = '../pages/login.html';
}
function publi(){
    window.location.href = '../pages/publi.html';
}
function pucha(){
    window.location.href = '../pages/perfil.html';
}

var mainposts = document.getElementById('mainposts');
const images = JSON.parse(localStorage.getItem('images'));


images.forEach((image) => {
    var imagen = new Image;
        imagen.src = image.foto;
        imagen.className = "post";


    var top = document.createElement("div")
    top.className="headpost";
    mainposts.appendChild(top);
    var round = document.createElement("i")
    round.className="headprofile2";
    top.appendChild(round);
    var picture = new Image;
    picture.src = image.fotoperfil;
    picture.width = 32;
    round.appendChild(picture);


    var usuario = document.createElement("p");
        usuario.innerText = image.usuario;
        usuario.className = "headuser";
        top.appendChild(usuario);

    mainposts.appendChild(imagen);
    var bottom = document.createElement("div")
    bottom.className = "bottompostlast"
    mainposts.appendChild(bottom);
    var descripcion = document.createElement("p");
    descripcion.className = "des";
    descripcion.innerText = "Descripción:"
    bottom.appendChild(descripcion);
    var comentario = document.createElement("p");
    comentario.className = "comentario"
    comentario.innerText = image.comentario;
    bottom.appendChild(comentario)
    
});
