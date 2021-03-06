import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/journal/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import "./index.css"

const places = [
  { name: "Princess Leia", zip: "https://swapi.co/api/people/5/", img: "https://dl.dropbox.com/s/z6sct1dgb1l9lea/princess_leia.jpg?dl=0" },
  { name: "Luke Skywalker", zip: "https://swapi.co/api/people/1/", img: "https://dl.dropbox.com/s/4swbg9av5tm8oc1/luke_skywalker.jpg?dl=0"},
  { name: "Darth Vadar", zip: "https://swapi.co/api/people/4/", img: "https://dl.dropbox.com/s/hnc3pacm44vyb2j/darth_vadar.jpg?dl=0" },
  { name: "R2D2", zip: "https://swapi.co/api/people/3/", img: "https://dl.dropbox.com/s/0vpfrt5sp040s2u/r2d2.jpg?dl=0" }
]

// create new Componentclass WeatherDisplay
class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const URL = this.props.zip;
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.name[0];
    // const iconUrl = <img src={places.img}/>;
    return (
      <div>
        <h1>
          {weatherData.name}
        </h1>
        <p>Name: {weatherData.name}</p>
        <p>Eye Color: {weatherData.eye_color}</p>
      </div>
    );
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    }
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React App
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={6} sm={6}>
              <h3>Characters</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {places.map((place, index) => (
                  <NavItem key={index} eventKey={index}><img src={place.img}/>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={6} sm={6}>
              <WeatherDisplay key={activePlace} zip={places[activePlace].zip} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
