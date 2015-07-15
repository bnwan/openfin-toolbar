'use strict';

import React from 'react';
import './styles.styl';
import '../../io';
import app from 'ampersand-app';

export default class Toolbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isExpandedVertical: false,
      isExpandedHorizontal: false,
      commentCount: 0
    };

    app.init();
  }

  componentDidMount() {
    this.currentWindow = window.fin.desktop.Window.getCurrent();
    this.currentWindow.defineDraggableArea(this.refs.logo.getDOMNode());

    this.initializeSocketEvents();
  }

  initializeSocketEvents() {
    app.notification.on('tick', (data) => {
      this.setState({commentCount: data.tick});
    });
  }

  expandWindowVertical() {
    let isExpandedVertical = this.state.isExpandedVertical;
    let width;
    let height;

    if(this.state.isExpandedVertical){
      width = 100;
      isExpandedVertical = false;
    } else {
      width = 350;
      isExpandedVertical = true;
    }

    if(this.state.isExpandedHorizontal){
      height = 66;
    }

    if(!isExpandedVertical){
      this.setState({isExpandedVertical: isExpandedVertical});
    }

    this.currentWindow.animate({
      size: {
        width: width,
        height: height,
        duration: 250
      }
    }, {
      interrupt: true
    }, (e) => {
      if(isExpandedVertical){
        this.setState({
          isExpandedVertical: isExpandedVertical,
          isExpandedHorizontal: false
        });
      }
    });
  }

  expandWindowHorizontal(section) {
    let isExpandedHorizontal = this.state.isExpandedHorizontal;
    let height;

    if(this.state.isExpandedHorizontal){
      height = 66;
      isExpandedHorizontal = false;
    } else {
      height = 300;
      isExpandedHorizontal = true;
    }

    if(!isExpandedHorizontal){
      this.setState({isExpandedHorizontal: isExpandedHorizontal});
    }

    this.currentWindow.animate({
      size: {
        height: height,
        duration: 250
      }
    }, {
      interrupt: true
    }, (e) => {
      if(isExpandedHorizontal){
        this.setState({isExpandedHorizontal: isExpandedHorizontal});
      }
    });
  }

  renderExpandedOptions() {

    let commentsBadge = this.state.commentCount !== 0 ? <span className='badge' data-badge={this.state.commentCount}></span> : null;

    if(this.state.isExpandedVertical){
      return (
        <span className='menu-items'>
          <li><a onClick={() => this.expandWindowHorizontal(this.section.comment)}><i className='fa fa-comment fa-2x'></i></a>
            {commentsBadge}
          </li>
          <li><a onClick={() => this.expandWindowHorizontal(this.section.check)}><i className='fa fa-check fa-2x'></i></a>
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
    if(this.state.isExpandedVertical){
      arrow = 'fa fa-chevron-left fa-1x';
    }

    return (
      <div className='container toolbar'>
        <ul className='actions'>
          <li classNmae='logo' ref='logo'><i className='fa fa-bullseye fa-2x'></i></li>
          <li className='arrow'><a onClick={() => this.expandWindowVertical()}><i className={arrow}></i></a></li>
          {this.renderExpandedOptions()}
        </ul>
      </div>
    );
  }
}
