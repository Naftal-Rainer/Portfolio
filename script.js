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
    // explan.style.border = '3px solid yellow';
    descr.style.display = 'none';


    var addButt = document.getElementById('additionalButtons');
    addButt.style.position = 'absolute';
    addButt.style.flexDirection = 'column';
    // addButt.style.marginTop = '5%';
    addButt.style.width = '10%';
    addButt.style.marginLeft = '42%';
    // addButt.style.position = 'absolute';
    addButt.top = '10%';

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

    // Set mouse position attributes
    butElements[0].setAttribute('onmouseover','hover(this)');
    butElements[0].setAttribute('onmouseout','hoverback(this)');

    // Add experience content
    var exp = document.getElementById('exp')
    exp.style.display = 'inline-block';
    exp.style.padding = '20px';
    exp.style.marginTop = '0px';
    // exp.style.border = '1px solid yellow';
});


// for (i = 0; i < exp.length; i++) {
//     console.log(exp[i].textContent);`
// }