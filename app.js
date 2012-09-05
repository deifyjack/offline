
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});
app.get('/content',function(req,res){
    res.send({'content':'最简单来说，一个离线网络应用程序就是一个URL的列表——HTML，CSS，JavaScript，图片，或者其他类型的资源。离线网络应用程序的注意指向一个叫做名单文件并用于定位网络服务器上任何文本文件的列表。用于执行HTML5离线以用程序的网络浏览器将从名单文件中读取URL列表，下载这些资源，将他们在本地缓存，并自动在这些本地副本改变时保持他们更新。当你尝试在没有网络连接时访问网络应用程序，你的网络浏览器将自动切换并使用本地代替。'});
});
app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
