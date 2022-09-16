import React, {useState} from 'react'

const user = {
    name: 'Catana',
    username: 'catanacomics',
    image: 'assets/img/catanacomics.svg',
}

export function userInfoFromPage(){
    return user;
}

export function pageChangeHook(){
    
}
const handleInput = e => {
    if (e.target.id === 'username')
    {
        user.username = e.target.value;
    }
    else if(e.target.id === 'name')
    {
        user.name = e.target.value;
    }
    else if(e.target.id === 'image')
    {
        user.image = e.target.value;
    }
}   


export default function EditUserPage ({changePage, ...rest}){
    const [state, setState] = useState('default');

    return (
        <div className="edit-user-background">
            <div className="edit-user-background__center-div">
                <div className="user-editor-header">
                    <h1>Edit User</h1>
                </div>
                <div className="profile-old-box">
                    <img width='64px' height='64px' onClick={() => {setState('notDefault')}} alt="" src={user.image}/>
                    {state === 'default'? [] : imageBox()}
                    <div className="texto">
                        <input id='username' type="text" onChange={handleInput} placeholder={user.username}/>
                        <input id='name' type="text" onChange={handleInput} placeholder={user.name}/>
                    </div>
                </div>
                <button onClick={e => {changePage("mainPage")}} onChange={handleInput} className='edit-user-button'>Aplicar</button>
            </div>
        </div>
    )
}



function imageBox(){
    return (
        <input className='imageBox' id='image' type='text' placeholder="Coloque o diretório ou URL da sua imagem" onChange={handleInput}></input>
    )
}