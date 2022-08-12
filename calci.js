
 document.getElementById('add2').addEventListener('click', function()
 {document.getElementById("result").value +="%"});

 document.getElementById('add3').addEventListener('click', function()
 {
    document.getElementById("result").value=document.getElementById("result").value.substring(0,document.getElementById("result").value.length-1)});

 document.getElementById('add4').addEventListener('click', function()
 {document.getElementById("result").value +="/"});

 document.getElementById('add5').addEventListener('click', function()
 {document.getElementById("result").value +=7});

 document.getElementById('add6').addEventListener('click', function()
 {document.getElementById("result").value +=8});

 document.getElementById('add7').addEventListener('click', function()
 {document.getElementById("result").value +=9});

 document.getElementById('add8').addEventListener('click', function()
 {document.getElementById("result").value +="*"});

 document.getElementById('add9').addEventListener('click', function()
 {document.getElementById("result").value +=4});

 document.getElementById('add10').addEventListener('click', function()
 {document.getElementById("result").value +=5});

 document.getElementById('add11').addEventListener('click', function()
 {document.getElementById("result").value +=6});

 document.getElementById('add12').addEventListener('click', function()
 {document.getElementById("result").value +="-"});

 document.getElementById('add13').addEventListener('click', function()
 {document.getElementById("result").value +=1});

 document.getElementById('add14').addEventListener('click', function()
 {document.getElementById("result").value +=2});

 document.getElementById('add15').addEventListener('click', function()
 {document.getElementById("result").value +=3});

 document.getElementById('add16').addEventListener('click', function()
 {document.getElementById("result").value +="+"});

 document.getElementById('add17').addEventListener('click', function()
 {document.getElementById("result").value += 00});

 document.getElementById('add18').addEventListener('click', function()
 {document.getElementById("result").value +=0});

 document.getElementById('add19').addEventListener('click', function()
 {document.getElementById("result").value += "."});


 document.getElementById('add20').addEventListener('click', function()
 { 
    var result=eval(document.getElementById("result").value)
 document.getElementById('result').value=result
 localStorage.setItem("answer",result);
});

document.getElementById('add1').addEventListener('click', function()
{document.getElementById("result").value =''});



// new js code starting but Comment

// document.getElementById('add1').addEventListener('click', function(e)
//  {document.getElementById("result").value=''})

//  document.getElementById('add2').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add3').addEventListener('click', function()
//  {
//     document.getElementById("result").value=document.getElementById("result").value.substring(0,document.getElementById("result").value.length-1)});

//  document.getElementById('add4').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add5').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add6').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add7').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add8').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add9').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add10').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add11').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add12').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add13').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add14').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add15').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add16').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add17').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add18').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.value)})

//  document.getElementById('add19').addEventListener('click', function(e)
//  {document.getElementById('result').value+=(e.target.innerText)})

 
//  document.getElementById('add20').addEventListener('click', function( )
//  { 
//     var result=eval(document.getElementById("result").value)
//  document.getElementById('result').value=result

//  localStorage.setItem("answer",result)});
