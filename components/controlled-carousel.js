/**
 * Created by grahamturk on 2/13/16.
 */

import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, selectedDirection) {
    console.log('selected=' + selectedIndex + ', direction=' + selectedDirection);
    this.setState({
      index: selectedIndex,
      direction: selectedDirection,
    });
  }

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} pauseOnHover={true}>
        <CarouselItem>
          <div align="center">
            <img width={423} height={334} alt="300x500" src="heatmap.jpg" align="middle"/>
            <h3>Princeton Building Heatmap</h3>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div align="center">
            <img width={249} height={60} alt="500x500" src="facilitiesLogo.png" align="middle"/>
            <h3>Room Reservation Confirmations</h3>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div align="center">
            <img width={500} height={151} alt="500x300" src="solstice.png" align="middle"/>
            <h3>Solstice Initiative Digital Platform</h3>
          </div>
        </CarouselItem>
      </Carousel>
    );
  }
}
