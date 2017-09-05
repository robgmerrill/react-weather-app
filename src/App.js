import React, { Component } from 'react';

const places = [
  { name: "Palo Alto", zip: "94308" },
  { name: "Stockton", zip: "95209" },
  { name: "Lodi", zip: "95242" },
  { name: "Seattle", zip: "94119" }
]

// create new Componentclass WeatherDisplay
function WeatherDisplay(props) {
  return(
    <h1>Hello, {props.zip}</h1>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* use map method to go through our places array - do an example in the console */}
        {/* second field in map allows you to take advantage of index...when ordering is important this isn't the means that you will want to use */}
        {places.map(function(place, index) {
          {/* the return statement is what this component is going to render to the DOM */}
          return (
            // {/* perhaps I should do this once without the key prop? - I think so */}
            <button key={index} onClick={function() {
              // {/* let's return to the console to make sure that when we click on button we are getting the right index. */}
                return console.log("Clicked index " + index);
              }}
              // these are all the attributes for the opening of our button tag.
              >
              {/* }// name the button with place and name. Our first time through will be "Palo Alto" */}
              {place.name}
              {/* }// let's close out the button */}
              </button>
          )
        })}
      </div>
    );
  }
}

export default App;
