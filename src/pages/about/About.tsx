import { type ReactElement } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../contexts/ThemeContext'

const AboutContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`

const AboutTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.text.primary};
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const AboutSection = styled.section`
  background: ${props => props.theme.colors.surface};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  transition: transform 0.2s;
  border: 1px solid ${props => props.theme.colors.border};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`

const SectionList = styled.ul`
  list-style: none;
  padding: 0;
`

const SectionItem = styled.li`
  margin: 0.5rem 0;
  color: ${props => props.theme.colors.text.secondary};
  padding: 0.25rem 0;
`

function AboutPage(): ReactElement {
  const { theme } = useTheme()
  
  return (
    <AboutContainer>
      <AboutTitle theme={theme}>About InWintors</AboutTitle>
      <AboutContent>
        <AboutSection theme={theme}>
          <SectionTitle theme={theme}>Our Tech Stack</SectionTitle>
          <SectionList>
            <SectionItem theme={theme}>React for UI components</SectionItem>
            <SectionItem theme={theme}>Vue for reusable widgets</SectionItem>
            <SectionItem theme={theme}>TypeScript for type safety</SectionItem>
            <SectionItem theme={theme}>Vite for fast development</SectionItem>
          </SectionList>
        </AboutSection>
        <AboutSection theme={theme}>
          <SectionTitle theme={theme}>Features</SectionTitle>
          <SectionList>
            <SectionItem theme={theme}>Modern React with TypeScript</SectionItem>
            <SectionItem theme={theme}>Vue 3 Integration</SectionItem>
            <SectionItem theme={theme}>Custom Hooks</SectionItem>
            <SectionItem theme={theme}>Responsive Design</SectionItem>
          </SectionList>
        </AboutSection>
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutPage
