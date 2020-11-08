// Create an accordion 

// Get a each button with a unique id that on click opens an accordion, maybe for loops

// Vanilla JS 
const btn = document.getElementsByClassName('question');
const ans = document.getElementsByClassName('answer')


    for (let i = 0; i < btn.length; i++) {
       btn[i].addEventListener('click', function () {
           ans[i].classList.toggle('pad')
       })
       }
       
