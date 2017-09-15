import React from 'react'
import './app.scss'
import {Link,BrowserRouter as Router,Route} from 'react-router-dom'
//组件引入
import Indent from '../indent/indent'
import Buy from '../buy/buy'
import history from '../history'
class App extends React.Component {
	goBuy(){
		history.push('/order/buy')
	}
	goIndent(){
		history.push('/order/indent')
	}
	render(){
		return(
			<div className="app">
				<p>
					<span>欢迎光临!</span>
					<span>晶汉</span>
				</p>
				<p>
					<img src={require('../../../src/imgs/注册成功.png')}/>
					<span>Amethyst</span>
				</p>
				
				<div className="goto">
					<p className="gotoBuy" onClick={this.goBuy}>
						我要点餐
					</p>
					<p className="gotoGet" onClick={this.goIndent}>
						我要取餐
					</p>
				</div>
			</div>
		)
	}
}
export default App