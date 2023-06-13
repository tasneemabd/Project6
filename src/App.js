import './App.css';
import Navbar from './componant/Navbar';
import "./componant/Navbar.css"
import Section from './componant/Section';
import "./componant/Section.css"
import {BrowserRouter,Routes,Route, useParams} from "react-router-dom";

import "./componant/Card.css"
import { paintings } from './componant/Paintings';
import { useState } from 'react'; 

import Home from './pages/Home';
import Details from './componant/Details';

function App() {
  
  const [filteredList, setFilteredList] = useState(paintings)
  //Search//
  const search = (event)=>{
      let query = event.target.value;

      let updatedList = paintings.filter((item)=>{
          return item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      })
      setFilteredList(updatedList)
      
  } 
  return (
    <>
    
    {/* <Navbar />

    <Section />
    <SearchForm onChange={search}/> */}


    <BrowserRouter>


				<Routes>
					<Route  path='/' element={<Navbar />}>
				
						<Route path='/home/:paintingsID' element={<Home  />} />
					
					</Route>
				</Routes>
			</BrowserRouter>
    
  
    
  </>
   
  );
}

export default App;
