const login = () =>{
    let email = document.querySelector('#user');
    let password = document.querySelector('#password');
    let mensajeerror = document.querySelector('#error');
    let users = getUsers();
    if(!email.value && !password.value){
        mensajeerror.innerHTML = 'Introduce correo y constraseña';
    }else{
        let findUser = users.find(e=>e.user == email.value);
        if(!findUser){
            mensajeerror.innerHTML = 'Usuario no encontrado';
        }
        if(findUser.password==password.value && findUser.user == email.value){
            window.location.href='../pages/homepage.html';
            const UserArray = localStorage.getItem('Session');
            let sesion = [];
            if (UserArray) {
                sesion = [...JSON.parse(UserArray)];
                sesion.push({"nombre":findUser.name,
            "fotoperfil":"loca.png", "bio":"Estudio en la UTIM"})
            }else{
                sesion.push({"nombre":findUser.name,
            "fotoperfil":"loca.png", "bio":"Estudio en la UTIM"})
            }
            localStorage.setItem('Session', JSON.stringify(sesion))


        }else{
            mensajeerror.innerHTML = 'Usuario o contraseña incorrecta';
        }
    }
}