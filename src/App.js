import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';
import Meals from './components/Meals/Meals';
import Restaurant from './components/Rstaurant/Restaurant';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/meals" element={<Meals />}></Route>
        <Route path="/meal/:id" element={<MealDetail></MealDetail>}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>

      </Routes>

    </div>
  );
}

export default App;
