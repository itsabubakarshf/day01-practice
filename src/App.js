import { Component } from "react";

export default class App extends Component {
  constructor() {
    console.log("constructor")
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }
  componentDidMount() {
    console.log("componentDidMount")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(() => {
          return { monsters: user };
        })
      );
  }
  onSearchChange=(e)=>this.setState({searchField:e.target.value.toLowerCase()})
  render() {
    console.log("render")
    const {monsters,searchField}=this.state;
    const {onSearchChange}=this;
    const filteredMonsters=monsters.filter(monster=>{
      return monster.name.toLowerCase().includes(searchField)
    })
    return (
      <>
      <input type="search" placeholder="search monsters" onChange={onSearchChange}/>
        {filteredMonsters.map((monster) => {
          return (
            <div className="all-monsters" key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </>
    );
  }
}
