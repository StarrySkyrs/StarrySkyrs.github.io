import React from 'react';
import './style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWeixin } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

toast.configure();

function Contact() {
  function copyToClipboard(e) {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText('StarrySkyie');
      toast.success('Wechat ID copied to clipboard', { icon: <FontAwesomeIcon icon={faWeixin} size="1x" /> });
    }
  }

  return (
    <div className="getintouch" id="contact">
      <div className="section">
        <h1>Let's create awesome things together!</h1>
        <div className="line"></div>
        <p>Feel free to reach out to me on social media.</p>
        <div className="info">
          <ul>
            <li><a href="https://www.linkedin.com/in/sijia-han-6618761b6/" title="Linkedin link" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
            <li><a href="https://github.com/StarrySkyrs" title="Github link" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
            <li><a href="mailto:sijia.han@hotmail.com" title="Send me a Email" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMailBulk} size="2x" /></a></li>
            <li><a href="StarrySkyie" title="Wechat - StarrySkyie" onClick={copyToClipboard} target="_self"><FontAwesomeIcon icon={faWeixin} size="2x" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;