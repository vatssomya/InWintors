import { Component, type ErrorInfo, type ReactNode } from 'react'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  background: ${props => props.theme.colors.background};
`

const ErrorTitle = styled.h1`
  color: ${props => props.theme.colors.text.error};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 1.5rem;
`

const ErrorDetails = styled.pre`
  background-color: ${props => props.theme.colors.surface};
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius.sm};
  color: ${props => props.theme.colors.text.primary};
  margin: 1rem 0;
  text-align: left;
  overflow-x: auto;
  max-width: 100%;
  border: 1px solid ${props => props.theme.colors.border};
`

const RetryButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.sm};
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: 500;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />
    }

    return this.props.children
  }
}

function ErrorFallback({ error }: { error?: Error }) {
  const { theme } = useTheme()
  
  return (
    <ErrorContainer theme={theme}>
      <ErrorTitle theme={theme}>Something went wrong</ErrorTitle>
      <ErrorMessage theme={theme}>We're sorry - something has gone wrong.</ErrorMessage>
      {error && (
        <ErrorDetails theme={theme}>{error.message}</ErrorDetails>
      )}
      <RetryButton
        theme={theme}
        onClick={() => {
          window.location.reload()
        }}
      >
        Try again
      </RetryButton>
    </ErrorContainer>
  )
}

export default ErrorBoundary
