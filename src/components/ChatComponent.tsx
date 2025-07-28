import { type ReactElement, useState } from 'react'
import styled from 'styled-components'

const ChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 20px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
`

const ChatBox = styled.div`
  max-width: 768px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 16px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`

const ChatInput = styled.textarea`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #00ffff;
  font-size: 16px;
  font-family: inherit;
  resize: none;
  min-height: 24px;
  max-height: 120px;
  line-height: 1.5;
  padding: 12px 16px;
  border-radius: 20px;
  text-shadow: 0 0 5px #00ffff;
  letter-spacing: 0.5px;
  
  &::placeholder {
    color: rgba(0, 255, 255, 0.6);
    text-shadow: 0 0 3px rgba(0, 255, 255, 0.6);
  }
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 255, 255, 0.3);
    border-radius: 2px;
  }
`

const SendButton = styled.button`
  background: linear-gradient(135deg, #00ffff 0%, #0080ff 100%);
  border: none;
  border-radius: 20px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 18px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
  text-shadow: 0 0 5px white;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.6);
    background: linear-gradient(135deg, #00ffff 0%, #00aaff 100%);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.2);
  }
`

const MessageContainer = styled.div`
  max-width: 768px;
  margin: 0 auto 20px;
  padding: 0 20px;
`

const Message = styled.div<{ $isUser: boolean }>`
  background: ${props => props.$isUser 
    ? 'linear-gradient(135deg, #00ffff 0%, #0080ff 100%)'
    : 'rgba(0, 0, 0, 0.4)'
  };
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${props => props.$isUser 
    ? 'rgba(0, 255, 255, 0.5)' 
    : 'rgba(0, 255, 255, 0.2)'
  };
  border-radius: 20px;
  padding: 16px 20px;
  margin-bottom: 12px;
  color: white;
  font-size: 14px;
  line-height: 1.5;
  max-width: ${props => props.$isUser ? '80%' : '90%'};
  margin-left: ${props => props.$isUser ? 'auto' : '0'};
  box-shadow: ${props => props.$isUser 
    ? '0 0 20px rgba(0, 255, 255, 0.4)' 
    : '0 4px 12px rgba(0, 0, 0, 0.2)'
  };
  text-shadow: ${props => props.$isUser 
    ? '0 0 5px white' 
    : '0 0 3px rgba(0, 255, 255, 0.8)'
  };
  letter-spacing: 0.3px;
`

interface ChatMessage {
  text: string
  isUser: boolean
}

function ChatComponent(): ReactElement {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "Hello! I'm here to help you explore the brain. What would you like to know?", isUser: false }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return

    const userMessage = message.trim()
    setMessages(prev => [...prev, { text: userMessage, isUser: true }])
    setMessage('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "The brain is fascinating! Each region has specific functions that work together to create our thoughts, memories, and behaviors.",
        "Did you know the brain contains about 86 billion neurons? That's more connections than stars in our galaxy!",
        "The brain's surface is covered in folds called sulci and gyri, which increase its surface area for more processing power.",
        "The brain is incredibly plastic - it can rewire itself throughout our lives, especially when we learn new things.",
        "The brain uses about 20% of our body's energy despite being only 2% of our body weight!"
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      <MessageContainer>
        {messages.map((msg, index) => (
          <Message key={index} $isUser={msg.isUser}>
            {msg.text}
          </Message>
        ))}
        {isLoading && (
          <Message $isUser={false}>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white', animation: 'bounce 1.4s infinite ease-in-out' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white', animation: 'bounce 1.4s infinite ease-in-out', animationDelay: '0.2s' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white', animation: 'bounce 1.4s infinite ease-in-out', animationDelay: '0.4s' }}></div>
            </div>
          </Message>
        )}
      </MessageContainer>
      
      <ChatContainer>
        <ChatBox>
          <ChatInput
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about the brain..."
            rows={1}
          />
          <SendButton 
            onClick={handleSendMessage}
            disabled={!message.trim() || isLoading}
          >
            ➤
          </SendButton>
        </ChatBox>
      </ChatContainer>
      
      <style>
        {`
          @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
          }
        `}
      </style>
    </>
  )
}

export default ChatComponent