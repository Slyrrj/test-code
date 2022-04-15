import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [test, setTest] = useState([]);
  console.log(test);
  useEffect(() => {
    testapi();
  }, []);

  const testapi = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    //const response = await fetch('http://localhost:1337/api/products?populate=*');//<== qui me fait page blache
    const jsonData = await response.json();
    setTest(jsonData);
  };

  return (
    <>
      <h2>Test Api</h2>
      <div className="container">
        {test.map((values) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <h5>{values.title}</h5>
                  <p>{values.categorie}</p>
                </div>
                <img src={values.image} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
