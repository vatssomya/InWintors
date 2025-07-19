import { type ReactElement } from 'react'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'

const ToggleButton = styled.button`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text.primary};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: 0.9rem;
  transition: all 0.2s ease;
  min-width: 80px;
  justify-content: center;

  &:hover {
    background: ${props => props.theme.colors.hover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

const Icon = styled.span`
  font-size: 1.1rem;
  line-height: 1;
`

function ThemeToggle(): ReactElement {
  const { theme, themeMode, toggleTheme } = useTheme()

  return (
    <ToggleButton theme={theme} onClick={toggleTheme}>
      <Icon>
        {themeMode === 'light' ? '🌙' : '☀️'}
      </Icon>
      {themeMode === 'light' ? 'Dark' : 'Light'}
    </ToggleButton>
  )
}

export default ThemeToggle 