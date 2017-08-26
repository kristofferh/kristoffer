import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Carousel from 'nuka-carousel';

exports.data = {
  order: 0,
  title: 'Nomad',
  color: 'purple',
  description: 'Fixing one part of a broken health system.',
  aspectRatio: 1,
  image: '/images/milestones/computer.png',
  thumb: '/images/milestones/computer-small.png',
  styles: {
    background: '#fafafa'
  }
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
    const {description, title, styles} = exports.data;

    return (
      <div className='portfolio'>
        <Helmet>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:title' content={title} />
          <meta name='twitter:description' content={description} />
          <title>{title}</title>
        </Helmet>
        <div className='portfolio-carousel' style={styles}>
          <Carousel decorators={[]} ref='carousel'>
            <img src='/images/milestones/computer.png' onLoad={this.handleLoadedImage}/>
            <div className='video-container'>
              <video className='video-player' autoPlay loop>
                <source src='/videos/nomad.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel>
        </div>
        <div className='content-container'>
          <h1 className='page-title'>{title}</h1>
          <div className='row'>
            <section className='col-xs-12 col-sm-8 col-sm-offset-4'>
              <p>{'Nomad is a healtcare marketplace for doctor and nurses, and the people that hire them.'}</p>
              <p>{'It’s a big industry, fraught with all the issues that plague the rest of the healthcare system in the United States: slow moving bureaucracy, inefficiencies galore, technology from 1988, and everything is way more expensive than it needs to be. We’re changing all that.'}</p>
              <p>{'We are building a healthcare marketplace that is easy to navigate, user-friendly, efficient, and most importantly:'} <span className='highlight'>{'much cheaper for everyone.'}</span></p>
              <p>{'It’s like it’s not 1988 anymore!'}</p>
            </section>
            <section className='col-xs-12 col-sm-8'>
              <h2 className='sub-title'>What Do I do there?</h2>
              <p>{'A little bit of everything.'}</p>
              <p>{'I have a unique hybrid role at Nomad: I’m an Art Director, at the same time as I am the Lead Product Engineer. I spent half of my time designing features, and the other half building them.'}</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
