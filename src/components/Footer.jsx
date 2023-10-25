import '../styles/footer.css'
import { VscGithub } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
//import { BsLinkedin } from "react-icons/bs";<BsLinkedin/>

function Footer() {
 return <footer className ="footer">
<ul className='Footer1'>
<li><a href="mailto:sdrowan93@gmail.com"><MdEmail/>Sdrowan93@gmail.com</a></li>

<li > <a href="https://github.com/SeanDRowan"> <VscGithub />Git Hub</a></li>
<li ><p>Phone number: 210-392-2118</p></li>
</ul>
</footer>
  }
  
  export default Footer;