import React from "react"
import LandingPage from  "./landingpage"
import {Switch,Route} from "react-router-dom"
import Contact from "./contactme"
import Projects from "./projects"
import Resume from "./resume"


const Main = () => (
  <Switch>
    <Route exact path = "/" component = {LandingPage} />
    <Route  path = "/contactme" component = {Contact} />
    <Route  path = "/projects" component = {Projects} />
    <Route  path = "/resume" component = {Resume} />
  </Switch>
)

export default Main