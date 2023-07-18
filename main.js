var title = document.querySelector('.title');
var ul = document.querySelector('ul');
var reload = document.querySelector('.reload');

window.onload = function(){
    if(window.navigator.onLine){
        onLine();
    }else{
        offLine();
    }
}
window.addEventListener('online' , function(){
    onLine();
});
window.addEventListener('offline' , function(){
    offLine();
});

reload.onclick = function(){
    window.location.reload();
}
function onLine(){
    title.innerHTML= 'Online Now';
    title.style.color='green'; 
    ul.classList.add('hide') ;
    reload.classList.add('hide') ;
}
function offLine(){
    title.innerHTML= 'Offline Now';
    title.style.color='#666';
    ul.classList.remove('hide') ;
    reload.classList.remove('hide') ;
}