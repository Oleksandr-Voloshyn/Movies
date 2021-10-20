import React, {Component} from 'react';
import { withRouter } from 'react-router';

import './recommendations.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class Recommendations extends Component {
  render() {
    const {recommendations, openFilm} = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 4,
      slidesToScroll: 3
    }
    return (
    

      <div className='recomendation-scoll'>
        <h1>Similar movies</h1>

          <Slider {...settings}>
            {recommendations.map(i => {
              return <div key={i.id}>
                {i.poster_path == null
                  ? <img
                    className='recommendatioms-image'
                    src={`https://i.stack.imgur.com/y9DpT.jpg`}/>
                  : <img
                    className='recommendatioms-image'
                    src={`https://image.tmdb.org/t/p/original${i.poster_path}`}
                    onClick={() => openFilm(i.id)}/>
                }
              </div>
            })}
          </Slider>

      </div>

    );
  }
}

export default withRouter(Recommendations);