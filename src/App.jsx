import RideSharingApp from './components/RideSharingApp'
import { ThemeProviderWrapper } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <ThemeProviderWrapper>
      <AuthProvider>
        <div className="App">
          <RideSharingApp />
        </div>
      </AuthProvider>
    </ThemeProviderWrapper>
  )
}

export default App

