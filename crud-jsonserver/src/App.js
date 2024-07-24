import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ViewUser from './ViewUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
        <Route path='/view/:id' element={<ViewUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
