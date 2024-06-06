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

// exp.addEventListener('click', () => {
//     var descr = document.getElementById('descr');
//     var explan = document.getElementById('explan');
//     // explan.style.border = '3px solid yellow';
//     descr.style.display = 'none';


//     var addButt = document.getElementById('additionalButtons');
//     addButt.style.position = 'fixed';
//     addButt.style.flexDirection = 'column';
//     addButt.style.marginTop = '5%';
//     addButt.style.width = '10%';
//     addButt.style.marginLeft = '42%';
//     addButt.style.border = 'none';
//     addButt.style.backgroundColor = '#f5f5dc00';
//     addButt.top = '10%';

//     var butElements = addButt.getElementsByTagName('a')

  
//     // Creating new element
//     var newA = document.createElement('a');
//     addButt.insertBefore(newA, butElements[0]);
//     newA.innerHTML = 'Home'

//      // Add experience content
//     var exp = document.getElementById('exp')
//     exp.style.display = 'inline-block';
//     exp.style.padding = '20px';
//     exp.style.marginTop = '0px';
//     // exp.style.border = '1px solid yellow';

//     // Set mouse position attributes
//     butElements[0].setAttribute('onmouseover','hover(this)');
//     butElements[0].setAttribute('onmouseout','hoverback(this)');
    
//     butElements[0].addEventListener('click', () => {
//         exp.style.display = 'none';
//         descr.style.display = 'inline-block';
//         // addButt.style.border = '2px solid red';
//         addButt.style.display = 'flex';
//         addButt.style.flexDirection = 'row';
//         addButt.style.width = '100%';
//         addButt.style.margin = 'auto';
//         // addButt.style.marginLeft = '0';
//         // addButt.style.marginTop = '0';

//         var remA = addButt.removeChild(butElements[0])
//         // console.log(butElements[0])
//     });

   
// });

document.addEventListener('DOMContentLoaded', () => {
    socialsMargingTop()
})

window.addEventListener('resize', () => {
    socialsMargingTop()
    if(innerHeight>innerWidth) {
        document.getElementById('socials').style.marginTop = '0px'
    }
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

// Project Button

var proj = butt[0]

proj.addEventListener('click', () => {
    var descr = document.getElementById('descr');
    var explan = document.getElementById('explan');
    // explan.style.border = '3px solid yellow';
    descr.style.display = 'none';
    
     // Add project content
     var projects = document.getElementById('projects');

     explan.insertBefore(projects, addButt)
     projects.style.display = 'inline-block';
     projects.style.color = 'white';
     projects.style.letterSpacing = '2px'
     
    fields = projects.getElementsByTagName('p');
    fields[0].style.color = 'yellow';
    fields[0].style.fontStyle = 'italic';
    // fields[0].style.fontSize = '20px'

    let projo = document.getElementsByClassName('projo');


    // View more projects 
    let more = document.getElementById('more');

    more.style.margin = '20px';
    more.style.width = '100%';
    more.style.padding = '20px';
    more.style.textAlign = 'right';

    let moreA = more.getElementsByTagName('a')[0];

    moreA.style.fontStyle = 'italic';
    moreA.style.textDecoration = 'none';
    moreA.style.color = 'yellowgreen';
    moreA.style.fontWeight = 'bolder';


    // console.log(projo);

    for (let i = 0; i < projo.length; i++) {
        projo[i].style.border = '1px solid #ddd';
        projo[i].style.margin = '10px';
        projo[i].style.padding = '15px';
        projo[i].style.borderRadius = '4px';

        var title = projo[i].getElementsByTagName('h5')[0]
        title.style.color = 'aqua';
        title.style.fontWeight = 'bold';

        projo[i].getElementsByTagName('hr')[0].style.border = '1px solid aquamarine';


        var view = projo[i].getElementsByClassName('view')[0]
        // view.style.border = '1px solid white';
        // view.style.width = '30%';
        // view.style.padding = '3px';
        view.style.margin = 'auto';
        view.style.alignItems = 'center';

        var viewA = view.getElementsByTagName('a')[0];
        viewA.style.fontStyle = 'italic';
        viewA.style.textDecoration = 'none';
        viewA.style.fontWeight = 'bold';
        // viewA.style.color = 'brown';
        viewA.style.textAlign = 'center';
    }    

     var addButt = document.getElementById('additionalButtons');
     addButt.style.position = 'fixed';
     addButt.style.flexDirection = 'column';
     addButt.style.marginTop = '5%';
     addButt.style.width = '10%';
     addButt.style.marginLeft = '42%';
     addButt.style.border = 'none';
     addButt.style.backgroundColor = '#f5f5dc00';
     addButt.top = '10%';
    
    // Creating new element
    var newA = document.createElement('a');
    newA.style.backgroundColor = 'black';
    var butElements = addButt.getElementsByTagName('a')

    for (let i=0; i< butElements.length; i++){
        butElements[i].style.backgroundColor = 'black';
    }

    addButt.insertBefore(newA, butElements[0]);
    newA.innerHTML = 'Home'

    // Set mouse position attributes

    butElements[0].setAttribute('onmouseover','hover(this)');
    butElements[0].setAttribute('onmouseout','hoverback(this)');

     // Removing project element
     var remProj = addButt.removeChild(proj)
 
    
    butElements[0].addEventListener('click', () => {
        explan.removeChild(projects)
        descr.style.display = 'inline-block';
        // addButt.style.border = '2px solid red';
        addButt.style.display = 'flex';
        addButt.style.flexDirection = 'row';
        addButt.style.width = '100%';
        addButt.style.margin = 'auto';
        // addButt.style.marginLeft = '0';
        // addButt.style.marginTop = '0';
        addButt.insertBefore(proj,butElements[1])
        var remA = addButt.removeChild(butElements[0])
        console.log(proj)
    });

});

// Download Resume
butt[2].disable = true;
butt[2].addEventListener('click', () => {
    window.open('Naftal Rainer Resume.pdf', '_blank');
})

function socialsMargingTop() {
    
    if(innerWidth>innerHeight) {
        let socials  = document.getElementById('socials')
        console.log(socials.previousElementSibling.offsetHeight+'px')
        socials.style.marginTop = socials.previousElementSibling.offsetHeight + 'px'
    }
}

// document.querySelectorAll('.tooltiptext').forEach( tooltip => {
    
// })
