import React, {useState} from 'react'
import Body from './body'
import Navbar from './navbar'
import MobileBackground from './mobileBackground'
import EditUserPage from './editUserPage'

export default function App (){
        const [state, setState] = useState('mainPage');

        return ( <>
                <Navbar />
                <Body changePage={setState}/>
                <MobileBackground />
                {state === 'mainPage'? <></> : <EditUserPage changePage={setState}/>}
                </>)
}