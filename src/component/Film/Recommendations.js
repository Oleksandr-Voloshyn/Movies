import React, {Component} from 'react';
import './recommendations.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Recommendations extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 4,
      slidesToScroll: 4
    }
    return (
      <div className='recomendationScoll'>
        <h1>Похожі фільми</h1>
        <Slider {...settings}>
          {this.props.recommendations.map(i => {
            return <div>
              {i.poster_path == null
                ? <img
                  className='recommendatioms'
                  src={`https://i.stack.imgur.com/y9DpT.jpg`}/>
                : <img
                  className='recommendatioms'
                  src={`https://image.tmdb.org/t/p/original${i.poster_path}`}
                  onClick={() => this.props.openFilm(i.id)}/>
              }
              <p>{i.original_title}</p>
            </div>
          })}
        </Slider>
      </div>

    );
  }
}

