document.getElementById('more-btn').addEventListener('click', function(e){
    e.stopImmediatePropagation();
    document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});
});
document.getElementById('skills-btn').addEventListener('click', function(e){
    e.stopImmediatePropagation();
    document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
});