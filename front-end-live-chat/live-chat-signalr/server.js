const express = require('express');
const app = express();
app.use(express.static('./dist/live-chat-signalr'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/live-chat-signalr'}
  );
});
app.listen(process.env.PORT || 8080);