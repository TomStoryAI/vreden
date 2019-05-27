var express  = require('express');
var port = process.env.PORT || 3000;

const app = express();
app.use(express.static(__dirname + '/dist/vredenOnline'));
app.get('*', function(req, res) {
  res.sendFile('./dist/vredenOnline/index.html', { root: __dirname }); 
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}!`);
});

