import React, { useState } from 'react';
import { paintings } from './Paintings';
import SearchForm from './SearchForm';

const Card = () => {
  const [filteredList, setFilteredList] = useState(paintings);

  // Search function
  const search = (event) => {
    let query = event.target.value;

    let updatedList = paintings.filter((item) => {
      return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });

    setFilteredList(updatedList);
  };

  return (
    <>
      {filteredList.map((painting, index) => (
    <div className="row" >

        <div className="example-2 card" key={index}>
          <div className="wrapper">
            <img width={700} src={painting.image} alt={painting.title} />
            
            <div className="header1">
              <div className="date">
                <span className="day">12</span>
                <span className="month">Aug</span>
                <span className="year">2016</span>
              </div>
              <ul className="menu-content"></ul>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">Van Gogh</span>
                <h1 className="title">
                  <a href="#">{painting.title}</a>
                </h1>
                <p className="text">
                 {painting.description}
                </p>
                <span className="text">
                 {painting.location}
                </span>
                <a href="#" className="button">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
       
      ))}
       </>

      );
};

export default Card;
