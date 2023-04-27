const registro = () =>{
    let numero = document.getElementById('user').value
    let nombre = document.getElementById('nombre').value
    let usuario = document.getElementById('usuario').value
    let password = document.getElementById('password').value;
    let mensajeerror = document.getElementById('message');
    let users = getUsers();
    if(!numero || !nombre || !usuario || !password){
        mensajeerror.innerHTML = ('Verifica todos los campos');
    }else{
        let findUser = users.find(e=>e.user == numero);
        if(!findUser){
            let users = makeUsers(numero,password,nombre);
            window.location.href='../pages/login.html';
        }else{
            mensajeerror.innerHTML =('Usuario ya existe');
        }
    }
}
