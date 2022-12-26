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
    var explan = document.getElementById('explan');
    explan.style.border = '3px solid yellow';
    descr.style.display = 'none';


    var addButt = document.getElementById('additionalButtons');
    // addButt.style.position = 'absolute';
    addButt.style.flexDirection = 'column';
    // addButt.style.width = '12%';
    addButt.style.width = '10%';
    addButt.style.marginLeft = '87%';
    // addButt.style.border = '1px solid white';


    var butElements = addButt.getElementsByTagName('a')

    // console.log(butElements)
    for (i=0; i<butElements.length; i++) {
        // butElements[i].style.width = '40%'
        butElements[i].style.marginBottom = '10%';
    }

    // Creating new element
    var newA = document.createElement('a');
    addButt.insertBefore(newA, butElements[0]);
    newA.innerHTML = 'Home'

});


// for (i = 0; i < exp.length; i++) {
//     console.log(exp[i].textContent);`
// }