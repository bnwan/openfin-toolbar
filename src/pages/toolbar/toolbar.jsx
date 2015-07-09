'use strict';

import React from 'react';
import './styles.styl';

export default class Toolbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  componentDidMount() {
    this.currentWindow = window.fin.desktop.Window.getCurrent();
    this.currentWindow.defineDraggableArea(this.refs.logo.getDOMNode());
  }

  expandWindow() {
    let isExpanded = this.state.isExpanded;
    let width;

    if(this.state.isExpanded){
      width = 100;
      isExpanded = false;
    } else {
      width = 350;
      isExpanded = true;
    }

    if(!isExpanded){
      this.setState({isExpanded: isExpanded});
    }

    this.currentWindow.animate({
      size: {
        width: width,
        duration: 250
      }
    }, {
      interrupt: true
    }, (e) => {
      if(isExpanded){
        this.setState({isExpanded: isExpanded});
      }
    });
  }

  renderExpandedOptions() {
    if(this.state.isExpanded){
      return (
        <span className='menu-items'>
          <li><a><i className='fa fa-comment fa-2x'></i></a>
            <span className='badge' data-badge='3'></span>
          </li>
          <li><a><i className='fa fa-check fa-2x'></i></a>
            <span className='badge' data-badge='1'></span>
          </li>
          <li><a><i className='fa fa-paper-plane fa-2x'></i></a>
            <span className='badge' data-badge='2'></span>
          </li>
          <li><a><i className='fa fa-bookmark fa-2x'></i></a></li>
          <li><a><i className='fa fa-cog fa-2x'></i></a></li>
        </span>
      );
    }

    return null;
  }

  render() {
    let arrow = 'fa fa-chevron-right fa-1x';
    if(this.state.isExpanded){
      arrow = 'fa fa-chevron-left fa-1x';
    }

    return (
      <div className='container toolbar'>
        <ul className='actions'>
          <li classNmae='logo' ref='logo'><i className='fa fa-bullseye fa-2x'></i></li>
          <li className='arrow'><a onClick={() => this.expandWindow()}><i className={arrow}></i></a></li>
          {this.renderExpandedOptions()}
        </ul>
      </div>
    );
  }
}
