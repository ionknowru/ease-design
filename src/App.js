import React from 'react';

import Header from './components/Header';

import './scss/app.scss';

import lampBg from './assets/img/lamp-stand.jpg';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Header />

          <div className="content">
            <div className="content__inner">

              <div className="content__left">

                <div className="description">
                  <p className="description__text">Collection of lighting is inspired by the geometric<br /> 
                    works of the great Suprematist artists Kissitzky and<br /> 
                    Kazimir Malevich. <br /> 
                    <br /> 
                    Suprematism is a modernist movement in the art of <br /> 
                    the early twentieth century, focused on the basic <br /> 
                    geometric forms, such as circles, squares, lines and <br /> 
                    rectangles. The geometric structure of the lamps will <br /> 
                    always look like a small art objects in your house. 
                  </p>
                </div>

                <div className="lamp-info">
                  <div className="lamp-info__block">
                    <p className="lamp-info__block__text"><span>Material:</span> Copper</p><br />
                    <p className="lamp-info__block__text"><span>Dimensions (cm):</span> H 33 x W 15 x D 15</p><br />
                    <p className="lamp-info__block__text"><span>New Weight</span> 2,5 kg</p><br />
                    <p className="lamp-info__block__text"><span>Electrification</span><br /> LED 10W | G9 | 220-240V | 50 Hz</p><br />
                  </div>
                </div>

              </div>

              <div className="content__right">

                <div className="lamp-preview">
                  <img src={lampBg} alt="lamp preview" />
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
