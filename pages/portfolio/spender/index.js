import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Carousel from 'nuka-carousel';

exports.data = {
  title: 'Spender',
  color: 'green',
  description: 'Spender is, or will be, an iOS app for tracking spending. It is a work in progress.',
  image: '/images/iphone.png'
};

export default class Spender extends Component {

  constructor() {
    super();
    this.handleLoadedImage = this.handleLoadedImage.bind(this);
  }

  handleLoadedImage() {
    this.refs.carousel.setDimensions();
    // This is terrible.
    let slides = [].slice.call(document.querySelectorAll('.slider-slide'));
    slides.forEach((slide) => {
      slide.style.height = '100%';
    });
  }

  render () {
    let {description} = exports.data;

    return (
      <div className='portfolio'>
        <Helmet
            meta={[
              { name: 'description', content: description },
              { property: 'og:description', content: description },
              { name: 'twitter:title', content: description },
              { name: 'twitter:description', content: description }
            ]}
            title='Spender'
        />
        <div className='portfolio-carousel'>
          <Carousel decorators={[]} ref='carousel'>
            <img src='/images/iphone.png' onLoad={this.handleLoadedImage}/>
            <img src='/images/iphone.png'/>
            <div className='video-container'>
              <video className='video-player' autoPlay loop>
                <source src='/videos/nomad.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel>
        </div>
        <div className='content-container'>
          <h1 className='page-title'>{'Spender'}</h1>
          <div className='row'>
            <div className='col-xs-12 col-sm-8 col-sm-offset-4'>
              <p>{'Spender is personal project, where I’m keeping track of my spending through a simple iOS app.'}</p>
              <p>{'Mint is great, but it doesn’t keep track of cash spending. And all the other different spending trackers out there didn’t meet my specific needs.'}</p>
              <p>{'So I’m building my own version.'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
