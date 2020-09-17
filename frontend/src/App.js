import React from 'react';
import { Switch, Route } from  'react-router'; 
import { BrowserRouter} from 'react-router-dom';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  } 

render(){
  return(      
    <BrowserRouter>
      <Switch>
          <Route exact path="/" render={} ></Route>
      </Switch>
    </BrowserRouter>
    );
}}