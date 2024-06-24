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
import './LandingPage.module.css'
import Slider from '../../../SharedModules/components/Slider/Slider';
import FeaturedBook from '../../../SharedModules/components/FeaturedBook/FeaturedBook';
import AllBooks from '../../../SharedModules/components/AllBooks/AllBooks';
import Categories from '../../../SharedModules/components/Categories/Categories';
import Card from 'react-bootstrap/Card';
import img1 from '../../../../assets/imgs/2.png';
import img2 from '../../../../assets/imgs/book.png';
import img3 from '../../../../assets/imgs/3.png';
import img4 from '../../../../assets/imgs/4.png';
import article1 from '../../../../assets/imgs/Rectangle 38.png';
import article2 from '../../../../assets/imgs/Rectangle 44.png';
import article3 from '../../../../assets/imgs/Rectangle 45.png';
import logoImg from '../../../../assets/imgs/sample logo 1.png'

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
      <Categories/>


<div className='someQualityItems'>
          <div className='row'>
            <span>
            
              SOME QUALITY ITEMS
                
            </span>
            <h1>
            <svg width="30%" height="5">  
                  <path d="M 5 2.5 L 445 2.5" stroke="#E0E0E0" stroke-width="1" fill="none" />
                </svg>
              New Release Books
              <svg width="30%" height="5">  
                  <path d="M 5 2.5 L 445 2.5" stroke="#E0E0E0" stroke-width="1" fill="none" />
                </svg>
              </h1>

            <div className='col-md-3'>
                <Card className='cards'>
                  <Card.Img variant="top" src={img1} />
                  <Card.Body>
                    <Card.Title><h4>Simple way of piece life</h4></Card.Title>
                    <Card.Text>
                         <p>Armor Ramsey</p>
                    </Card.Text>
                    <span>$ 40.00</span>
                  </Card.Body>
                </Card>
            </div>
            <div className='col-md-3'>
                <Card className='cards'>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title><h4>Great travel at desert</h4></Card.Title>
                    <Card.Text>
                         <p>Sanchit Howdy</p>
                    </Card.Text>
                    <span>$ 38.00</span>
                  </Card.Body>
                </Card>
            </div>
            <div className='col-md-3'>
                <Card className='cards'>
                  <Card.Img variant="top" src={img3} />
                  <Card.Body>
                    <Card.Title><h4>Simple way of piece life</h4></Card.Title>
                    <Card.Text>
                         <p>Armor Ramsey</p>
                    </Card.Text>
                    <span>$ 45.00</span>
                  </Card.Body>
                </Card>
            </div>
            <div className='col-md-3'>
                <Card className='cards'>
                  <Card.Img variant="top" src={img4} />
                  <Card.Body>
                    <Card.Title><h4>Simple way of piece life</h4></Card.Title>
                    <Card.Text>
                         <p>Armor Ramsey</p>
                    </Card.Text>
                    <span>$ 35.00</span>
                  </Card.Body>
                </Card>
            </div>
          </div>
</div>




      <FeaturedBook />
      <AllBooks />

<div className='subscribe'>
  <div className='subscribeDetails'>
  <h1>Subscibe to Our Newsletter</h1>
      <p>Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, 
        consectetur. Elit adipiscing enim pharetra hac.</p>
  </div>
  <div className='subscribeData'>
  <i className="fa-regular fa-envelope"></i>
  <span>youremail1223@gmail.com</span>
  <button className='btn btn-orange'>Subscribe</button>

  </div>
</div>



<div className='container-fluid latestArticles'>
  <div className='row'>
      <div className='col-md-12 text-center'>
      <span>
      READ OUR ARTICLES        
      </span>
          <h1>
          <svg width="30%" height="5">  
                <path d="M 5 2.5 L 445 2.5" stroke="#E0E0E0" stroke-width="1" fill="none" />
              </svg>
              Latest Articles
            <svg width="30%" height="5">  
                <path d="M 5 2.5 L 445 2.5" stroke="#E0E0E0" stroke-width="1" fill="none" />
              </svg>
            </h1>

      </div>
  </div>
  <div className='row latestArticlesCards'>
      <div className='col-md-4'>
      <Card className='cards bg-transparent'>
                  <Card.Img variant="top" src={article1} />
                  <Card.Body>
                  <span>2 aug, 2021</span>
                    <Card.Title><h5>Reading books always makes the moments happy</h5></Card.Title>
                    <Card.Footer>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    </Card.Footer>
                  
                  </Card.Body>
        </Card>
      </div>
      <div className='col-md-4'>
      <Card className='cards bg-transparent'>
                  <Card.Img variant="top" src={article2} />
                  <Card.Body>
                  <span>2 aug, 2021</span>
                    <Card.Title><h5>Reading books always makes the moments happy</h5></Card.Title>
                    <Card.Footer>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    </Card.Footer>
                  
                  </Card.Body>
        </Card>
      </div>
      <div className='col-md-4'>
      <Card className='cards bg-transparent'>
                  <Card.Img variant="top" src={article3} />
                  <Card.Body>
                  <span>2 aug, 2021</span>
                    <Card.Title><h5>Reading books always makes the moments happy</h5></Card.Title>
                    <Card.Footer>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    </Card.Footer>
                  
                  </Card.Body>
        </Card>
      </div>
  </div>
  <button className='btn btn-outline-primary pt-1 pb-1 pe-5 ps-5 mt-5 text-center'>read all articles</button>
</div>


<div className='container-fluid footerSection'>
          <div className='row '>
            <div className='col-md-4 footerSection1'>
                <img src={logoImg}/>
                <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <ul>
                   <li><i className="fa-brands fa-facebook-f"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-youtube"></i></li>
                </ul>
                <span>© 2022 Arihant. All Rights Reserved</span>
            </div>
            <div className='col-md-4 footerSection2'>
              <h4>Company</h4>
              <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>BOOKS</li>
                <li>NEW RELEASE</li>
                <li>CONTACT US</li>
                <li>BLOG</li>
              </ul>
            </div>
            <div className='col-md-4 footerSection3'>
              <h4>Importent Links</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>FAQs</li>
                <li>Terms of Service</li>
              </ul>
              <span>
Privacy | Terms of Service</span>
            </div>
          </div>
</div>


      </>
  )
}
