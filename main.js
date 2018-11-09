
const y = document.getElementById('click1');
const z = document.getElementById('show1');
const x = document.getElementById('show2');

z.style.display = 'none';
x.style.display = 'none';
y.style.transition =  .5 + 'ease all';
y.addEventListener ('click', ()=>{
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
 const kor = document.getElementById('check');
 const form2 = document.getElementById('all_f');
 form2.style.display = 'none';

 function kCklick(){
    if(form2.style.display == 'none'){
        form2.style.display = 'block';
    }else{
        form2.style.display = 'none';
    }
 }