import { type ReactElement } from 'react'
import { useWindowSize } from '@hooks/useWindowSize'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'

interface WelcomeProps {
  title?: string
  subtitle?: string
}

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Info = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 2rem;
`

const Features = styled.div`
  text-align: left;
  background: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: ${props => props.theme.shadows.sm};

  h3 {
    color: ${props => props.theme.colors.text.primary};
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 0.5rem 0;
    color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;

    &:before {
      content: '✓';
      color: #27ae60;
      margin-right: 0.5rem;
      font-weight: bold;
    }
  }
`

function Welcome({ 
  title = 'Welcome to InWintors', 
  subtitle = 'A Modern React TypeScript Application' 
}: WelcomeProps): ReactElement {
  const { width } = useWindowSize()
  const { theme } = useTheme()
  
  return (
    <Container>
      <Title theme={theme}>{title}</Title>
      <Subtitle theme={theme}>{subtitle}</Subtitle>
      <Info theme={theme}>
        Your screen width is: {width}px
      </Info>
      <Features theme={theme}>
        <h3>Features:</h3>
        <ul>
          <li>React 18+</li>
          <li>TypeScript</li>
          <li>Vite</li>
          <li>React Router</li>
          <li>Responsive Design</li>
        </ul>
      </Features>
    </Container>
  )
}

export default Welcome
