function display_c(){
    var refresh=1000;
    mytime=setTimeout('display_ct()',refresh);
}


function display_ct() {
    var x = new Date();
    document.getElementById('ct').innerHTML=x;
    display_c();
}

const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const  messageOut= document.querySelector('#messageOut');

sendBtn.addEventListener('click',sendMsg)


function sendMsg (){
    let content = messageIn.value;
    //console.log(content);
    if(content===''){
        alert('please enter valid value')
    }
    else{
       
    messageOut.innerHTML = content;
    messageIn.value='';
}
}