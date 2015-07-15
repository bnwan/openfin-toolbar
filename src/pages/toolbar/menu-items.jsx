'user strict';

import React from 'react';

export default class MenuItems extends React.Component {
  constructor(props){
    super(props);

    this.section = {
      comment: 'comment',
      check: 'check'
    };
  }

  render() {
    let commentsBadge = this.state.commentCount !== 0 ? <span className='badge' data-badge={this.state.commentCount}></span> : null;

    return (
      <span className='menu-items'>
        <li><a onClick={() => this.props.expandWindowHorizontal(this.section.comment)}><i className='fa fa-comment fa-2x'></i></a>
          {commentsBadge}
        </li>
        <li><a onClick={() => this.props.expandWindowHorizontal(this.section.check)}><i className='fa fa-check fa-2x'></i></a>
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
}
