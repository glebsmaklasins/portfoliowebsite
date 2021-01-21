import React, {Component} from "react"
import {Grid,Cell} from "react-mdl"

class Landing extends Component {
  render() {
    return(
      <div style = {{width:"100%",margin:"auto"}}>
        <Grid className ="landing-grid">
          <Cell col={12}>
            <img src="./img/crop1.png" alt="mypic" className = "mypic-img"/>
            <div className = "banner-text">
              <h1>Junior Software Developer</h1>
              <hr/>
              <p>HTML/CSS | JavaScript | React | Node | Express | PSQL</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/glebs-maklasins/" rel="noopener noreferrer" target="_blank">
                  <i className = "fa fa-linkedin-square"  aria-hidden="true"></i>
                </a>
                <a href="https://github.com/glebsmaklasins" rel="noopener noreferrer" target="_blank">
                  <i className = "fa fa-github-square"  aria-hidden="true"></i>
                </a>
                <a href="/contactme" rel="noopener noreferrer" >
                  <i className = "fa fa-envelope-square"  aria-hidden="true"></i>
                </a>
                <a href="/contactme" rel="noopener noreferrer" >
                  <i className = "fa fa-phone-square"  aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Landing