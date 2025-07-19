import { type ReactElement, useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../contexts/ThemeContext'

interface FormData {
  name: string
  email: string
  message: string
}

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`

const ContactTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`

const ContactFormContainer = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.colors.border};
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FormLabel = styled.label`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  font-weight: 500;
`

const FormInput = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.sm};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`

const FormTextarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.sm};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: 500;

  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.secondary};
  }

  &:disabled {
    background: #4a4a4a;
    cursor: not-allowed;
  }
`

const SuccessMessage = styled.p`
  color: #4caf50;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
`

const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.text.error};
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
`

function ContactPage(): ReactElement {
  const { theme } = useTheme()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <ContactContainer>
      <ContactTitle theme={theme}>Contact Us</ContactTitle>
      <ContactFormContainer theme={theme}>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel theme={theme} htmlFor="name">Name</FormLabel>
            <FormInput
              theme={theme}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel theme={theme} htmlFor="email">Email</FormLabel>
            <FormInput
              theme={theme}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel theme={theme} htmlFor="message">Message</FormLabel>
            <FormTextarea
              theme={theme}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </FormGroup>
          <SubmitButton 
            theme={theme}
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          {submitStatus === 'success' && (
            <SuccessMessage>Message sent successfully!</SuccessMessage>
          )}
          {submitStatus === 'error' && (
            <ErrorMessage theme={theme}>Failed to send message. Please try again.</ErrorMessage>
          )}
        </ContactForm>
      </ContactFormContainer>
    </ContactContainer>
  )
}

export default ContactPage
