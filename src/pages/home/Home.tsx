import { type ReactElement } from 'react'
import styled from 'styled-components'
import Welcome from '@components/Welcome'
import ThemeDemo from '@components/ThemeDemo'
import { useTheme } from '../../contexts/ThemeContext'

const HomeContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`

const Content = styled.div`
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: 2rem;
  }
`

function HomePage(): ReactElement {
  const { theme } = useTheme()
  
  return (
    <HomeContainer>
      <LogoContainer>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <Logo src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <Logo src="/react.svg" className="react" alt="React logo" />
        </a>
      </LogoContainer>
      <Content theme={theme}>
        <Welcome />
        <ThemeDemo />
      </Content>
    </HomeContainer>
  )
}

export default HomePage
