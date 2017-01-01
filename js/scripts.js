
  var list = document.getElementById('Lista');
  var add = document.getElementById('addElem');
  var liByTagName = document.getElementsByTagName('li');
 
  add.addEventListener('click', function() {
  list.innerHTML += '<li>item '+ liByTagName.length + '</li>'});
  
