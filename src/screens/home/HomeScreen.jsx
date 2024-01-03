import BackgroundEffect from "../../components/background_effect/BackgroundEffect"
import Cursor from "../../components/cursor/Cursor"
import Education from "../../components/education/Education"
import Experience from "../../components/experience/Experience"
import Header from "../../components/header/Header"
import Projects from "../../components/projects/Projects"
import Skill from "../../components/skill/Skill"

const HomeScreen = () => {
  return (
    <div className="page-container">
        <Header />
        <Skill />
        <Experience />
        <Education />
        <Projects/>
       
        <Cursor />
        <BackgroundEffect />
    </div>
  )
}

export default HomeScreen
