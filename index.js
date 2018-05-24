for(let i=0; i < 10; i++){
  document.getElementById("button"+i).addEventListener("click", function( event ) {

   document.getElementById("input").value += i ;

  })};

for(let x = 1; x < 6; x++) {
  document.getElementById("operator"+x).addEventListener("click", function( event ) {
    document.getElementById("input").value += this.value ;

  })};

document.getElementById("clear").addEventListener("click", function( event ) {
    document.getElementById("input").value=''
});

document.getElementById("total").addEventListener("click", function( event ) {
    document.getElementById("input").value = eval(document.getElementById("input").value) ;
});
