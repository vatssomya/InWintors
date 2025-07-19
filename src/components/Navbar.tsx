import { type ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

const NavContainer = styled.nav`
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.sm};
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`

const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const BrandLink = styled(Link)`
  color: ${props => props.theme.colors.text.primary};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.primary};
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
  color: ${props => props.$isActive ? props.theme.colors.primary : props.theme.colors.text.primary};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius.sm};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.primary};
  }

  ${props => props.$isActive && `
    background-color: ${props.theme.colors.surface};
    font-weight: 500;
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
    <NavContainer theme={theme}>
      <NavContent>
        <NavBrand>
          <BrandLink to="/" theme={theme}>InWintors</BrandLink>
        </NavBrand>
        <NavMenu>
          <NavLink to="/" $isActive={location.pathname === '/'} theme={theme}>
            Home
          </NavLink>
          <NavLink to="/dashboard" $isActive={location.pathname === '/dashboard'} theme={theme}>
            Dashboard
          </NavLink>
          <NavLink to="/about" $isActive={location.pathname === '/about'} theme={theme}>
            About
          </NavLink>
          <NavLink to="/contact" $isActive={location.pathname === '/contact'} theme={theme}>
            Contact
          </NavLink>
          <ThemeToggle />
        </NavMenu>
      </NavContent>
    </NavContainer>
  )
}

export default Navbar
