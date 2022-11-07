// 1.按照路由 npm install --save react-router-dom
//2.导入路由组件 Router, Route, Link, Routes
//3.在pages目录里面创建  Home  CityList  组件
//4.使用 routes 配置 路由 首页  和城市选择页

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import Home from './pages/Home'
import CityList from './pages/CityList';
import News from './pages/News';

function App() {
  return (

    <Router>
      <div className="App">

        {/* React 根组件  <Button> 登录</Button> */}



        {/* 配置导航菜单 */}

        <ul>
          <li>
          <Link to="/home">首页</Link>
          </li>
          <li>
          <Link to="/cityList">城市选择</Link>
          </li>
        </ul>

        
        
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path="/home" element={<Home />} >
            <Route path='/home/news' element={<News/>}/>
          </Route>
          <Route path="/cityList" element={<CityList />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
