var skills = '<div class="col-md-3"><img src="./images/%data%.png" alt="my skills" class="img-responsive img-circle images"></div>';

var skills_array = ['Objective-C', 'Swift', 'BootStrap', 'HTML', 'wx',
    'JavaScript'
];
var skills_new = '';

for (var i = 0; i < skills_array.length; i++) {
    skills_new = skills.replace('%data%', skills_array[i]);
    $('.skills-section-images').append(skills_new);
}
//experience section
var experience = '<li><h4>%data0% &nbsp;&nbsp;&nbsp;(%data1% )</h4><hr><h5>%data2%</h5><hr></li>';
var experience_array = [
    {
        name:'bushangban',
        years: '2015-2016',
        info: 'bushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangban'
    },
    {
        name:'bushangban' ,
        years: '2015-2016',
        info: 'bushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangban'
    },
    {
        name:'bushangban' ,
        years: '2015-2016',
        info: 'bushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangbanbushangban'
    },
];

var experience_new = '';
for (var i = 0; i < experience_array.length; i++) {
	experience_new = experience.replace('%data0%',experience_array[i]['name']);
	experience_new = experience_new.replace('%data1%',experience_array[i]['years']);
	experience_new = experience_new.replace('%data2%',experience_array[i]['info']);
	$('.experience-section-info').append(experience_new);


}


//project section

var projects = '<li> <h3>%projectName%</h3><div class="row"> <div class="col-md-3"><img src="./images/%projectImage%" alt="projectimage" class="img-responsive"></div><div class="col-md-9"> <h3>Language &nbsp;&nbsp;%projectLanguage%</h3><h5>%projectInfo%</h5></div></div></li><br><hr>';
var project_array = [
 {
    projectName:'BuShangBanApp',
    projectLanuage:'Objective-C',
    projectImage:'header_image109.jpg',
    projectInfo:'BuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanApp'
 },
 {
    projectName:'BuShangBanApp',
    projectLanuage:'Objective-C',
    projectImage:'header_image109.jpg',
    projectInfo:'BuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanApp'
 },
 {
    projectName:'BuShangBanApp',
    projectLanuage:'Objective-C',
    projectImage:'header_image109.jpg',
    projectInfo:'BuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanAppBuShangBanApp'
 }

];
var project_new = '';
for (var i = 0; i < project_array.length; i++) {
    project_new = projects.replace('%projectName%',project_array[i]['projectName']);
    project_new = project_new.replace('%projectLanguage%',project_array[i]['projectLanuage']);
    project_new = project_new.replace('%projectImage%',project_array[i]['projectImage']);
    project_new = project_new.replace('%projectInfo%',project_array[i]['projectInfo']);
    $('.project-secion-info').append(project_new);
}
