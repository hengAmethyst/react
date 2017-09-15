import React from 'react'
import './indent.scss'
import '../../icon/iconfont.css'
import {Link,BrowserRouter as Router,Route} from 'react-router-dom'
import RouteMap from '../routermap/routermap'
import history from '../history'

class Indent extends React.Component {
	goBack(){
		history.push('/')
	}
	render(){
		return(
			<div className="indent">
				<div className="header">
					<ul>
						<li onClick={this.goBack}>
							<i className="icon iconfont icon-zuojiantou"></i>
							<span>返回</span>
						</li>
						<li>
							<span>我的订单</span>
						</li>
						<li>
							<img src={require('../../../src/imgs/订单@3x.png')} alt=""/>
						</li>
					</ul>
				</div>
				<Router>
				 	<div className="inner">
						<div className="nav">
							<span className="one">
								<Link to="/order/indent/willPay">
									待付款
								</Link>
							</span>
							<span className="two">
								<Link to="/order/indent/paied">
									已付款
								</Link>
							</span>
						</div>
					</div>
				</Router>
			</div>
		)
	}
}
class WillPay extends React.Component {
	render(){
		return(
			<div className="willPay">
				willPay
			</div>
		)
	}
}
class Paied extends React.Component {
	render(){
		return(
			<div className="paied">
				paied
			</div>
		)
	}
}
export default Indent