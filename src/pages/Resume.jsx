import '../styles/body.css'

export default function Resume() {
    return (
      <div>
        <h1>Sean Rowan Resume</h1>
        <img className='resImg' src="assets\resume1.png" alt="resume 1"/>
      <img className='resImg' src="assets\resume2.png" alt="resume 2"/> 
      <div id = 'profs'><ul>My Proficiencies  <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>Mongo DB</li>
              <li>SQL</li>
              <li>GIT</li></ul></div>
    
       <a  id='ba' href="https://drive.google.com/file/d/1HfN0Ok-7VbUK3thKDRNXwmUgh-44ob7-/view?usp=sharing">Download PDF</a>
      
      </div>
    );
  }