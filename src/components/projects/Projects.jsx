import { FaLink } from "react-icons/fa6";
import DATA from "../../constant/mockData";
import Title from "../common/Title";

const Projects = () => {
  return (
    <div className="experience-sc resume-block">
      <div className="container">
        <div className="experience-content dotted-border-left">
          <Title titleText={"Projects"} />
          <div className="experience-list grid">
            {DATA.projects.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const ExperienceItem = ({ item }) => {
    return (
      <div className="experience-item" key={item.id}>
        <div className="exp-time flex items-center">
          <span className="start-time">{item.startDate}</span>
        </div>
        <div className="exp-position flex items-center flex-wrap">
          <p className="exp-position-text">{item.name}</p>
        </div>
        <span>Tech Stack: <i>{item.tech}</i> {item.logos?.map((logo) => (<img style={{ display:'inline', width: '32px', height: '32px', padding:'6px'}} key={logo} src={logo} alt={logo}></img>))}</span>        
        <div className="exp-company flex items-center flex-wrap">
        </div>
        <p className="exp-description text">{item.description}</p>
        <div className="exp-links">
          {item.links?.map((link) => (
            <a key={link.name} href={link.url} className="text-mauve">
              <FaLink />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    );
  };
  