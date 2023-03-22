import React, { Component } from "react";

class SearchBar extends Component {
    render() {
      const { searchChange  } = this.props
    return (
        <div className="searchBar">
            <input type="text" placeholder="...search your favourite pet" onChange={searchChange}/>
     </div>
    );
  }
}

export default SearchBar;
