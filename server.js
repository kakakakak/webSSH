var express = require('express')
,	app = express()
,	path = require('path')
,	http = require('http').Server(app);


var routesDir = './routes';

var indexRoutes = require(routesDir + "/index");
var consoleRoutes = require(routesDir + "/console");


app.set('port', process.env.PORT || 9000);
app.use(express.static(path.join(__dirname, 'public')));


//首页
app.get('/', indexRoutes.indexPage);
app.get('/index.*', indexRoutes.indexPage);

//console页面
app.get('/console', consoleRoutes.indexPage);
app.get('/console/', consoleRoutes.indexPage);
app.get('/console/index.*', consoleRoutes.indexPage);


//error
app.get('/', indexRoutes.errorPage);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});