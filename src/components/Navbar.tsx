import { type ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

const NavContainer = styled.nav`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`

const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const BrandLink = styled(Link)`
  color: #00ffff;
  text-decoration: none;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
  font-weight: 700;
  letter-spacing: 1px;
  
  &:hover {
    color: #ffffff;
    text-shadow: 0 0 15px #ffffff, 0 0 25px #ffffff, 0 0 35px #ffffff;
  }
`

const NavMenu = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: auto;
  }
`

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${props => props.$isActive ? '#00ffff' : 'rgba(255, 255, 255, 0.7)'};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: ${props => props.$isActive ? '600' : '400'};
  text-shadow: ${props => props.$isActive 
    ? '0 0 10px #00ffff, 0 0 20px #00ffff' 
    : 'none'
  };
  letter-spacing: 0.5px;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    color: #00ffff;
    transform: translateY(-1px);
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  }

  ${props => props.$isActive && `
    background: rgba(0, 255, 255, 0.15);
    font-weight: 600;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  `}
`

const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

function Navbar(): ReactElement {
  const location = useLocation()
  const { theme } = useTheme()

  return (
    <NavContainer>
      <NavContent>
        <NavBrand>
          <BrandLink to="/">InWintors</BrandLink>
        </NavBrand>
        <NavMenu>
          <NavLink to="/" $isActive={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink to="/dashboard" $isActive={location.pathname === '/dashboard'}>
            Dashboard
          </NavLink>
          <NavLink to="/about" $isActive={location.pathname === '/about'}>
            About
          </NavLink>
          <NavLink to="/contact" $isActive={location.pathname === '/contact'}>
            Contact
          </NavLink>
          <ThemeToggle />
        </NavMenu>
      </NavContent>
    </NavContainer>
  )
}

export default Navbar
