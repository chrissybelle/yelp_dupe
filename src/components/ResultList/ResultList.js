import React from "react";
import "./ResultList.css";
import Business from "../Business/Business";

class ResultList extends React.Component {
    render() {
        return (
            <div className="ResultList">
                {!this.props.noResults ?                 
                    this.props.businesses.map(business => {
                        return <Business business={business} key={business.id} />;
                    })
                    :
                    <h2 className="no-results">Sorry, no results found.</h2>
                } 
            </div>
        );
    }
};


export default ResultList;