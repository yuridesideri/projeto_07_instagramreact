import {userInfoFromPage} from './editUserPage.js'

export default function User({changePage, ...rest}) 
{
    const user = userInfoFromPage();

    return (
        <div className="usuario">
            <img alt="" src={user.image} />
            <div className="texto">
              <strong>{user.username}</strong>

              <p className="text__nome">{user.name} <ion-icon onClick={() => changePage('editUserPage')} name="pencil-outline"></ion-icon></p>
            </div>
        </div>
    )
}



