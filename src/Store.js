import React, { useState } from 'react';
export const LoginModal = React.createContext(false)
export const LoginStatus = React.createContext(false)
export const Mail = React.createContext('sds')
export const Password = React.createContext('sds')
export const Fullname = React.createContext('sds')
export const Name = React.createContext('sds')

export const Store = ({ children }) => {

    const [login, setLogin] = useState(false)
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState(false)
    const [fullname, setFullName] = useState('')
    const [name, setName] = useState('')
    return (
        <LoginModal.Provider value={[login, setLogin]}>
            <Mail.Provider value={[mail, setMail]}>
                <Password.Provider value={[password, setPassword]}>
                    <LoginStatus.Provider value={[loginStatus, setLoginStatus]}>
                        <Fullname.Provider value={[fullname, setFullName]}>
                        <Name.Provider value={[name, setName]}>
                            {children}
                            </Name.Provider>
                        </Fullname.Provider>
                    </LoginStatus.Provider>
                </Password.Provider>
            </Mail.Provider>
        </LoginModal.Provider>)

}

