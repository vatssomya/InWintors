import { type ReactElement } from 'react'
import styled from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useTheme } from '../../contexts/ThemeContext'

const DashboardContainer = styled.div`
  padding: 1rem;
`

const DashboardHeader = styled.header`
  margin-bottom: 2rem;
`

const DashboardTitle = styled.h1`
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`

const StatCard = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid ${props => props.theme.colors.border};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`

const StatTitle = styled.h3`
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`

const StatValue = styled.p`
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.5rem;
  font-weight: bold;
`

const DashboardContent = styled.section`
  margin-top: 2rem;
`

const ActivityFeed = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.colors.border};
`

const ActivityTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ActivityItem = styled.div`
  padding: 1rem;
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.sm};
  border: 1px solid ${props => props.theme.colors.border};
`

const ActivityTime = styled.span`
  display: block;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 0.5rem;
`

const ActivityText = styled.p`
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`

function DashboardPage(): ReactElement {
  const { width, height } = useWindowSize()
  const { theme } = useTheme()
  
  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle theme={theme}>Dashboard</DashboardTitle>
        <StatsGrid>
          <StatCard theme={theme}>
            <StatTitle theme={theme}>Viewport Size</StatTitle>
            <StatValue theme={theme}>{width}px × {height}px</StatValue>
          </StatCard>
          <StatCard theme={theme}>
            <StatTitle theme={theme}>Active Users</StatTitle>
            <StatValue theme={theme}>1,234</StatValue>
          </StatCard>
          <StatCard theme={theme}>
            <StatTitle theme={theme}>Total Projects</StatTitle>
            <StatValue theme={theme}>42</StatValue>
          </StatCard>
        </StatsGrid>
      </DashboardHeader>
      <DashboardContent>
        <ActivityFeed theme={theme}>
          <ActivityTitle theme={theme}>Recent Activity</ActivityTitle>
          <ActivityList>
            <ActivityItem theme={theme}>
              <ActivityTime theme={theme}>2 hours ago</ActivityTime>
              <ActivityText theme={theme}>New feature added: Dashboard analytics</ActivityText>
            </ActivityItem>
            <ActivityItem theme={theme}>
              <ActivityTime theme={theme}>5 hours ago</ActivityTime>
              <ActivityText theme={theme}>Updated React components</ActivityText>
            </ActivityItem>
            <ActivityItem theme={theme}>
              <ActivityTime theme={theme}>1 day ago</ActivityTime>
              <ActivityText theme={theme}>Integrated Vue.js components</ActivityText>
            </ActivityItem>
          </ActivityList>
        </ActivityFeed>
      </DashboardContent>
    </DashboardContainer>
  )
}

export default DashboardPage
