var mainSection = $('.section-holder');
var heroSection = $('.hero');

function aboutFunction() {
    $('.orange').removeClass('orange');
    $('#about').addClass('orange');
    mainSection.html('');
    heroSection.html('');
    $('#main-btn').text('About');
    var hero = '<div class="images container-fluid"><img src="assets/images/cami.jpg" alt="Camila" id="cami"><img src="assets/images/koda.jpg" alt="Koda" id="koda"></div>'
    var about = '<p>Howdy! I am a web developer originating from South Florida but currently residing in Dallas, TX. </p>'
    + '<p>I have a wonderful girlfriend, Camila, and a gorgeous German Shepherd named Koda.</p>'
    + '<p>My hobbies consist of playing guitar, teaching my dog how to play guitar, and giving up on my dream of teaching my dog to play guitar.</p>';
    heroSection.append(hero);
    mainSection.append(about);
}

function skillsFunction() {
    $('.orange').removeClass('orange');
    $('#skills').addClass('orange');
    mainSection.html('');
    heroSection.html('');
    $('#main-btn').text('Skills');
    var skills = '<div class="container-fluid skillset"><div class="skill-icons">'
    + '<div class="icon-contain one"><i class="col fab fa-html5"><div class="bar-graph htmlf"><h5>Html/CSS</h5></div></i></div>'
    + '<div class="icon-contain two"><i class="col fab fa-js"><div class="bar-graph jsf"><h5>Javascript</h5></div></i></div>'
    + '<div class="icon-contain three"><i class="col fab fa-git-alt"><div class="bar-graph gitf"><h5>Git/Github</h5></div></i></div>'
    + '<div class="icon-contain four"><i class="col fab fa-python"><div class="bar-graph pythonf"><h5>Python</h5></div></i></div>'
    + '</div></div>';
    mainSection.append(skills);
}

function projectFunction() {
    $('.orange').removeClass('orange');
    $('#projects').addClass('orange');
    $(this).addClass('orange');
    $('#main-btn').text('Projects');
    mainSection.html('');
    heroSection.html('');
    var projects = '<div class="containers row"><div id="weather-dashboard" class="proj module"><header><h1><a href="https://retro1967.github.io/weather-dashboard">Weather Dashboard</a></div>'
    + '<div id="run-buddy" class="proj module"><header><h1><a href="https://retro1967.github.io/run-buddy">Run Buddy</a></div></div>';
    mainSection.append(projects);
}

function educationFunction() {
    $('.orange').removeClass('orange');
    $('#edu').addClass('orange');
    $('#main-btn').text('Education')
    mainSection.html('');
    heroSection.html('');
    var education = '<p class="left rel">Current student at UT Austin Coding Bootcamp studying web development.</p>'
    + '<p class="right rel">Current Aggie at Texas A&M University studying Computer Engineering.</p>'
    + '<p class="rel full">Throughout my education I have always prioritized self-learning. I believe this was an important step in developing my skills to the <span class="orange-t">full</span> potential.</p>';
    mainSection.append(education);
}

aboutFunction();
