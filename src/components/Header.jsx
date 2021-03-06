import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import vinylImage from '../images/vinyl.png';
import mittyCover from '../images/covers/thesecretlifeofwaltermitty.jpg';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond"></span> */}
      <VinylIcon />
    </div>
    <div className="content">
      <div className="inner">
        <h1>The Secret Life of Walter Mitty</h1>
        <h3>白日梦想家</h3>
        <p>TO SEE THE WORLD, THINGS DANGEROUS TO COME TO</p>
        <p>TO SEE BEHIND WALLS, TO DRAW CLOSER, TO FIND EACH OTHER AND TO FEEL. </p>
        <p>THAT IS THE PURPOSE OF LIFE.</p>
      </div>
      <div className="album-container">
        <img className="album-cover" src={mittyCover} alt="the secret life of walter mitty" />
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            专辑介绍
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            歌曲推荐
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            关于电影
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            打赏
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

const VinylIcon = styled.img.attrs({
  src: vinylImage,
  className: 'icon',
})`
  width: 100%;
  -webkit-animation: spin 10s linear infinite;
  -moz-animation: spin 10s linear infinite;
  animation: spin 10s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
