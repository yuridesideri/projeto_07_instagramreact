import User from './user'
import Suggestions from './suggestions'


export default function Sidebar() {
    const sidebar = 
    <div className="sidebar">
        <User />
        <Suggestions />
        <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
    
    return sidebar;

}