var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles=
{
'article-one' :{
    title:'Article one | Katakam',
    heading:'Article one',
    date: 'sept 5 2018',
    content: `    
            <p>
                This is the content of teh first article
            </p>
            <p>
                This contains all abouot article one.
                This is done just like that.
            </p>`
},
'article-two' :{
    title:'Article Two | Katakam2',
    heading:'Article one',
    date: 'sApril 1  2018',
    content: `    
            <p>
                This is the content of 2nd article
            </p>
            <p>
                This contains all abouot article two.
                here the date is 1st april
            </p>`
    
},
'article-three':{
    title:'Article Three | Katakam3',
    heading:'Article Three',
    date: 'April 3 2018',
    content: `    
            <p>
                This is the content of 3rd article
            </p>
            <p>
                This contains all abouot article Three.
                Edited on the date 2nd april.
            </p>`

    
}
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function createTemplate(data){
var title=data.title;
var date=data.date;
var content=data.content;
var heading=data.heading;

var htmlTemplate=`

<html>
    <head>
    
    <title>
        ${title}
    </title> 
    <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link href="/ui/style.css" rel="stylesheet" />
    </head>

<body>
    <div class="container">
        <div>
        <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}    
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </div>
    
</body>    


</html>


`;
return htmlTemplate;
}
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function(req,res){
var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
var counter=0;
app.get('/counter', function(req,res){
  counter = counter +1;
  res.send(counter.toString());
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
