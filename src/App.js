import './App.css'
import Home from './routes/home/home.component'
import {Routes,Route} from 'react-router-dom'
import Navigation from './routes/navbar/navbar.component'
import Receipes from './routes/receipes/receipes.component'
import Categories from './routes/categories/categories.component'
import ReceipeDetail from './routes/receipesDetails/receipesDetail.component'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Signup from "./routes/auth/Signup.component";
import Login from "./routes/auth/Login.component";  


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          

          <Route path='/receipes' element={<Receipes/>}/>
          <Route path='/categories' element={<Categories />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
      </Route>
      <Route path='receipes/:recipe_id' element={<ReceipeDetail />}/>
    </Routes>
    )
}

export default App