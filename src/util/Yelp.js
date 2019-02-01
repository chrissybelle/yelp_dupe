const API_KEY = process.env.REACT_APP_YELP_API_KEY;

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                console.log(jsonResponse);
                console.log(jsonResponse.businesses);
                if (jsonResponse.error) {
                    console.log("no results");
                    return "error";
                } else {
                    return jsonResponse.businesses.map(result => {
                        return {
                            id: result.id,
                            imageSrc: result.image_url,
                            name: result.name,
                            address: result.location.address1,
                            city: result.location.city,
                            state: result.location.state,
                            zipCode: result.location.zip_code,
                            category: result.categories[0].title,
                            rating: result.rating,
                            reviewCount: result.review_count,
                            url: result.url,
                            isClosed: result.is_closed
                        }
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default Yelp;