'use strict';

import io from 'socket.io-client';
import app from 'ampersand-app';

app.extend({
  init: () => {
    const url = 'http://localhost:8085';

    io.connect(url);
    app.notification = io.connect(url + '/notification');
    app.chat = io.connect(url + '/chat');
    app.todo = io.connect(url + '/todo');
  }
});

export default app;
