import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        };
    }
    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(reviewData => this.setState({reviews: reviewData.results}))
    }
    
    // renderMovies = () => {
    //     return this.state.reviews.map(movie =>{
    //         return (
    //             <div className="review" key={movie.display_title}>
    //                 <h3>{ movie.display_title }</h3>
    //                 <h4>By: { movie.byline }</h4>
    //                 <p>{ movie.summary_short }</p>
    //                 <a href={movie.link.url}>{ movie.link.suggested_link_text }</a>
    //                 <br></br>----------------------------------------------------------------------
    //                 <br></br>
    //             </div>
    //         )
    //     })
    // }
    render(){

        return(
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />

            </div>
        )
    }
}
export default LatestMovieReviewsContainer