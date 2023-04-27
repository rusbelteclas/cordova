let comentario = document.getElementById('comentario');
const btn = document.getElementById('btn');
function paso(){
    window.location.href = '../pages/homepage.html';
}

btn.addEventListener('click', (event) => {
    if(comentario.value == " "){
        console.log("error")
    }else{
        var name = document.getElementById("imagenes").files[0].name
        const reader = new FileReader();

        
        reader.readAsDataURL(document.getElementById('imagenes').files[0])

        reader.addEventListener('load', () => {
            const imagesArray = localStorage.getItem('images');
            let images = [];
            const sesion = JSON.parse(localStorage.getItem('Session'));
            var usuario;
            var profilepicture;
            sesion.forEach((element) => {
                    usuario= element.nombre,
                    profilepicture= element.fotoperfil
                });
            if (imagesArray) {
                images = [...JSON.parse(imagesArray)];
                images.push({"usuario":usuario,
                "fotoperfil":profilepicture,
                "comentario": comentario.value,
                "foto":reader.result});
            } else {
                images.push({"usuario":usuario,
                "fotoperfil":profilepicture,
                "comentario": comentario.value,
                "foto":reader.result});
            }
            localStorage.setItem('images', JSON.stringify(images));
        });
    }
    
       
    window.location.href = '../pages/homepage.html';
});
