import React, {Component} from 'react';
import { withRouter } from 'react-router';

import './recommendations.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class Recommendations extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 3,
      slidesToScroll: 3
    }
    return (

      <div className='recomendationScoll'>
        <h1>Схожі фільми</h1>

          <Slider {...settings}>
            {this.props.recommendations.map(i => {
              return <div key={i.id}>
                {i.poster_path == null
                  ? <img
                    className='recommendatioms'
                    src={`https://i.stack.imgur.com/y9DpT.jpg`}/>
                  : <img
                    className='recommendatioms'
                    src={`https://image.tmdb.org/t/p/original${i.poster_path}`}
                    onClick={() => this.props.openFilm(i.id)}/>
                }
              </div>
            })}
          </Slider>

      </div>

    );
  }
}

export default withRouter(Recommendations);