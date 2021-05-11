const dom = {
    btn1: document.querySelector('.one'),
    btn2: document.querySelector('.two'),
    btn3: document.querySelector('.three'),
    p: document.querySelector('p')
   }
   
let promise = new Promise(function(resolve, reject) {   
       dom.btn1.onclick = () =>{resolve()}
       
      
        
   })
   .then(function(){
       fetch('Toys.json')
   .then(response => response.json())
   .then(data =>console.log(data))})
   .then(function(resolve, reject){
       dom.btn2.onclick = () => {resolve()}
   })
   .then(function(){
    fetch('Colors.json')
.then(response => response.json())
.then(data =>console.log(data))})
.then(function(){
    dom.btn3.onclick = () => {
        resolve()
    }

})
.then(function(){
    fetch('Vegtables.json')
.then(response => response.json())
.then(data =>console.log(data))})
.then(
        console.log("finish")
    )




    

    
  
  
  


   
 
  
