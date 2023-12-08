import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import {Input,Menu,ConfigProvider} from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import Homepage from './screens/Homepage/homepage';
import MovieDetailPage from './screens/MovieDetailpage/movieDetailpage';
import TopRatingpage from './screens/Topratingpage/topRatingpage';
import Categoriespage from './screens/Categoriespage/categoriespage';
import Searchpage from './screens/searchpage/searchpage';
import Reviewpage from './screens/Reviewpage/reviewpage';


const App: React.FC = () =>  {
  
  return(
  <Router>

    <Routes>
    <Route path="/homepage"  element={<Homepage/>}/>
    <Route path="/moviedetailpage"  element={<MovieDetailPage/>}/>
    <Route path="/topratingpage"  element={<TopRatingpage/>}/>
    <Route path="/categoriespage"  element={<Categoriespage/>}/>
    <Route path="/searchpage"  element={<Searchpage/>}/>
    <Route path="/reviewpage"  element={<Reviewpage/>}/>


    </Routes>
  </Router>

  );
}

export default App;
