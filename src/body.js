import Posts from './posts'
import Sidebar from './sidebar'
import Stories from './stories'




export default function Body ({changePage, ...rest}) {
    const body = 
    <div className="corpo">
        <div className="esquerda">
            <Stories />
            <Posts />
        </div>
        <Sidebar changePage={changePage}/>
    </div>
    

return body;
}
