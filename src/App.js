import React from "react";
import "./App.css";
import ResultList from "./components/ResultList/ResultList";
import SearchBar from "./components/SearchBar/SearchBar";
import Yelp from "./util/Yelp";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: [],
            noResults: false
        }
        this.searchYelp = this.searchYelp.bind(this);
    }

    componentWillMount() {
        console.log("Thanks for checking out my app! I built this using the Yelp API and the React.js library. Please check out my github (https://github.com/chrissybelle) for other projects and feel free to add me on LinkedIn (https://linkedin.com/in/christabellec/)!");
        console.log("-cbelle");
    }

    searchYelp(term, location, sortBy) {
        console.log(`Search criteria: ${term}, ${location}, ${sortBy}`);
        Yelp.search(term, location, sortBy).then(businesses => {
            if (businesses === "error") {
                this.setState({
                    noResults: true
                })
            } else {
                this.setState({
                    businesses: businesses,
                    noResults: false
                })
            }

        });

    }

    render() {
        return (
            <div className="App">
                <h1 className="sticky">yelpdupe</h1>
                <SearchBar searchYelp={this.searchYelp} />
                <ResultList businesses={this.state.businesses} noResults={this.state.noResults} />
            </div>
        )
    }
}


export default App;
