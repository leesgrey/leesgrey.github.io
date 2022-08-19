import React from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import email from '../../assets/email.png';
import resume from '../../assets/resume.png';

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="contact" ref={ref} className="content fades">
      <div className="pagecontent">
        <div className="links">
          <div className="pair">
            <a href="https://github.com/leesgrey" target="_blank"><img src={github}/></a>
            <p>GitHub</p>
          </div>
          <div className="pair">
            <a href="https://linkedin.com/in/leesgrey" target="_blank"><img src={linkedin}/></a>
            <p>LinkedIn</p>
          </div>
          <div className="pair">
            <a href="mailto:sieungrey.lee@mail.utoronto.ca" target="_blank"><img src={email}/></a>
            <p>Email</p>
          </div>
          <div className="pair">
            <a href="./assets/GreyLee_Resume.pdf" target="_blank"><img src={resume}/></a>
            <p>Resume</p>
          </div>
        </div>
        <div id="cutecontainer">
          <p id="cute">Let's make something together!</p>
        </div>
      </div>
    </div>
  );
})

export default Contact;