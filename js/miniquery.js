$ = miniQuery

function miniQuery(selector) {

  var sweetSelector = function(selector){
    if (selector.indexOf("#") == 0) {
      return document.getElementById(selector.substring(1));
    } else if (selector.indexOf(".") == 0) {
     return document.getElementsByClassName(selector.substring(1));
   } else {
     return document.getElementsByTagName(selector);
   }
 };

  var element = sweetSelector(selector);
  var elementLength = element.length


  element.hide = function() {
    if (!!elementLength) {
      for (i = 0; i < elementLength; i++) {
        element[i].style.visibility = "hidden";
      }
    } else {
      element.style.visibility = "hidden";
    }
  }

  element.show = function(){
    if (!!elementLength) {
      for (i = 0; i < elementLength; i++) {
        element[i].style.visibility = "visible";
      }
    } else {
      element.style.visibility = "visible";
    }
  };

  element.addClass = function(newClass){
    if (!!elementLength) {
      for (i = 0; i < elementLength; i++) {
        element[i].classList.add(newClass) ;
      }
    } else {
      element.classList.add(newClass);
    }
  };

  element.removeClass = function(oldClass){
    if (!!elementLength) {
      for (i = 0; i < elementLength; i++) {
        element[i].classList.remove(oldClass) ;
      }
    } else {
      element.classList.remove(oldClass);
    }
  };

  element.on = function(eventName, callback) {
    // debugger;
    if (!!elementLength) {
      for (i = 0; i < elementLength; i++) {
        element[i].addEventListener(eventName, callback)
      }
    } else {
      element.addEventListener(eventName, callback)
    }
  }


  element.trigger = function(eventName) {
    var evt = new Event(eventName)
    if (!!elementLength) {
      for (i = 0; i < elementLength; i++) {
        element[i].dispatchEvent(evt);
      }
    } else {
      element.dispatchEvent(evt);
    }
  }

  return element

}

miniQuery.ready = function(fn) {
  if ( document.readyState === 'complete'  ) {
        return fn();
    }
  document.addEventListener( 'DOMContentLoaded', fn, false );
}


miniQuery.ajax = function(options){
  var url = options['url']
  var type = options['type']
  var data = options['data']
  var myPromise = new Promise(function(resolve, reject){
  var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if(httpRequest.readyState === 4) {
        if(httpRequest.status === 200) {
          resolve(httpRequest.response);
        } else {
          reject(httpRequest.response);
        }
      }
    }
    httpRequest.open(type, url, true)
    httpRequest.send(data)
  })
  return myPromise
}

