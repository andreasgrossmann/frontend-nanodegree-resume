// JSON Objects

var bio = {
    "name": "Homer J. Simpson",
    "role": "Doughnut Connoisseur",
    "contacts": {
        "mobile": "0123-456-789",
        "email": "masterofawesomeness@springfieldmail.com",
        "github": "homers",
        "twitter": "@homer",
        "location": "Miami"
    },
    "welcomeMessage": "Homer Jay Simpson is the protagonist of the American animated television series \"The Simpsons\" as the patriarch of the eponymous family. He was created and designed by cartoonist Matt Groening while he was waiting in the lobby of James L. Brooks' office. Groening had been called to pitch a series of shorts based on his comic strip \"Life in Hell\" but instead decided to create a new set of characters. He named the character after his father, Homer Groening.",
    "skills": [
        "eating food", "drinking beer", "pranking co-workers", "having fun", "causing mayhem", "being awesome", "coming up with amazing ideas"
    ],
    "biopic": "images/homer.jpg"
};

var education = {
    "schools": [{
        "name": "Community College",
        "location": "Chicago",
        "degree": "Masters",
        "majors": ["nuclear engineering"],
        "dates": "1980",
        "url": "http://springfieldcommunity.com"
    }, {
        "name": "Krusty's Clown College",
        "location": "Springfield, Illinois",
        "degree": "Bachelors",
        "majors": ["clowning"],
        "dates": "2003",
        "url": "http://krustysclowncollege.com"
    }],
    "onlineCourses": [{
        "title": "How to be an astronaut",
        "school": "Online Space School",
        "dates": "2012",
        "url": "https://onlinespaceschool.com/how-to-be-an-astronaut"
    }]
};

var work = {
    "jobs": [{
        "employer": "Mr Burns",
        "title": "Safety Inspector",
        "location": "New Orleans",
        "dates": "1984 - Present",
        "description": "Pranking co-workers, eating food, making sure the power plant doesn't blow up."
    }, {
        "employer": "Krusty Burger",
        "title": "Burger Specialist",
        "location": "Dublin, Ireland",
        "dates": "1980 - 1984",
        "description": "Tasting burgers"
    }, {
        "employer": "Krusty Burger",
        "title": "Burger Specialist",
        "location": "Dublin, Ireland",
        "dates": "1980 - 1984",
        "description": "Tasting burgers"
    }]
};

var projects = {
    "projects": [{
        "title": "Spice Rack",
        "dates": "1990",
        "description": "Homer attempts to build Marge a spice rack. While doing so, Maggie sneaks up and hits Homer on the head with a mallet. Marge is at first clueless as to why Maggie would do such a thing, but Maggie sees an episode of The Itchy & Scratchy Show, a cartoon which is known for its violence, and tries to stab Homer with a pencil. Marge immediately blames the show for Maggie's actions and bans Bart and Lisa from watching the show as well.",
        "images": ["images/spice_rack.jpg", "images/spice_rack_real.jpg"]
    }, {
        "title": "Birdhouse",
        "dates": "1999",
        "description": "When Marge chastises Homer into doing something besides lounging in a hammock and drinking beer out of coconuts, he decides to build a barbecue. After failing to follow the directions correctly, he ends up with an unsightly pile of bricks, concrete and a beach umbrella. Homer hitches the mess to his bumper and tries to illegally dump it, but instead it collides with the car of an art dealer named Astrid Weller.",
        "images": ["images/birdhouse.jpg", "images/birdhouse_bird.jpg"]
    }]
};

// Show Bio

bio.display = function() {

    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $('#header').append(formattedName, formattedRole, formattedBioPic, formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

    if (bio.skills.length > 0) {

        $('#header').append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {

            var formattedSkill = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkill);

        });

    }

};

bio.display();

// Show Work

work.display = function() {

    work.jobs.forEach(function(job) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);

        $('.work-entry:last').append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);
    });

};

work.display();

// Show Projects

projects.display = function() {

    projects.projects.forEach(function(project) {

        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
        var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);

        $('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);

        if (project.images.length > 0) {

            project.images.forEach(function(image) {

                var formattedImage = HTMLprojectImage.replace('%data%', image);

                $('.project-entry:last').append(formattedImage);

            });

        }

    });

};

projects.display();

// Show Education

education.display = function() {

    education.schools.forEach(function(school) {

        $('#education').append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace('%data%', school.name);
        var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
        var formattedNameDegree = formattedName + formattedDegree;

        var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
        var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
        var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors);

        $('.education-entry:last').append(formattedNameDegree, formattedLocation, formattedDates, formattedMajor);

    });

    $('#education').append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {

        $('#education').append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
        var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        var formattedDates = HTMLonlineDates.replace('%data%', course.dates);
        var formattedURL = HTMLonlineURL.replace('%data%', course.url);

        $('.education-entry:last').append(formattedTitleSchool, formattedDates, formattedURL);

    });

};

education.display();

// Show Google Map

function displayGoogleMap() {
    $('#mapDiv').append(googleMap);
}

displayGoogleMap();

// Show Internationalize Button

// $("#main").append(internationalizeButton);

// function inName(name) {
//     var names = name.split(" ");
//     var firstName = names.shift();
//     iName = firstName[0].toUpperCase() + firstName.slice(1) + " " + names.pop().toUpperCase();
//     return iName;
// }