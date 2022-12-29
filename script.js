function hover(obj){
    obj.style.backgroundColor ='white';
}

function hoverback(obj){
    obj.style.backgroundColor ='black';
}

setInterval(mySliderDisplay, 6000);

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
    addButt.style.position = 'fixed';
    addButt.style.flexDirection = 'column';
    addButt.style.marginTop = '5%';
    addButt.style.width = '10%';
    addButt.style.marginLeft = '42%';
    addButt.style.border = 'none';
    addButt.style.backgroundColor = '#f5f5dc00';
    addButt.top = '10%';

    var butElements = addButt.getElementsByTagName('a')

  
    // Creating new element
    var newA = document.createElement('a');
    addButt.insertBefore(newA, butElements[0]);
    newA.innerHTML = 'Home'

     // Add experience content
    var exp = document.getElementById('exp')
    exp.style.display = 'inline-block';
    exp.style.padding = '20px';
    exp.style.marginTop = '0px';
    // exp.style.border = '1px solid yellow';

    // Set mouse position attributes
    butElements[0].setAttribute('onmouseover','hover(this)');
    butElements[0].setAttribute('onmouseout','hoverback(this)');
    
    butElements[0].addEventListener('click', () => {
        exp.style.display = 'none';
        descr.style.display = 'inline-block';
        // addButt.style.border = '2px solid red';
        addButt.style.display = 'flex';
        addButt.style.flexDirection = 'row';
        addButt.style.width = '100%';
        addButt.style.margin = 'auto';
        // addButt.style.marginLeft = '0';
        // addButt.style.marginTop = '0';

        var remA = addButt.removeChild(butElements[0])
        // console.log(butElements[0])
    });

   
});


window.addEventListener('load', () => {
    startQueries();
})

const startQueries = () => {
    const mediaQueryNew = matchMedia('(max-width:660px)')
    if(mediaQueryNew.matches){
        console.log('Matched!!')
        var explan = document.getElementById('explan')
        // explan.style.minHeight = '100%'
    }
};