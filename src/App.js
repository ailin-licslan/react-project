
//租房业务开发： 在线租房项目  类似链家  解决了用户租房需求
//核心业务： [在线找房  地图 条件搜索 用户登录  房源发布]

//技术栈 
//react 核心库 react react-dom react-router-dom
//脚手架 react-create-app 
//Ajax axios
//UI 组件库   antd-mobile
//其他组件库  react-virtualized 长列表 formi+yup 表单验证 react-spring 动画功能 etc.
//百度地图API 



//1.按照路由 npm install --save react-router-dom
//2.导入路由组件 Router, Route, Link, Routes
//3.在pages目录里面创建  Home  CityList  组件
//4.使用 routes 配置 路由 首页  和城市选择页



//2种布局方式 
//有TabBar 的页面  首页 找房 咨询  我的    （嵌套路由 理由里面再包含路由）
//无TabBar 的页面 城市列表

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Button } from 'antd-mobile';
import Home from './pages/Home'
import CityList from './pages/CityList';

function App() {
  return (

    <Router>
      <div className="App">

        {/* React 根组件  <Button> 登录</Button> */}

        <h1><Button>登录</Button></h1>



        {/* 配置导航菜单 */}

        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>


          <li>
            <Link to="/cityList">城市选择</Link>
          </li>


        </ul>



        {/* 路由 */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/cityList/*" element={<CityList />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
