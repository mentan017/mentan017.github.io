document.getElementById('more-btn').addEventListener('click', function(e){
    e.stopImmediatePropagation();
    document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});
});