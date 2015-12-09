var $ = function(target) {
  this.target = target;
  var selector = target.charAt(0)

  var selectorTag = target.slice(1)
    if (selector === "#"){

      var element = document.getElementById(selectorTag);
    } else if (selector === ".") {
      var element = document.getElementsByClassName(selectorTag)
    } else {
      var element = document.getElementsByTagName(target);
    }

    element.hide = function(){
      if (isArray(element)){
        for (var i = 0; i < element.length; i++){
          element[i].style.visibility = 'hidden'}
      } else {
        element.style.visibility = 'hidden'
      }
    }

    element.show = function(){
      if (isArray(element)){
        for (var i = 0; i < element.length; i++){
          element[i].style.visibility = 'visible'}
      } else {
        element.style.visibility = 'visible'
      }
    }

    element.addClass = function(className){
      if (isArray(element)){
        for (var i = 0; i < element.length; i++){
          element[i].classList.add(className)}
      } else {
        element.classList.add(className)
      }
    }

    element.removeClass = function(className){
      if (isArray(element)){
        for (var i = 0; i < element.length; i++){
          element[i].classList.remove(className)}
      } else {
        element.classList.remove(className)
      }
    }

    element.on = function(eventTrigger, callback){
      if (isArray(element)){
        for (var i = 0; i < element.length; i++){
          element[i].addEventListener(eventTrigger, function(e){
            return callback()
          })
        }
      } else {
        addEventListener(eventTrigger, function(e){
          return callback()
        })
      }
    }


    element.trigger = function(eventTrigger){
      evt = new Event(eventTrigger);
      if (isArray(element)){
        for (var i = 0; i < element.length; i++){
          element[i].dispatchEvent(evt)
        }
      } else {
        element.dispatchEvent(evt)
      }
    }
    element.html = function(content){
        if (content === undefined){
          return element.innerHTML
        } else {
         if (isArray(element)){
          for (var i = 0; i < element.length; i++){
            element[i].innerHTML = content
          }
        } else {
            element.innerHTML = content
        }
      }
    }

    element.append = function(newElement, content){
      if (isArray(element)){
        for (var i = 0; i < element.length; i++){
          var appendedElement = element[i].appendChild(document.createElement(newElement));
          appendedElement.innerHTML = content
        }
      } else {
          var appendedElement = element.appendChild(document.createElement(newElement));
          appendedElement.innerHTML = content
      }
    }




    function isArray(o) {
      return typeof o === "object" && o.length !== undefined;
    }

    return element
}

  $.ajax = function(args) {

    var myPromise = new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function( response ) {
          if (xhr.readyState === 4 ) {
            if(xhr.status === 200){
              resolve(xhr.response);
            }
            else {
              reject(xhr.response);
            }
          }
        }
    xhr.open(args.method, args.url, true);
    xhr.send(null);
  })
    return myPromise;
}

$.ready = function(fn) {
 if ( document.readyState === 'complete'  ) {
       return fn();
   }
 document.addEventListener( 'DOMContentLoaded', fn, false );
}
