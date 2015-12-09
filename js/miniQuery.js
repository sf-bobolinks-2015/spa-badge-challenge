/*!
 * minQuery
 */
// $ = miniQuery


 function miniQuery(selector) {

    if (selector.charAt(0) === "#"){
      selector = selector.slice(1)
      var element = document.getElementById(selector)
    }else if(selector.charAt(0)=== "."){
      selector = selector.slice(1)
      var element = document.getElementsByClassName(selector)
    }else{
     var element = document.getElementsByTagName(selector)
    };

  console.log(element)

  element.hide = function(){
    if (!!element.length){
      for (i=0; i < element.length; i++){
        element[i].style.display = 'none'
        return element
      }
    }else{
      element.style.display = 'none'
      return element
    }
  };

  element.show = function(){
    if (!!element.length){
      for (i=0; i < element.length; i++){
        element[i].style.display = 'block'
        return element
      }
    }else{
        element.style.display = 'block'
        return element
    }
  };

  element.addClass= function(newClassName){
    if (!!element.length){
      for (i=0; i < element.length; i++){
        element[i].classList.add(newClassName)
        return element
      }
    } else {
      element.className = newClassName
      return element
    }
  };

  element.removeClass= function(className){
    if (!!element.length){
      for (i=0; i < element.length; i++){
        element[i].classList.remove(className)
        return element
      }
    } else {
      element.classList.remove(className)
      return element
    }
  };

  element.on = function(action, callBack){
      var evnt = new Event(action);
      element.addEventListener(action, callBack, false);
      return element;
    };

  element.trigger = function(action){
      var evnt = new Event(action);
      element.dispatchEvent(evnt);
      return element;
    };

  element.getHTML = function(){
    console.log("***GOTCHA***")
    console.log(element.innerHTML)
    return element.innerHTML
};

  element.setHTML = function(addition){
    console.log("*** SETTER ***")
    element.innerHTML = addition
  }

  return element

};

miniQuery.ready = function(fn) {
  if ( document.readyState === 'complete'  ) {
        return fn();
    }
  document.addEventListener( 'DOMContentLoaded', fn, false );
};



miniQuery.ajax = function(options) {
  var url = options["url"]
  var type = options["type"]
  var data = options["data"]
  var dataType = options["dataType"]
  var ourPromise = new Promise(function(resolve, reject){

      var httpRequest = new XMLHttpRequest();

      httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
          if(httpRequest.status === 200){
            setTimeout(function(){
              resolve(httpRequest.response);
            }, 5000)
          } else {
            reject(httpRequest.response);
          }
        }
      }

      httpRequest.open(type, url, true);
      httpRequest.send(data);
    })

    return ourPromise;
  }

