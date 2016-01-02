var dir = 'views/';

function indexPage(req,	res){
  res.sendfile(dir + 'index.html');
}

function errorPage(req,	res){
  res.sendfile(dir + 'error.html');
}


exports.indexPage = indexPage;
exports.errorPage = errorPage;