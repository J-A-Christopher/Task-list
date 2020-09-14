var input=document.getElementById('input');
var btn=document.getElementById('task').addEventListener('click',add);
var list=document.querySelector('.list');
var button=document.getElementById('clear').addEventListener('click',clear);


function add(){


    if(input.value==='') {
        alert('Enter a task')
    }
    else{
        var li=document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value=''

    li.style.width='100px'


    var btn=document.createElement('button');
    btn.appendChild(document.createTextNode('Del'));
    li.appendChild(btn);

    btn.style.marginLeft='300px';
    btn.style.padding='5px';
    btn.style.width='70px';
    btn.style.paddingBottom='5px'
    btn.style.borderRadius="10px"
      

    const max='';
    const width='';

    if(max-width<= '768px') {
        btn.style.width='50px'
          }
          else{
        btn.style.width='70px'
    }

    // if(localStorage.getItem('li')===null) {
    //     localStorage=li;
    // }else{

    // }


    btn.addEventListener('click',function DTask() {
      li.remove();
    })
}

     
}


function clear() {
    list.textContent=''
}