import { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <>
        <div>
          <input type="search" placeholder="search monsters" onChange={this.props.onSearchChange}/>
        </div>
      </>
    );
  }
}
