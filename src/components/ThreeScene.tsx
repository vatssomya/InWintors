import { type ReactElement, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ChatComponent from './ChatComponent'

// Type declaration for spline-viewer element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url: string
        'auto-rotate'?: string
        'auto-rotate-speed'?: string
      }
    }
  }
}

const SplineViewer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
  
  spline-viewer {
    width: 100%;
    height: 100%;
  }
`

function ThreeScene(): ReactElement {
  const splineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Prevent scrolling on the body
    document.body.style.overflow = 'hidden'
    
    // Load Spline viewer script
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.38/build/spline-viewer.js'
    document.head.appendChild(script)

    // Create spline-viewer element after script loads
    script.onload = () => {
      if (splineRef.current) {
        const splineViewer = document.createElement('spline-viewer')
        splineViewer.setAttribute('url', 'https://prod.spline.design/kHYtzxsJOmRJhaiu/scene.splinecode')
        splineViewer.setAttribute('auto-rotate', 'true')
        splineViewer.setAttribute('auto-rotate-speed', '1')
        splineViewer.style.width = '100%'
        splineViewer.style.height = '100%'
        
        splineRef.current.appendChild(splineViewer)
      }
    }

    return () => {
      // Restore scrolling when component unmounts
      document.body.style.overflow = 'auto'
      
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="spline-viewer.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <>
      <SplineViewer ref={splineRef} />
      <ChatComponent />
    </>
  )
}

export default ThreeScene 