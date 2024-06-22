import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ChangePass from '../../../AuthModules/components/ChangePass/ChangePass';
import styles from './LandingPage.module.css';
import Slider from '../../../SharedModules/components/Slider/Slider';
import NewReleaseBooks from '../../../SharedModules/components/NewReleaseBooks/NewReleaseBooks';

export default function Landingpage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
let navigate = useNavigate();

  const logOut = async()=>{
    
      try {
        let response = await axios.get('https://upskilling-egypt.com:3007/api/auth/logout',
          { 
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
          }
          
        );
  localStorage.removeItem('userToken');
       navigate('/Login');
      console.log(response);
      toast.success(response.data.message);
      } 
      catch (error:any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  }
  return (
    <>
      <div  className='container-fluid'>
        <div className={`${styles.topHeader} row`}>
        <Navbar className="">
      <Container>
      <i className="fa-solid fa-phone"> +91 8374902234</i>
        
        <Navbar id="responsive-navbar-nav">
          
          <Nav className='socialIcons'>
            <Nav.Link>
            <i className="fa-brands fa-facebook-f"></i>
            </Nav.Link>
            <Nav.Link>
            <i className="fa-brands fa-instagram"></i>
            </Nav.Link>
            <Nav.Link>
            <i className="fa-brands fa-linkedin-in"></i>
            </Nav.Link>
            <Nav.Link>
            <i className="fa-brands fa-twitter"></i>
            </Nav.Link>
            <Nav.Link>
            <i className="fa-brands fa-blogger-b"></i>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
        </div>

        
<div className={`${styles.mainHeader} row`}>
<Navbar  expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand href="#home"><div className={`${styles.profileImg}`}></div></Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className={`ms-auto me-auto ${styles.headLinks}`}>
            <Nav.Link className={`${styles.navLink}`}>HOME</Nav.Link><h3> | </h3>
            <Nav.Link> ABOUT US</Nav.Link><h3> | </h3>
            <Nav.Link> BOOKS</Nav.Link><h3> | </h3>
            <Nav.Link> NEW RELEASE</Nav.Link><h3> | </h3>
            <Nav.Link> CONTACT US</Nav.Link><h3> | </h3>
            <Nav.Link> BLOG</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title={<i className="fa-regular fa-user"></i>} id="collapsible-nav-dropdown">
              <NavDropdown.Item>
              <Link onClick={handleShow} to={''}>Change Password</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link onClick={logOut} to={''}>LogOut</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
            <i className="fa-solid fa-bag-shopping"></i>
            </Nav.Link>
            <Nav.Link>
            <i className="fa-regular fa-heart"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
      </div>
      <Modal size= 'xl' show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        <ChangePass handleClose={handleClose} />
        
      </Modal>


      <Slider />
      <NewReleaseBooks/>
      </>
  )
}
