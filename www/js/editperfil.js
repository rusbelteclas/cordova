let btn = document.getElementById('btn');
let nombre = document.getElementById('Nombre');
        let bio = document.getElementById('bio');
function datos(){
    let sesiones = JSON.parse(localStorage.getItem('Session'));
    sesiones.forEach((element) => {
        
        nombre.value = element.nombre;
        bio.value = element.bio;
    })
    
}

btn.addEventListener('click', (event) => {
    let profile = document.getElementById("editfoto").files[0].name
        const reader = new FileReader();

        
        reader.readAsDataURL(document.getElementById('editfoto').files[0])
        
        reader.addEventListener('load', () => {
            
            let sesion = JSON.parse(localStorage.getItem('Session'));
            sesion.forEach((lasesion) => {

                let session = [{
                    nombre: nombre.value,
                    fotoperfil: reader.result,
                    bio: bio.value
                }];
            
                localStorage.setItem('Session', JSON.stringify(session));
                });

                
            });
            if (profile=='undefined') {
                sesion.forEach((lasesion) => {

                    let session = [{
                        nombre: nombre.value,
                        fotoperfil: lasesion.fotoperfil,
                        bio: bio.value
                    }];
                
                    localStorage.setItem('Session', JSON.stringify(session));
                    });
            }
            
            location.reload()
            window.location.href = '../pages/perfil.html';
        });

