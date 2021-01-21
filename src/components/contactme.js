import React, {Component} from "react"
import {Grid,Cell,List,ListItem,ListItemContent,} from "react-mdl"

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Glebs Maklasins</h2>
            <img
             src="./img/impage2.jpg"
             alt="avatar"
             style ={{height:"300px",width:"300px",borderRadius:"50%"}}
             />
             <p style={{width:"75%",margin:"auto",paddingTop:"1em",}}>I am always open for new opportunities and challenges , if your interested in working with me , contact me ! </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize:"25px"}}>
                <i className="fa fa-phone-square" aria-hidden ="true"/>
                214124124124124</ListItemContent>
              </ListItem>

                <ListItem>
                <ListItemContent style={{fontSize:"25px"}}>
                <i className="fa fa-linkedin-square" aria-hidden ="true"/>
                <a href="https://www.linkedin.com/in/glebs-maklasins/">in/glebs-maklasins/</a>  
                 </ListItemContent>
              </ListItem>

                <ListItem>
                <ListItemContent style={{fontSize:"25px"}}>
                <i className="fa fa-envelope" aria-hidden ="true"/>
                <a href="mailto:glebsmaklasins@gmail.com">glebsmaklasins@gmail.com</a></ListItemContent>
              </ListItem>
              
            </List>
            </div>
     
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact