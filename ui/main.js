console.log('Loaded!');


var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

var img = document.getElementById('madi');
var marginLeft=0;
function moveRight (){
    marginLeft=marginLeft+10;
    img.style.marginLeft = marginLeft + 'px';
    
}

img.onclick =function(){
  var interval=setInterval(moveRight,100);
    
};

var button = document.getElementById('counter');
button.onclick = function(){
  
  //create a request boject
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange =function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //take some action
        if(request.status === 200){
            
            var counter= request.responseText;
            var span=document.getElementById('count');
            span.innerHTML = counter.toString();
        }
        
        
    }
      
  };
  
  //make a request
  request.open=('GET','http://katakam6416.imad.hasura-app.io/counter',true);
  request.send(null);
  
};