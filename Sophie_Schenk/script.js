document.onload = ChangeImgs();

var CurrentAboutImg = 0;

document.getElementById('more-btn').addEventListener('click', function(e){
    e.stopImmediatePropagation();
    document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});
});
document.getElementById('skills-btn').addEventListener('click', function(e){
    e.stopImmediatePropagation();
    document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
});

function ChangeImgs(){
    var AboutImgs = ['About_Me_0.png', 'About_Me_1.png', 'About_Me_2.png'];
    if(CurrentAboutImg != undefined) document.getElementById("about-me-img").setAttribute('src', `./Images/${AboutImgs[CurrentAboutImg]}`);
    CurrentAboutImg = (CurrentAboutImg+1)%3;
    setTimeout(ChangeImgs, 5000);
}