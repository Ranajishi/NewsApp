import React, { useState } from 'react'
import "./Navbarr.css"
import { Button, Col, Container, Form, InputGroup, Nav, Navbar, Row } from 'react-bootstrap'
import Images from '../../Constant/Images'
import { GrFormSearch } from "react-icons/gr";


const Navbarr = () => {
  const [nav_item, setnav_item] = useState(0)
  return (
    <Navbar expand="lg" className="navbarrr">
    <Container className='containerr'>
      <Navbar.Brand href="#home">
        <img src={Images.logo} alt="" className='logo_img'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto navbar_left" >
          <div className='serch'>
            <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2 search_in"
            />
            <GrFormSearch className='ser_icon'/>
          </div>
          <Nav.Link href="" className='side' onClick={()=>{setnav_item(1)}}>
              {nav_item===1? <img src={Images.fire_black} alt="" className='nav_img' />: <img src={Images.hotdeal} alt="" className='nav_img' />}
              <div className='nav_text'>Trending</div>
          </Nav.Link>
          <Nav.Link href="" className='side'onClick={()=>{setnav_item(2)}}>
          {nav_item===2?<img src={Images.save_black} alt="" className='nav_img'/>: <img src={Images.saveinstagram} alt="" className='nav_img' />}
              <div className='nav_text'>Save</div>
          </Nav.Link>
          <Nav.Link href="" className='side' onClick={()=>{setnav_item(3)}}>
              {nav_item===3?<img src={Images.profile} alt="" className='nav_img'/>: <img src={Images.profile1} alt="" className='nav_img' />}
              <div className='nav_text'>Profile</div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr
