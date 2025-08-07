import RideSharingApp from './components/RideSharingApp'
import { ThemeProviderWrapper } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProviderWrapper>
      <div className="App">
        <RideSharingApp />
      </div>
    </ThemeProviderWrapper>
  )
}

export default App

