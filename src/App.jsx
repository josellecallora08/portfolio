import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path={'/'} Component={Home}/>
        </Routes>
     </Router>
     <SpeedInsights/>
    </>
  )
}

export default App
