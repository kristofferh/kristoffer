import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles';

export default class ImageLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      doneAnimating: false
    };
  }

  componentDidMount() {
    const image = new Image();
    image.src = this.props.img;
    image.onload = () => {
      this.setState({loaded: true}, () => {
        this.img.addEventListener('animationend', () => {
          this.setState({doneAnimating: true});
        }, false);
      });
    };
  }

  render() {
    return (
      <div className={classNames('image-loader', {'image-loader--placeholder': this.props.aspectRatio})} >
        {(this.props.placeholder && !this.state.doneAnimating) && <img className={classNames('placeholder', {'fade-out': this.state.loaded})} src={this.props.placeholder} />}
        {this.props.aspectRatio && <div style={{paddingBottom: `${this.props.aspectRatio * 100}%`}}></div>}
        {this.state.loaded && <img ref={(node) => this.img = node} className='img' src={this.props.img} />}
      </div>
    );
  }
}

ImageLoader.propTypes = {
  aspectRatio: PropTypes.number,
  img: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};
