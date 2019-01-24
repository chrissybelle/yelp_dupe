import React from "react";
import "./ResultList.css";
import Business from "../Business/Business";

class ResultList extends React.Component {
    render() {
        return (
            <div className="ResultList">
                {
                    this.props.businesses.map(business => {
                        return <Business business={business} key={business.id} />;
                    })
                }
            </div>
        );
    }
};


export default ResultList;