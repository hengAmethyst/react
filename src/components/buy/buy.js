import React from 'react'
import './buy.scss'
import {Router,Route,Link} from 'react-router-dom'
import history from '../history'
//组件
import Foods from './foods/foods'
import MerchantInfo from './merchantInfo/merchantInfo'
import UserInfo from './userInfo/userInfo'

class Indent extends React.Component {
	render(){
		return(
			<div className="buy">
				<div className="header">
					<ul>
						<li className="left">
							<span>
								<img src={require('../../imgs/注册成功.png')}/>
							</span>
							<span>
								<i>
									奥巴马
								</i>
								<img src={require('../../imgs/会员.png')}/>
							</span>
						</li>
						<li className="right">
							<img src={require('../../imgs/搜索@3x.png')}/>
							<img src={require('../../imgs/订单@3x.png')}/>
						</li>
					</ul>
				</div>
				<Table/>
				
			</div>
		)
	}
}
//table组件
var  Table = React.createClass ({
	getInitialState(){
		return{
			navList:[{path:'/order/buy/foods',name:'点菜'},{path:'/order/buy/userInfo',name:'会员信息'},{path:'/order/buy/MerchantInfo',name:'商家信息'}]
		}
	},
	chose(target){
		console.log()	
	},
	render(){
		return(
			<Router history={history}>
				<div className="innerBox">
					<div className="table">
						<ul>
							{
								this.state.navList.map((item,index)=>(
										<li key={index} onClick={this.chose(index)}>
											<Link to={item.path}>
												<span>
													{item.name}
												</span>
											</Link>
										</li>
									)
								)
							}
						</ul>
					</div>
					<Route path="/order/buy/foods" component={Foods}/>
					<Route path="/order/buy/merchantInfo" component={MerchantInfo}/>
					<Route path="/order/buy/userInfo" component={UserInfo}/>
				</div>
			</Router>
		)
	}
})

export default Indent