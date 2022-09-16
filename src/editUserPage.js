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
    const [imageState, setImageState] = useState(false);
    const [outAnimation, setOutAnimation] = useState(false);
    return (    
        <div className="edit-user-background">
            <div className={`edit-user-background__center-div ${outAnimation? 'animateOut' : 'animateIn'}`}>
                <div className="user-editor-header">
                    <h1>Edit User</h1>
                </div>
                <div className="profile-old-box">
                    <div>
                        <img width='64px' height='64px' onClick={() => {setImageState((prvState => !prvState))}} alt="" src={user.image}/>
                    </div>
                    {imageState? imageBox() : null}
                    <div className="texto">
                        <input id='username' type="text" onChange={handleInput} placeholder={user.username}/>
                        <input id='name' type="text" onChange={handleInput} placeholder={user.name}/>
                    </div>
                </div>
                <button onClick={e => {setOutAnimation(!outAnimation) ; setTimeout(() => {changePage("mainPage")}, 400)}} onChange={handleInput} className='edit-user-button'>Aplicar</button>
            </div>
        </div>
    )
}



function imageBox(){
    return (
        <input className='imageBox' id='image' type='text' placeholder="Coloque o diretório ou URL da sua imagem" onChange={handleInput}></input>
    )
}