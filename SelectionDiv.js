import React from 'react';

class SelectPlanet extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.parentCallback(e.target.value);
  }
  render(){
    return <div>
    <select onChange={this.handleChange}>
      <option disabled selected>Select</option>
      {this.props.planetData.map(planet => {
        return <option key={planet.name} value={planet.name} label={planet.name}>{planet.name}</option>
      })}
    </select>
    </div>
  }
}

class PlanetList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      planets: [],
      planet1: ''
    }
  }
  componentDidMount(){
    fetch(this.props.url)
    .then(res => res.json())
    .then(data=>{
      this.setState({
        planets:data
      })
    });
  }
  callbackFunction = (childData) => {
    var planetData = this.state.planets.filter(planet => planet.name !== childData);
    this.setState({
      planets: planetData,
      planet1: childData
    })
  }
  render(){
    return <div className="row">
    <div className="col-md-3"><SelectPlanet planetData={this.state.planets} parentCallback = {this.callbackFunction}/></div>
    <div className="col-md-3"><SelectPlanet planetData={this.state.planets}/></div>
    <div className="col-md-3"><SelectPlanet planetData={this.state.planets}/></div>
    <div className="col-md-3"><SelectPlanet planetData={this.state.planets}/></div>
    </div>
  }
}

class SelectionDiv extends React.Component{
  
  render(){
    return <PlanetList url="https://findfalcone.herokuapp.com/planets"/>
  }
}

export default SelectionDiv;
