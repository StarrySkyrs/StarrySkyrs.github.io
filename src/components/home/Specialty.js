import React from 'react';
import './style/specialty.css';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadeInSection from '../fade/FadeInSections'
import Chip from '@material-ui/core/Chip';
import { faAppStore, faReact, faPython } from '@fortawesome/free-brands-svg-icons';

function Specialty() {
  return (
    <div className="container" id="specialties">
      <FadeInSection>
        <div className="specialties-container">
          <h1>Specialties</h1>
          <div className="specialties-grid">

            <div className="specialty">
              <FontAwesomeIcon icon={faReact} size="4x" />
              <h3>Data Science</h3>
              <p className="flex-chips">Tech stack: { }
                <Chip variant="outlined" label="Python" />
                <Chip variant="outlined" label="R" />
                <Chip variant="outlined" label="Pandas" />
                <Chip variant="outlined" label="Numpy" />
                <Chip variant="outlined" label="ggplot" />
                <Chip variant="outlined" label="Plotly" />
                <Chip variant="outlined" label="Seaborn" />
                <Chip variant="outlined" label="Altair" />
                <Chip variant="outlined" label="Matplotlib" />
                <Chip variant="outlined" label="GitHub" />
                <Chip variant="outlined" label="SQL" />
                <Chip variant="outlined" label="NoSQL" />
                <Chip variant="outlined" label="REST API" />
                <Chip variant="outlined" label="Docker" />
                <Chip variant="outlined" label="Machine Learning" />
                <Chip variant="outlined" label="Deep Learning" />
                <Chip variant="outlined" label="NLP" />
                <Chip variant="outlined" label="Jupyter Notebook" />
                
              </p>
            </div>

            <div className="specialty">
              <FontAwesomeIcon icon={faAppStore} size="4x" />
              <h3>Software Development</h3>
              <p className="flex-chips">Tech stack: { }
                <Chip variant="outlined" label="Java" />
                <Chip variant="outlined" label="C" />
                <Chip variant="outlined" label="C++" />
                <Chip variant="outlined" label="C#" />
                <Chip variant="outlined" label="Python" />
                <Chip variant="outlined" label="GitLab" />
                <Chip variant="outlined" label="GitHub" />
                <Chip variant="outlined" label="Docker" />
                <Chip variant="outlined" label="Android Studio" />
                <Chip variant="outlined" label="Firebase " />
                <Chip variant="outlined" label="JavaScript" />
                <Chip variant="outlined" label="HTML" />
                <Chip variant="outlined" label="CSS" />
              </p>
            </div>

            <div className="specialty">
              <FontAwesomeIcon icon={faPython} size="4x"/>
              <h3>Data Analysis</h3>
              <p className="flex-chips">Tech stack: { }
                <Chip variant="outlined" label="R" />
                <Chip variant="outlined" label="SQL" />
                <Chip variant="outlined" label="NoSQL" />
                <Chip variant="outlined" label="Python" />
                <Chip variant="outlined" label="Pandas" />
                <Chip variant="outlined" label="Matplotlib" />
                <Chip variant="outlined" label="Seaborn" />
                <Chip variant="outlined" label="Sklearn" />
                <Chip variant="outlined" label="Snowflake" />
                <Chip variant="outlined" label="Tableau" />
                <Chip variant="outlined" label="Tensorflow" />
              </p>
            </div>

          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Specialty;