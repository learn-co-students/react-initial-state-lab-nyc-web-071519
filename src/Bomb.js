// your Bomb code here!
import React, { Component } from 'react';
import ImageSlider from './ImageSlider'

export default class Bomb extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render(){
        return(
            this.state.secondsLeft===0 ? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        )
    }
}