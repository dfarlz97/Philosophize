/* 

create array of objects to store philosopher info: 
*/
var images = ['/Users/dennis/desktop/thales.jpg', '/Users/dennis/desktop/socrates.jpg', '/Users/dennis/desktop/aristotle.jpg', '/Users/dennis/desktop/plotinos.jpg', '/Users/dennis/desktop/augustine.jpg', '/Users/dennis/desktop/avicenna.jpg', '/Users/dennis/desktop/abelard.jpg', '/Users/dennis/desktop/maimonides.jpg', '/Users/dennis/desktop/hobbes.jpg', '/Users/dennis/desktop/locke.jpg', '/Users/dennis/desktop/voltaire.jpg', '/Users/dennis/desktop/marx.jpg', '/Users/dennis/desktop/nietzsche.jpg', '/Users/dennis/desktop/sartre.jpg', '/Users/dennis/desktop/confucius.jpg', '/Users/dennis/desktop/plato.jpg', '/Users/dennis/desktop/marcus.jpg', '/Users/dennis/desktop/boethius.jpg', '/Users/dennis/desktop/anselm.jpg', '/Users/dennis/desktop/averroes.jpg', '/Users/dennis/desktop/aquinas.jpg', '/Users/dennis/desktop/machiavelli.jpg', '/Users/dennis/desktop/descartes.jpg', '/Users/dennis/desktop/engels.jpg', '/Users/dennis/desktop/heidegger.jpg'];
var index = 0;


function buildImage() {
    let img = document.createElement('img')
    img.src = images[index];
    img.width = 200;
    img.height = 200;
    document.getElementById('content').appendChild(img);
  }
  

function changeImage(){
      let img = document.getElementById('content').getElementsByTagName('img')[0]
      index++;
      index = index % images.length; 
      img.src = images[index];
    }


function addText() {
    const para = document.createElement('p');
    const node = docuement.createTextNode('thales');
    para.appendChild(node);
    const element = document.getELementById('')
    element.appendChild(para)
}



images.forEach (addText);


