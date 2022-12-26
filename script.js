function hover(obj){
    obj.style.backgroundColor ='white';
}

function hoverback(obj){
    obj.style.backgroundColor ='black';
}

setInterval(mySliderDisplay, 7000);

let i = 0
function mySliderDisplay() {
    var para = document.getElementById('bio').getElementsByTagName('p')
    // console.log(para[0].innerHTML);
    
    document.getElementById('displ').textContent = para[i].innerHTML;
    
    i += 1;
    if(i == para.length){
        i = 0;
    }
}


let butt = document.getElementById('additionalButtons').getElementsByTagName('a');

var exp = butt[1]

exp.addEventListener('click', () => {
    var descr = document.getElementById('descr');
    descr.style.display = 'none';
    var addButt = document.getElementById('additionalButtons');
    addButt.style.position = 'absolute';
    addButt.style.flexDirection = 'column';
    addButt.style.width = '8%';
    // addButt.style.float = 'right';
    // addButt.style.justifyItems = 'flex-end';
    // addButt.style.margin = 'auto';
    addButt.style.border = '1px solid white';


    var butElements = addButt.getElementsByTagName('a')
    // butElements.style.width = '30%';
    // butElements.position = 'absolute';
});


// for (i = 0; i < exp.length; i++) {
//     console.log(exp[i].textContent);`
// }