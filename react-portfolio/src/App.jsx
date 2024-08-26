import styles from  './App.module.css'
import { Hero } from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import {About} from './Components/About/About'
import { Expertise } from './Components/Expertise/Expertise'
import {Projects} from './Components/Projects/Projects'
import { Contact } from './Components/Contact/Contact'

function App() {
  

  return (
    <>
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Expertise/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
