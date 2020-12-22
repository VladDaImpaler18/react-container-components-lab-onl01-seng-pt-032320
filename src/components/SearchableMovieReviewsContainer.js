import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
//https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=<your-api-key>&query=<search-term>
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }
    componentDidMount(){
        
    }
    handleChange = (e) =>{
        this.setState({searchTerm: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const query = `&query=${this.state.searchTerm}`
        fetch(URL+query)
        .then(response => response.json())
        .then(reviewData => {
            this.setState({ reviews: reviewData.results })
            return console.log(reviewData.results)})
        //this.renderMovies();
    }
    renderMovies = () => {
        return this.state.reviews.map(movie =>{
            return (
                <div className="review" key={movie.display_title}>
                    <h3>{ movie.display_title }</h3>
                    <h4>By: { movie.byline }</h4>
                    <p>{ movie.summary_short }</p>
                    <a href={movie.link.url}>{ movie.link.suggested_link_text }</a>
                    <br></br>----------------------------------------------------------------------
                    <br></br>
                </div>
            )
        })
    }
    render(){
        return(
            <div className='searchable-movie-reviews'> 
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input onChange={(e) => this.handleChange(e)}></input>
            </form>
                
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer