import React from 'react';

class SelectPlanet extends React.Component{
  
  render(){
    return <div>
    <select>
      {this.props.planetData.map(planet => {
        return <option key={planet.name} value={planet.distance} label={planet.name}>{planet.name}</option>
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
      console.log(data);
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
