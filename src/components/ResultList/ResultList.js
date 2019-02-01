import React from "react";
import "./ResultList.css";
import Business from "../Business/Business";

class ResultList extends React.Component {
    render() {
        return (
            <div>
                {!this.props.noResults ?

                    <div className="ResultList">
                        {this.props.businesses.map(business => {
                            return <Business business={business} key={business.id} />
                        })
                        }
                    </div>
                    :
                    <div className="ResultList">
                        <h2 className="no-results">Sorry, no results found.</h2>
                    </div>
                }
            </div>
        );
    }
};


export default ResultList;