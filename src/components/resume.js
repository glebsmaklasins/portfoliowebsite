import React, {Component} from "react"
import {Grid,Cell} from "react-mdl"
import Education from "./education"
import Skills from "./skills"

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
          <div style={{textAlign:"center"}}>
            <img  src="./img/image4.jpg" alt="avatar"
            style={{height:"300px",width:"300px",borderRadius:"50%",paddingTop:"2em"}}
            />
          </div>
          <h2 style={{paddingTop:"2em"}}>Glebs Maklasins</h2>
          <h4 style={{color:"grey"}}>Junior Software Developer</h4>
          <hr style={{borderTop:"3px solid #833fb2",width:"50%"}} />
          <p>I am a junior full stack software developer soon to graduate from Northcoders
bootcamp , I like building websites,app, plugins ,bots.</p>
          <hr style={{borderTop:"3px solid #833fb2",width:"50%"}} />
          <h5>
            <i className="fa fa-compass" aria-hidden ="true" />
            Manchester, United Kingdom
          </h5>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h3>Education</h3>
              <Education 
            startYear={2020} 
            endYear ={2021}
            schoolName = {"NorthCoders Coding Bootcamp"}
            schoolDescription = {"Studied full stack software development , gained great understanding of industries best practices , pair programming , test driven development . Worked on various front end and back end projects - listed in the project section "}
            />
            <Education 
            startYear={2010} 
            endYear ={2014}
            schoolName = {"Liepaja Maritime College"}
            schoolDescription = {"Specialised in managing a team of sailors and contributing for safe sea voyages. Gained great leadership and personal management skills"}
            />
            <hr style={{borderTop:"3px solid #e229487"}} />
            <h3>Skills</h3>
            <Skills
              skill ="JavaScript"
              progress={90}
            />
            <Skills
              skill ="HTML/CSS"
              progress={90}
            />
            <Skills
              skill ="React.js"
              progress={70}
            />
            <Skills
              skill ="Node.js"
              progress={60}
            />
            
            <Skills
              skill ="Express.js"
              progress={50}
            />
              <Skills
              skill ="PSQL"
              progress={50}
            />
            
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume