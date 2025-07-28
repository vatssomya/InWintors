import { type ReactElement } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'
import Navbar from '../components/Navbar'

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
`

const MainContent = styled.main<{ $isHome: boolean }>`
  flex: 1;
  width: 100%;
  max-width: ${props => props.$isHome ? '100%' : '1280px'};
  margin: ${props => props.$isHome ? '0' : '0 auto'};
  padding: ${props => props.$isHome ? '0' : '2rem'};
`

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background-color: ${props => props.theme.colors.surface};
  margin-top: auto;
  border-top: 1px solid ${props => props.theme.colors.border};

  p {
    color: ${props => props.theme.colors.text.secondary};
  }
`

function MainLayout(): ReactElement {
  const { theme } = useTheme()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <LayoutContainer theme={theme}>
      <Navbar />
      <MainContent $isHome={isHome}>
        <Outlet />
      </MainContent>
      {!isHome && (
        <Footer theme={theme}>
          <p>© 2025 InWintors. Built with React</p>
        </Footer>
      )}
    </LayoutContainer>
  )
}

export default MainLayout
