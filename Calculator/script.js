let input = document.getElementById('inputBox');
// console.log(input);
let buttons = document.querySelectorAll('button');
console.log(buttons);
let arr = Array.from(buttons);
console.log(arr[0]);
let str ='';

// arr.forEach(val =>{
//     console.log(val);
//     val.addEventListener('click',(e)=>{
//         console.log(e.target.innerHTML);
//     })
// })
for (const iterator of arr) {
    console.log(iterator);

    iterator.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML);
        if (e.target.innerHTML=='='){
            input.value=eval(str);
            str=eval(str);
        }
        else if (e.target.innerHTML=='AC'){
            str='';
            input.value=str;
        }
        else if(e.target.innerHTML=='DEL'){
            str=str.substring(0,str.length-1);
            input.value=str;
        }
        else{
            str+=e.target.innerHTML;
            input.value=str;
        }
        
    })
}