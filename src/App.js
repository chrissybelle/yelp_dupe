import React from "react";
import "./App.css";
import ResultList from "./components/ResultList/ResultList";
import SearchBar from "./components/SearchBar/SearchBar";
import Yelp from "./util/Yelp";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: []
        }
        this.searchYelp = this.searchYelp.bind(this);
    }

    searchYelp(term, location, sortBy) {
        console.log(`Search criteria: ${term}, ${location}, ${sortBy}`);
        Yelp.search(term, location, sortBy).then(businesses => {
            this.setState({
                businesses: businesses
            })
        });
    }

    render() {
        return (
            <div className="App">
                <h1 className="sticky">yelpdupe</h1>
                <SearchBar searchYelp={this.searchYelp} />
                <ResultList businesses={this.state.businesses} />
            </div>
        )
    }
}


export default App;
