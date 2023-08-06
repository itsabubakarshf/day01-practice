import { Component } from "react";
import CardList from "./component/card-list";
import SearchBox from "./component/search-box"
import './App.css'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }
  componentDidMount() {
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
    const {monsters,searchField}=this.state;
    const {onSearchChange}=this;
    const filteredMonsters=monsters.filter(monster=>{
      return monster.name.toLowerCase().includes(searchField)
    })
    return (
      <>
        <SearchBox onSearchChange={onSearchChange}/>
        <CardList monsters={filteredMonsters}/>
      </>
    );
  }
}
