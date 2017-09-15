import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//引入组件
import RouteMap from './components/routermap/routermap'
//将模板转换为HTML，并插入到指定的标签中
ReactDOM.render(
	<RouteMap/>
	,
	document.getElementById('root')
)


