// document.getElementById('DecreaseBtn').onclick= function(){
//     let cval= parseInt(document.getElementById('val').textContent);
//     document.getElementById('val').textContent= cval-1;
//     console.log('value:',cval);
// };




//Mistake thi dekhna kya thi
// let Dec=document.getElementById('DecreaseBtn');
// let reset=document.getElementById('ResetBtn');
// let Inc=document.getElementById('IncreaseBtn');
// let cval=parseInt(document.getElementById('val').textContent)
// Dec.onclick=function(){
//     document.getElementById('val').textContent=cval-1;
// }
// reset.onclick=function(){
//     document.getElementById('val').textContent=0;
// }
// Inc.onclick=function(){
//     document.getElementById('val').textContent=cval+1;
// }


//A more optimized way
let Dec=document.getElementById('DecreaseBtn');
let reset=document.getElementById('ResetBtn');
let Inc=document.getElementById('IncreaseBtn');

Dec.onclick=function(){
    let cval=parseInt(document.getElementById('val').textContent);
    document.getElementById('val').textContent=cval-1;
}
reset.onclick=function(){
    let cval=parseInt(document.getElementById('val').textContent);
    document.getElementById('val').textContent=0;
}
Inc.onclick=function(){
    let cval=parseInt(document.getElementById('val').textContent);
    document.getElementById('val').textContent=cval+1;
}