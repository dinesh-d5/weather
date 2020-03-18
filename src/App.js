import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
//import Fake from "./components/fake";

//const API_KEY = "b6907d289e10d714a6e88b30761fae22";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
   // https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
  //  const api_call = await fetch(`http://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
  //  const data = await api_call.json();
  var data = [
    {
      "id": 1,
      "temp":280.42,
      "city":"London",
      "country":"GB",
      "humidity":81,
      "description":"light intensity drizzle"
   }];
    if (city && country) {
    console.log(data);
      this.setState({
        temperature: data[0].temp,
        city: data[0].city,
        country: data[0].country,
        humidity: data[0].humidity,
        description: data[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <div >
              <div>
                <div>
                  <Titles />
                </div>
                <div>
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;