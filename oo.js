var request = new XHMLHttpRequest();

request.open('GET', 'https://www.extreme-ip-lookup.com/json', true);
request.onload = function(){
  var data = JSON.parse(this.response);
  var test = document.getElementById("test");
  test.innerHTML = data;
}
request.send();