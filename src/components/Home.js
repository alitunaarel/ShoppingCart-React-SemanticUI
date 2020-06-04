import React from "react";

const Home = props => {
  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={props.myfunc} className="ui vertical animated button">
        <div className="hidden content">Add +</div>
        <div className="visible content">
          <i aria-hidden="true" className="shop icon"></i>
        </div>
      </button>

      
    </div>
  );
};

export default Home;
