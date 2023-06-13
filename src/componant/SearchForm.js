import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { paintings } from "./Paintings"
import Card from "./Card";
import "./Card.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Details from "./Details";

const SearchForm = () => {
  const [filteredList, setFilteredList] = useState(paintings);

  const search = (event) => {
    let query = event.target.value.toLowerCase();

    let updatedList = paintings.filter((item) => {
      return item.title.toLowerCase().includes(query);
    });

    setFilteredList(updatedList);
  };

  function toggleShow() {
    var el = document.getElementById("box");
    el.classList.toggle("show");
  }
  const navigate = useNavigate();


  return (
    <>
      <div className="container">
        <input
          type="text"
          id="box"
          placeholder="Search anything..."
          className="search__box"
          onChange={search}
        />
        <FaSearch />
      </div>
     
      {filteredList.map((painting, index) => (
        <div className="example-2 card" key={painting.id}>
          <div className="wrapper">
            <img width={700} src={painting.image} alt={painting.title} />

            <div className="header1">
              <div className="date">
                <span className="day">12</span>
                <span className="month">Aug</span>
                <span className="year">2016</span>
              </div>
              <ul class="menu-content">
          <li>
            <a href="#" class="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
          <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
        </ul>         
           </div>
            <div className="data">
              <div className="content">
                <span className="author">Van Gogh</span>
                <h1 className="title">
                  <a href="#">{painting.title}</a>
                </h1>
                <p className="text">{painting.description}</p>
                <span className="text">{painting.location}</span>
                <Link to={`home/${painting.id}`}   className="button">DETAILS</Link>
                {/* <button
                  className="button"
                  onClick={() => handleDetailsClick(painting.id)}
                >
                  Read more  
                  
                </button> */}

               
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </>
  );
};


export default SearchForm;
