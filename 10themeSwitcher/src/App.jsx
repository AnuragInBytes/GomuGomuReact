import { ThemeProvider } from './context/Theme'
import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [defaultTheme, setDefaultTheme] = useState("light")

  const darkTheme = () => {
    setDefaultTheme("dark")
  }
  const lightTheme = () => {
    setDefaultTheme("light")
  }

  //actual theme toggling 

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(defaultTheme)
  }, [defaultTheme])

  return (
    <ThemeProvider value={{defaultTheme, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
