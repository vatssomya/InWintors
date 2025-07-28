import { type ReactElement } from 'react'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'

const ToggleButton = styled.button`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #00ffff;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 0 5px #00ffff;
  letter-spacing: 0.5px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    border-color: rgba(0, 255, 255, 0.5);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

const Icon = styled.span`
  margin-right: 0.5rem;
  font-size: 16px;
  text-shadow: 0 0 8px currentColor;
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