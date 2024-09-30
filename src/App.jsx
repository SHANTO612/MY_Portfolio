
import About from './Components/About'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Home from './Components/Home'
import { Nabvar } from './Components/Nabvar'
import Projects from './Components/Projects/Projects'
import TextChange from './Components/TextChange'

function App() {

  return (
 <div
 className="bg-slate-900 h-auto w-full overflow-hidden ">
  <Nabvar/>
  <Home/>
  <About/>
  <Experience/>
  <Projects/>
  <Footer/>
  <TextChange/>
 </div>

  )
}

export default App
