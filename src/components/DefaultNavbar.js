import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Icon from '@material-tailwind/react/Icon';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);
    //toggle show nav dropdown
    const toggle = () => {
        setOpenNavbar(!openNavbar)
    }

    return (
        <Navbar color="transparent" navbar className="lg:sticky  sm:static">
            <NavbarContainer>
                <NavbarWrapper>
                    <Link
                        to="/"
                    >
                        <NavbarBrand>Thirapaht-DEV<Icon family="font-awesome" name="fas fa-code" /></NavbarBrand>
                    </Link>
                    <NavbarToggler
                        onClick={toggle}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center" >
                            <div className="lg:text-white md:text-yellow-400  sm:text-green-400 text-white">
                           
                                    <Link to="/profile">
                                          <Icon family="font-awesome" name="fa fa-user" color="green"/> Profile
                                    </Link>
                              
                            </div>
                            <NavLink
                                href="https://github.com/Thiraphat-DEV"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                                className="lg:text-white "
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fab fa-github"
                                    color="green"
                                    size="xl"
                                />
                                &nbsp;Github
                            </NavLink>
                            
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
