import React, { useContext } from "react";
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Fullname,Mail,LoginStatus,LoginModal } from '../../Store';
import { Signin } from '../signin/Signin'
import { useTranslation } from 'react-i18next';
import lotus from '../../lotus.jpg'


export function Navbarr() {
  const  [login, setLogin]  = useContext(LoginModal);
  const [fullname] = useContext(Fullname);
  const  [mail]  = useContext(Mail);
  const [loginStatus, setLoginStatus ] = useContext(LoginStatus);

  const { t, i18n } = useTranslation();
 
  function handleClick(lang){
    i18n.changeLanguage(lang)
  }
  return (
    <div className='navbar-container'>
      <Navbar bg="light" expand="lg" fixed="top" >
        <Navbar.Brand ><img src={lotus} height="28" ></img>LOTUS REACT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className=" "  >          
            <Link className="nav-link" to={"/home"}>{t('Home.1')} </Link>
            {loginStatus == false ?
              <Nav.Link href="" onClick={() => setLogin(true)}>{t('Login.1')}</Nav.Link>
              :
            <NavDropdown title={fullname} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{mail}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><Nav.Link href="" onClick={() => setLoginStatus(false)}>{t('Logout.1')}</Nav.Link></NavDropdown.Item>
            </NavDropdown>
            }           
            <Link className="nav-link" to={"/contact"}>{t('Contact.1')} </Link>
            <NavDropdown title={t('Languages.1')} id="basic-nav-dropdown"  >
              <NavDropdown.Item href="#action/3.1"> <button className="btn btn-primary "  style = {{ fontSize: "10px", padding:"10px"  }} onClick={() => handleClick('en')}> 
              EN
            </button></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><Nav.Link href="" > <button className="btn btn-primary " style = {{ fontSize: "10px" ,padding:"10px"    }} onClick={() => handleClick('tr')}>
              TR
            </button></Nav.Link></NavDropdown.Item>
            </NavDropdown>                    
          </Nav>
        </Navbar.Collapse>
      </Navbar>
   <Signin/>
    </div>
  )
}