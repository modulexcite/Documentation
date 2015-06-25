var express     = require('express');
var app         = express();

// Serve static files (css, js, images)
app.use(express.static('public'));

// for file manipulation
var fs          = require('fs');

// Set the template engine to jade
app.set('view engine', 'jade');
// Set the views folder to ./views
app.set('views', './views');

// MARKDOWN RENDER ENGINE
app.engine('md', function(filePath, options, callback){

    // Markdown to HTML converter
    var showdown    = require('showdown');
    var converter   = new showdown.Converter();

    var markdown_page = fs.readFile(filePath, options, function(err, data){
        // throw error, if any
        if(err) throw err;

        // transform the whole file into HTML code - yup, that's that simple
        var html_render = converter.makeHtml(data);

        // callback(error, data)
        return callback(null, html_render);
    });
});

// WHAT'S NEW page
app.get('/whats-new', function(req, res){

    // Showdown to compile md to html
    var showdown    = require('showdown');
    var converter   = new showdown.Converter();

    fs.readFile('./md/whats-new/whats-new.md', {"encoding" : "utf-8", "flag" : "r"}, function(err, data){
        if (err) throw err;

        // transform markdown file into html
        var whats_new_html = converter.makeHtml(data);

        // render the page
        res.render('whats-new', {content : whats_new_html, currentUrl: "/whats-new"});
    });
});

// DEFAULT PAGE
app.get('/', function (req, res) {
  res.render('index', {});
});

app.listen(3000, function(){
    console.log("Server running and listening on localhost:3000...")
});