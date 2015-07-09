'use strict';
import _ from 'lodash';

let options = {
  name: 'about-page',
  autoShow: false,
  url: '/about',
  width: 640,
  height: 480
};

class WindowService {


  open(options, callback) {
    const child = new window.fin.desktop.Window(options, () => {
      child.show();
    });
  }
}

export default new WindowService();
