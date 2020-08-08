strip = document.querySelector('#strip');
strip.parentElement.appendChild(document.createElement('p').appendChild(document.createTextNode(strip.alt)));
strip.parentElement.appendChild(document.createElement('br'));
strip.parentElement.appendChild(document.createElement('br'));
strip.parentElement.appendChild(document.createElement('p').appendChild(document.createTextNode(strip.title)));
