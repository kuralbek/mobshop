
/* const y = document.getElementById('click1');
const z = document.getElementById('show1');
const x = document.getElementById('show2');

z.style.display = 'none';
x.style.display = 'none';
y.style.transition =  .5 + 'ease all'; */
/* y.addEventListener ('click', ()=>{
        console.log('ssss');
        y.style.transition = '0.5s ease all';
        if( (z.style.display == 'none') || (x.style.display == 'none') ){
            z.style.display = 'block';
            x.style.display = 'block';
        }else{
            z.style.display = 'none';
            x.style.display = 'none';
        }
});
 const kor = document.getElementById('check'); */
 const showone = document.getElementById('showOne');
 const showsecond = document.getElementById('showToSecond');
 const showthird = document.getElementById('showtothird');
//  form2.style.display = 'none';
showone.style.display = 'none';
showsecond.style.display = 'none';
showthird.style.display = 'none';

 function kCklick(id){
     if(id==1){
         console.log(1);
         showOneMobile();
         
     }else if(id == 2){
         console.log(2);
         showSecondMobile();
     }else if(id == 3){
         console.log(3);
         showThirdMobile()
     }
 }


 function showOneMobile(){
    
     if(showone.style.display == 'none'){
        showone.style.display = 'block';
     }else{
        showone.style.display = 'none';
     }
 }
 function showSecondMobile(){
    
    if(showsecond.style.display == 'none'){
       showsecond.style.display = 'block';
    }else{
       showsecond.style.display = 'none';
    }
}
function showThirdMobile(){
    
    if(showthird.style.display == 'none'){
       showthird.style.display = 'block';
    }else{
       showthird.style.display = 'none';
    }
}