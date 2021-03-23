import React, { useContext } from "react";
import { userData } from '../../data/userdata'
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';
import { LoginModal } from '../../Store'



export function Signin() {
    const [login, setLogin ] = useContext(LoginModal)
    return (

        <div>
            <Modal
                show={login}
                onHide={()=>setLogin(false)}
            >
                <LoginForm />
            </Modal>
        </div>

    )
}


