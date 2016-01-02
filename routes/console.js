var dir = 'views/console/';

function indexPage(req,	res){
  res.sendfile(dir + 'index.html');
}


exports.indexPage = indexPage;