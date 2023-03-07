import React from "react";
import "./style/experience.css"
// import experience_page from './assets/img/about_page.jpeg';
// import {getAge} from '../../utils'
import Chip from '@material-ui/core/Chip';

function Experience() {
  return (
    <div className="experience">
      <div class="items_wrapper">
        <div>

        <h1>Work Experience</h1>
          <hr />

          <p className="work_text">
            <h2>Heyday by Hootsuite </h2>
            <h5><i class="fa fa-calendar"></i>May 2022 - July 2022</h5>
            <b> NLP Data Science Intern </b>   
          </p>

          <p> 
            Developed a Negation-Aware Named Entity Recognition (NER) system for chatbots 
            in the E-Commerce domain and deployed with a user-friendly in-browser interface using FastAPI.
            <p className="flex-chips"> SKills:  { }
                <Chip variant="outlined" label="Python" />
                <Chip variant="outlined" label="Natural Language Processing (NLP)" />
                <Chip variant="outlined" label="Data Visualization" />
                <Chip variant="outlined" label="Data Analysis" />
                <Chip variant="outlined" label="Pandas" />
                <Chip variant="outlined" label="BERT" />
                <Chip variant="outlined" label="GPT-2" />
                <Chip variant="outlined" label="Semi-supervised Learning" />
                <Chip variant="outlined" label="spaCy" />
                <Chip variant="outlined" label="FastAPI" />
                <Chip variant="outlined" label="GitHub" />
                <Chip variant="outlined" label="Huggingface" />
              </p>
          </p>

          <hr />
        
          <br></br>

        <h1>Education Experience</h1>
          <hr />

          <p className="education_text">
          
            <h2>Dalhousie University</h2>
            <h5><i class="fa fa-calendar"></i>Jan 2017 - Seq 2021</h5>
              <b> Bachelor of Computer Science with a Minor in Mathematics </b>

              <p className="flex-chips">Courses:  { }
                <Chip variant="outlined" label="Computer Science" />
                <Chip variant="outlined" label="Database Systems" />
                <Chip variant="outlined" label="Data Structures & Algorithms" />
                <Chip variant="outlined" label="Machine Learning" />
                <Chip variant="outlined" label="Intro Artificial Intel Gam App" />
                <Chip variant="outlined" label="Intermediate Calculus" />
                <Chip variant="outlined" label="Intro Data Mining with R" />
                <Chip variant="outlined" label="Probability & Statistics" />
                <Chip variant="outlined" label="Info Security" />
                <Chip variant="outlined" label="Linear Algebra" />
                <Chip variant="outlined" label="Natural Lang Processing" />
                <Chip variant="outlined" label="Network Computing" />
                <Chip variant="outlined" label="Network Security" />
                <Chip variant="outlined" label="Operating Systems" />
                <Chip variant="outlined" label="Principles/Programming Languages" />
                <Chip variant="outlined" label="Process of Data Science" />
                <Chip variant="outlined" label="Software Development" />
                <Chip variant="outlined" label="Software Engineering" />
                <Chip variant="outlined" label="Mathematics" />
                <Chip variant="outlined" label="Differential & Integral Calc" />
                <Chip variant="outlined" label="Discrete Structures" />
                <Chip variant="outlined" label="Dsgn. & Anal. of Algorithms" />
                <Chip variant="outlined" label="Intro-Comp Org/Assemby Lang" />
                <Chip variant="outlined" label="Methods for ODE" />
                <Chip variant="outlined" label="Principles of Microeconomics & Macroeconomics" />
                <Chip variant="outlined" label="Stat Meth/Data Analysis/Infere" />
              </p>

            <h2>University of British Columbia</h2>
            <h5><i class="fa fa-calendar"></i>Sep 2021 - Nov 2022</h5>
            <b> Master of Data Science in Computational Linguistics </b>

            <p className="flex-chips">Courses:  { }
                <Chip variant="outlined" label="Advanced Computational Semantics" />
                <Chip variant="outlined" label="Advanced Corpus Linguistics" />
                <Chip variant="outlined" label="Algorithms and Data Structures" />
                <Chip variant="outlined" label="Computational Morphology" />
                <Chip variant="outlined" label="Computational Semantics" />
                <Chip variant="outlined" label="Computing Platforms for Data Science" />
                <Chip variant="outlined" label="Corpus Linguistics" />
                <Chip variant="outlined" label="Data Visualization" />
                <Chip variant="outlined" label="Databases and Data Retrieval" />
                <Chip variant="outlined" label="Descriptive Statistics and Probability for Data Science" />
                <Chip variant="outlined" label="Feature and Model Selection" />
                <Chip variant="outlined" label="Natural Language Processing for Low-Resource Languages" />
                <Chip variant="outlined" label="Neural Machine Translation" />
                <Chip variant="outlined" label="Parsing for Computational Linguistics" />
                <Chip variant="outlined" label="Programming for Data Manipulation" />
                <Chip variant="outlined" label="Python Programming for Data Science" />
                <Chip variant="outlined" label="Regression" />
                <Chip variant="outlined" label="Sentiment Analysis" />
                <Chip variant="outlined" label="Statistical Inference and Computation" />
                <Chip variant="outlined" label="Supervised Learning" />
                <Chip variant="outlined" label="Trends in Computational Linguistics" />
                <Chip variant="outlined" label="Unsupervised Learning" />
              </p>

          </p>
          <hr />


        </div>
      </div>
    </div>
  );
}

export default Experience;