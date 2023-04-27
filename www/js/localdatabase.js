var keysBD = {
    IdUsers: 'users',
    IdPosts: 'images',
    Session: 'Sesion'
}
var getUsers = ()=>{
    let firstValueUsers = [{
        id: 1,
        user: 'rusbel12@gmail.com',
        password: 'rusbel',
        name: 'Rusbel'
    }];
    let users = localStorage.getItem(keysBD.IdUsers);
    if(!users){
        localStorage.setItem(keysBD.IdUsers, JSON.stringify(firstValueUsers))
        return firstValueUsers;
    }
    return JSON.parse(users);
}
var getSesion = ()=>{
    let sesion = localStorage.getItem(keysBD.Session);
    return JSON.parse(sesion);
}

var makeUsers = (user2, password2, name2)=>{
    let users = JSON.parse(localStorage.getItem(keysBD.IdUsers));
    let newUser = {
        id: users.length+1,
        user: user2,
        password: password2,
        name: name2
    };
    users.push(newUser);
    localStorage.setItem(keysBD.IdUsers, JSON.stringify(users))
        return users;
}
