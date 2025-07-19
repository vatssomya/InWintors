import { type ReactElement } from 'react'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'

const DemoContainer = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.lg} 0;
`

const DemoTitle = styled.h3`
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.md};
`

const DemoText = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.spacing.sm};
`

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.md};
`

const ColorSwatch = styled.div<{ $color: string; $label: string }>`
  background-color: ${props => props.$color};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.sm};
  padding: ${props => props.theme.spacing.md};
  text-align: center;
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.8rem;
  font-weight: 500;

  &::before {
    content: '${props => props.$label}';
    display: block;
    font-size: 0.7rem;
    margin-bottom: ${props => props.theme.spacing.xs};
    color: ${props => props.theme.colors.text.secondary};
  }
`

function ThemeDemo(): ReactElement {
  const { theme, themeMode } = useTheme()

  return (
    <DemoContainer theme={theme}>
      <DemoTitle theme={theme}>Theme Demo - {themeMode} mode</DemoTitle>
      <DemoText theme={theme}>
        This component demonstrates the current theme colors and styling.
        Switch between light and dark themes using the toggle in the navbar.
      </DemoText>
      
      <ColorGrid theme={theme}>
        <ColorSwatch 
          theme={theme} 
          $color={theme.colors.primary} 
          $label="Primary"
        >
          Primary
        </ColorSwatch>
        <ColorSwatch 
          theme={theme} 
          $color={theme.colors.secondary} 
          $label="Secondary"
        >
          Secondary
        </ColorSwatch>
        <ColorSwatch 
          theme={theme} 
          $color={theme.colors.background} 
          $label="Background"
        >
          Background
        </ColorSwatch>
        <ColorSwatch 
          theme={theme} 
          $color={theme.colors.surface} 
          $label="Surface"
        >
          Surface
        </ColorSwatch>
        <ColorSwatch 
          theme={theme} 
          $color={theme.colors.text.primary} 
          $label="Text Primary"
        >
          Text Primary
        </ColorSwatch>
        <ColorSwatch 
          theme={theme} 
          $color={theme.colors.text.secondary} 
          $label="Text Secondary"
        >
          Text Secondary
        </ColorSwatch>
      </ColorGrid>
    </DemoContainer>
  )
}

export default ThemeDemo 