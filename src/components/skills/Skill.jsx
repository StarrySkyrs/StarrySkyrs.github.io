import React from 'react';
import './style/skill.css';

import Chip from '@material-ui/core/Chip';

import { FaJava, FaJsSquare, FaHtml5, FaCss3, FaRProject, FaDatabase, FaPython, FaReact, FaBootstrap, FaLaravel, FaGitAlt } from "react-icons/fa";
import { SiKotlin, SiSolidity, SiCplusplus, SiSpringboot, SiDjango, SiPostgresql, SiSqlite, SiMongodb, SiHeroku, SiGnubash, SiPostman, SiVirtualbox, SiQt, SiAndroidstudio, SiCisco, SiSwift, SiFirebase } from "react-icons/si";
import { GrMysql, GrOracle, } from "react-icons/gr";
import { DiAws } from "react-icons/di";
import { CgShapeCircle } from "react-icons/cg";
import { GiGears } from "react-icons/gi";

function Skill() {
    return (
        <div className="container" id="skills">
            <div className="skills-container">
                <h1>Skills ... in progressing... </h1>
                <div className="skills-grid">
                    <div className="skill">
                        <h2>Languages</h2>
                        <p className="flex-chips">
                            <Chip className="zoom" avatar={<FaPython />} variant="outlined" label="Python" />
                            <Chip className="zoom" avatar={<FaJava />} variant="outlined" label="Java" />
                            <Chip className="zoom" avatar={<FaRProject />} variant="outlined" label="R" />
                            <Chip className="zoom" avatar={<SiCplusplus />} variant="outlined" label="C/C++" /> 
                            <Chip className="zoom" avatar={<FaDatabase />} variant="outlined" label="SQL" />
                            <Chip className="zoom" avatar={<FaHtml5 />} variant="outlined" label="HTML" />
                            <Chip className="zoom" avatar={<FaCss3 />} variant="outlined" label="CSS" />
                            <Chip className="zoom" avatar={<FaJsSquare />} variant="outlined" label="JavaScript" />
                        </p>
                    </div>

                    <div className="skill">
                        <h2>Data Science</h2>
                        <p className="flex-chips">
                            <Chip className="zoom" avatar={<FaReact />} variant="outlined" label="React Native" />
                            <Chip className="zoom" avatar={<FaReact />} variant="outlined" label="React.js" />
                            <Chip className="zoom" avatar={<FaBootstrap />} variant="outlined" label="Bootstrap" />
                            <Chip className="zoom" avatar={<SiSpringboot />} variant="outlined" label="Spring Boot" />
                        </p>
                    </div>

                    <div className="skill">
                        <h2>Databases</h2>
                        <p className="flex-chips">
                            <Chip className="zoom" avatar={<GrMysql />} variant="outlined" label="MySQL" />
                            <Chip className="zoom" avatar={<SiPostgresql />} variant="outlined" label="PostgreSql" />
                            <Chip className="zoom" avatar={<SiFirebase />} variant="outlined" label="Firebase" />
                            <Chip className="zoom" avatar={<SiMongodb />} variant="outlined" label="MongoDB" />
                        </p>
                    </div>

                    {/* <div className="skill">
                        <h2>Cloud Services</h2>
                        <p className="flex-chips">
                            <Chip className="zoom" avatar={<SiHeroku />} variant="outlined" label="Heroku" />
                            <Chip className="zoom" avatar={<DiAws />} variant="outlined" label="AWS" />
                        </p>
                    </div> */}

                    <div className="skill">
                        <h2>Machine Learning</h2>
                        <p className="flex-chips">
                            <Chip className="zoom" avatar={<FaGitAlt />} variant="outlined" label="Git" />
                            <Chip className="zoom" avatar={<SiPostman />} variant="outlined" label="Postman" />
                            <Chip className="zoom" avatar={<SiGnubash />} variant="outlined" label="Bash" />
                            <Chip className="zoom" avatar={<SiVirtualbox />} variant="outlined" label="Virtual Machines" />
                            <Chip className="zoom" avatar={<SiAndroidstudio />} variant="outlined" label="Android Studio" />
                        </p>
                    </div>

                    <div className="skill">
                        <h2>Tools</h2>
                        <p className="flex-chips">
                            <Chip className="zoom" avatar={<FaGitAlt />} variant="outlined" label="Git" />
                            <Chip className="zoom" avatar={<SiPostman />} variant="outlined" label="Postman" />
                            <Chip className="zoom" avatar={<SiGnubash />} variant="outlined" label="Bash" />
                            <Chip className="zoom" avatar={<SiVirtualbox />} variant="outlined" label="Virtual Machines" />
                            <Chip className="zoom" avatar={<SiAndroidstudio />} variant="outlined" label="Android Studio" />
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skill;