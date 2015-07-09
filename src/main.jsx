import React from 'react';
import windowService from './services/window-service';

export default class Main extends React.Component {

  constructor(props) {
    super(props);

    window.chrome.desktop.getDetails((details) => {
      console.log(details);
    });
  }

  show() {
    let options = {
      name: 'toolbar',
      frame: false,
      autoShow: false,
      url: '/toolbar',
      defaultWidth: 100,
      defaultHeight: 66,
      minHeight: 66,
      width: 100,
      height: 66,
      cornerRounding: {
        width: 25,
        height: 30
      },
      alwaysOnTop: true,
      saveWindowState: false
    };

    windowService.open(options, (childWindow) => {
      console.log(childWindow);
    });
  }

  render () {
    return (
      <div className='container'>
        <header role='banner'>
          &nbsp;
        </header>
        <button className='button' onClick={() => this.show()}>toolbar</button>
      </div>
    );
  }
}
