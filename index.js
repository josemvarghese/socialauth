var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


// var index = require('./routes/index');
// var tasks = require('./routes/tasks');
// var login = require('./routes/login');


var port = 3000;
var app = express();


// view engine
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','ejs');
// app.engine('html',require('ejs').renderFile);



// Set static folder

app.use(express.static(path.join(__dirname,'views')));



// Body parser middileware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));




// app.use('/api',tasks);
// app.use('/api',login);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// app.use('/',index);

app.listen(port, function() {
	console.log('server running '+port);
});




