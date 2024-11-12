"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
import Dropdown from "@/components/common/navigation/desktop-nav/Dropdown";
import DropdownItem from "@/components/common/navigation/desktop-nav/DropdownItem";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header3 bg-light3" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="/">Inicio</NavItem>
							<NavItem dropdown title="beneficios">
								<Dropdown>
									<DropdownItem url="parnerts">Convenios</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem dropdown title="Institucional">
								<Dropdown>
									<DropdownItem url="team">Equipo y Reseña</DropdownItem>
									<DropdownItem url="contact">Contacto</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem url="requiriments">Requisitos</NavItem>
						
							<NavItem url="join-us">
								Afiliarse- <span className="arrow"> &gt; </span>
							</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="Aximo" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
