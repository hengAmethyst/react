import React from 'react'
import {Router,Route} from 'react-router-dom'
import history from '../history'
//组件
import App from '../app/app'
import Indent from '../indent/indent'
import Buy from '../buy/buy'
class RouteMap extends React.Component {
	constructor(props){
    super(props)
  }
  render(){ 
    return(
	    	<Router history={history}>
		    	<div>
		    		<Route exact path="/" component={App}/>
	      		<Route path="/order/Indent" component={Indent}/>
					<Route path="/order/buy" component={Buy}/>
		    </div>
		  </Router>
    ) 
  } 
} 
export default RouteMap