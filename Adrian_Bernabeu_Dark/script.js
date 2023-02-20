window,onload = UpdateProjectsHeight();
window.addEventListener('resize', UpdateProjectsHeight);
function UpdateProjectsHeight(){
    var heights = [document.getElementById("numbers-website").clientHeight, document.getElementById("password-manager").clientHeight, document.getElementById("idee-forum").clientHeight, document.getElementById("school-app").clientHeight];
    heights.sort();
    document.getElementById("projects").style.height = `${(heights[heights.length-1])}px`;
    //Get the height of the hightest project and set the height of the projects section
}
document.getElementById("numbers-website-btn").addEventListener('click', async function(e){
    e.stopImmediatePropagation();
    //Remove the classes from the projects
    await RemoveProjectClasses();
    document.getElementsByClassName('previous-project')[0].classList.remove('previous-project');
    var PreviousProject = document.getElementsByClassName('active-project')[0];
    PreviousProject.classList.add('previous-project');
    PreviousProject.classList.remove('active-project');
    //Set all projects to right
    document.getElementById("password-manager").classList.add('project-right')
    document.getElementById("idee-forum").classList.add('project-right');
    document.getElementById("school-app").classList.add('project-right');
    //Set the numbers website as active
    document.getElementById("numbers-website").classList.add("active-project");
});
document.getElementById("password-manager-btn").addEventListener('click', async function(e){
    e.stopImmediatePropagation();
    //Remove the classes from the projects
    await RemoveProjectClasses();
    document.getElementsByClassName('previous-project')[0].classList.remove('previous-project');
    var PreviousProject = document.getElementsByClassName('active-project')[0];
    PreviousProject.classList.add('previous-project');
    PreviousProject.classList.remove('active-project');
    //Set projects to left
    document.getElementById("numbers-website").classList.add('project-left')
    //Set all projects to right
    document.getElementById("idee-forum").classList.add('project-right');
    document.getElementById("school-app").classList.add('project-right');
    //Set the numbers website as active
    document.getElementById("password-manager").classList.add("active-project");
});
document.getElementById("idee-forum-btn").addEventListener('click', async function(e){
    e.stopImmediatePropagation();
    //Remove the classes from the projects
    await RemoveProjectClasses();
    document.getElementsByClassName('previous-project')[0].classList.remove('previous-project');
    var PreviousProject = document.getElementsByClassName('active-project')[0];
    PreviousProject.classList.add('previous-project');
    PreviousProject.classList.remove('active-project');
    //Set projects to left
    document.getElementById("numbers-website").classList.add('project-left')
    document.getElementById("password-manager").classList.add('project-left');
    //Set all projects to right
    document.getElementById("school-app").classList.add('project-right');
    //Set the numbers website as active
    document.getElementById("idee-forum").classList.add("active-project");
});
document.getElementById("school-app-btn").addEventListener('click', async function(e){
    e.stopImmediatePropagation();
    //Remove the classes from the projects
    await RemoveProjectClasses();
    document.getElementsByClassName('previous-project')[0].classList.remove('previous-project');
    var PreviousProject = document.getElementsByClassName('active-project')[0];
    PreviousProject.classList.add('previous-project');
    PreviousProject.classList.remove('active-project');
    //Set projects to left
    document.getElementById("numbers-website").classList.add('project-left')
    document.getElementById("password-manager").classList.add('project-left');
    document.getElementById("idee-forum").classList.add('project-left');
    //Set the numbers website as active
    document.getElementById("school-app").classList.add("active-project");
});
async function RemoveProjectClasses(){
    var ProjectsRight = document.getElementsByClassName("project-right");
    while(ProjectsRight.length){
        ProjectsRight[0].classList.remove("project-right");
    }
    var ProjectsLeft = document.getElementsByClassName("project-left");
    while(ProjectsLeft.length){
        ProjectsLeft[0].classList.remove("project-left");
    }
}