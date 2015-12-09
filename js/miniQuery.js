$ = miniQuery

function miniQuery(selector){

  if (selector.charAt(0) === '#') {
    var element = document.getElementById(selector.substr(1));
  }
  else if (selector.charAt(0) === '.') {
    var element = document.getElementsByClassName(selector.substr(1));
  }
  else {
    var element = document.getElementsByTagName(selector);
  };

  element.hide = function() {
    if( selector.charAt(0) === '#' ){
      return element.style.display = 'none';
    }
    else {
      for( var i = 0; i < element.length; i++ ){
        element[i].style.display = 'none';
      }
    }
  };

  element.show = function() {
    if( selector.charAt(0) === '#' ){
      return element.style.display = 'block';
    }
    else {
      for( var i = 0; i < element.length; i++ ){
        element[i].style.display = 'block';
      }
    }
  };

  element.addClass = function(css) {
    if( selector.charAt(0) === '#' ){
      return element.classList.add(css);
    }
    else {
      for( var i = 0; i < element.length; i++ ){
        element[i].classList.add(css);
      }
    }
  };

  element.removeClass = function(css) {
    if( selector.charAt(0) === '#' ){
      return element.classList.remove(css);
    }
    else {
      for( var i = 0; i < element.length; i++ ){
        element[i].classList.remove(css);
      }
    }
  };

  element.html = function(html) {
    if (html === undefined) {
      return element.innerHTML
    }
    else {
      return element.innerHTML=html;
    }
  };

  element.append = function(html, tag) {
    var add = element.appendChild(document.createElement(tag))
    add.innerHTML=html
  };

  element.on = function(event, action) {
    if( selector.charAt(0) === '#' ){
      element.addEventListener(event, function(e){
        return action(e)
      });
    }
    else {
      for( var i = 0; i < element.length; i++ ){
        element[i].addEventListener(event, function(e){
          return action(e)
        });
      }
    }
  };

  element.trigger = function(name){
    var event = new Event(name)
    if( selector.charAt(0) === '#' ){
      return element.dispatchEvent(event)
    }
    else {
      for( var i = 0; i < element.length; i++ ){
        return element[i].dispatchEvent(event)
      }
    }
  };
  return element;
};

$.ajax = function(object){
  var url = object['url']
  var type = object['type']

  var myPromise = new Promise( function( resolve, reject ) {
    var oReq = new XMLHttpRequest();

    oReq.onreadystatechange = function( response ) {
      if (oReq.readyState == 4) {
        if (oReq.status <= 299) {
          resolve(oReq.response);
        } else {
          reject(oReq.response);
        }
      }
    }
    oReq.open(type, url, true);

    if (type == 'POST' || type == 'PUT') {
      oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    oReq.send(null);
  })
  return myPromise;
};

$.ready = function(fn){
  if ( document.readyState === 'complete' ){
    return fn()
  }
  document.addEventListener( 'DOMContentLoaded', fn, false );
};
