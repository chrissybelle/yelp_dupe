import React from "react";
import "./SearchBar.css";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
}



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            location: "",
            sortBy: "best_match"
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }


    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li
                key={sortByOptionValue}
                className={this.getSortByClass(sortByOptionValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
            </li>;
        });
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        })
    }

    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return "active";
        } else {
            return "";
        }
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        })
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    render() {

        const { term, location} = this.state;
        const isEnabled = term.length>0 && location.length>0;


        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <form className="SearchBar-fields">
                    <input type="text" placeholder="Search keyword" pattern="[A-Za-z]" onChange={this.handleTermChange} required />
                    <input type="text" placeholder="Location" onChange={this.handleLocationChange} pattern="[A-Za-z]" required />
                </form>
                <div className="SearchBar-submit">
                    <button onClick={this.handleSearch} disabled={!isEnabled}>Find</button>
                </div>
            </div>
        ) 
    }
}

export default SearchBar;