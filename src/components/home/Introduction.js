import React from 'react';
import './style/introduction.css'
import home_page from './assets/img/meow.jpeg';
import Chip from '@material-ui/core/Chip';

function Introduction() {
  return (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
          <h1>Hi, I'm Sijia Han 😎</h1>

          <p> 
          I recently graduated with a Master of Data Science from the University of British Columbia.
          I am currently looking for an entry-level position as 
          Data Scientist, Data  Analyst, Machine Learning Engineer or Software Engineer.  
          
          <br />
          <br />

          I have a solid computer science and mathematics background, 
          hands-on experience in data science, machine learning (NLP) and deep learning, 
          and internship experience in data science/NLP projects.
          </p>

          <p>
          Feel free to check or download my resume in <b>Skills</b> section.
          </p>

          <p className='flex-chips'>If I am not coding, you can find me: <br />
              <Chip className="zoom" variant="outlined" label="👨‍🎓 learning" />
              <Chip className="zoom" variant="outlined" label="💻 trying new techniques" />
              <Chip className="zoom" variant="outlined" label="📱 chatting with friends" />
              <Chip className="zoom" variant="outlined" label="🛫 traveling" />
              <Chip className="zoom" variant="outlined" label="🎮 gaming" />
              <Chip className="zoom" variant="outlined" label="🎵 listening to musics" />
              <Chip className="zoom" variant="outlined" label="🎥 watching movies" />
          </p>

        </div>
        <div className="image-wrapper">
          <img src={home_page} alt="profile_picture" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;