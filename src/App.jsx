import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/Navbar/NavBarComponent';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemListCategory from './components/Products/ItemListContainer';
import { ItemDetail } from './components/Product/ItemDetail';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavBarComponent cart={0}/>
      <Routes>
      <Route exact path="/" element={<ItemListContainer />}/>
      <Route exact path="/:prodCategory" element={<ItemListContainer /> }/>
      <Route exact path="/Item/:prodId" element={<ItemDetail /> }/>
      </Routes>

      </BrowserRouter>
    </>
  )
}
