import React from 'react';

class SelectPlanet extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    console.log(e.target.value);
    var planetData = this.props.planetData.filter(planet=>planet.name!==e.target.value);
    this.props.planetData = planetData;
    console.log(this.props.planetData);
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
      planets: []
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
  render(){
    return <div className="row">
    <div className="col-md-3"><SelectPlanet planetData={this.state.planets}/></div>
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
