import React, {Component} from "react"
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton,CardText} from "react-mdl"

class Projects extends Component {
  constructor(props){
    super(props)
    this.state = {activeTab:0}
  }
  toggleCategories(){
  if(this.state.activeTab === 0){
  return(
    <div className ="projects-grid">
      <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
      <CardTitle  style={{color:"black",height:"176px",background:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuS-yXwTcRvLM5xLtJ97fD_BSZnTPLbVj0kA&usqp=CAU) center/cover"}}>
        News site api
      </CardTitle>
      <CardText>
        Created a news site api with Node.JS, Express.JS, PSQL and Knex
      </CardText>
      <CardActions border>
    <Button colored><a href="https://github.com/glebsmaklasins/be-nc-news">GitHub</a></Button>
    <Button colored><a href="https://ncnews-server.herokuapp.com/api">Live Demo</a></Button>
      </CardActions>
      <CardMenu color={{color:"#fff"}}>
        <IconButton name="share"/>
      </CardMenu>
    </Card>

    <Card shadow={5} style={{minWidth:"450",minHeight:"297",margin:"auto"}}>
      <CardTitle style={{color:"black",height:"176px",background:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCV3zkMR_LsGkujbL_cePpPzM9SvRZxn-bww&usqp=CAU) center/cover"}}>
        Pokemon Battler
      </CardTitle>
      <CardText>
        Created a Pokemon Battle game using OOP principles
      </CardText>
      <CardActions border>
    <Button colored><a href="https://github.com/glebsmaklasins/fun-pokemon-battler">GitHub</a></Button>
      </CardActions>
      <CardMenu color={{color:"#fff"}}>
        <IconButton name="share"/>
      </CardMenu>
    </Card>

    <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
      <CardTitle style={{color:"black",height:"176px",background:"url(https://cdn.auth0.com/blog/react-js/react.png) center/cover"}}>
        EXAMPLE PROJECT
      </CardTitle>
      <CardText>
        EXAMPLE REACT
        EXAMPLE REACT
        EXAMPLE REACT
      </CardText>
      <CardActions border>
    <Button colored>GitHub</Button>
    <Button colored>Live Demo</Button>
      </CardActions>
      <CardMenu color={{color:"#fff"}}>
        <IconButton name="share"/>
      </CardMenu>
    </Card>
    </div>
  )
}
}


  render() {
    return(
      <div className = "category-tabs">
        <Tabs activeTab ={this.state.activeTab} onChange= {(tabId) =>this.setState({activeTab:tabId})} ripple>
          <Tab>Projects</Tab>
        </Tabs>
       
        <Grid >
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
         
      </div>
    )
  }
}
export default Projects