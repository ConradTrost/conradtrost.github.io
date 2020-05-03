var mainSection = $('.section-holder');

function aboutFunction() {
    $('.orange').removeClass('orange');
    $('#about').addClass('orange');
    mainSection.html('');
    var about = '<p>Howdy! I am a web developer originating from South Florida but currently residing in Dallas, TX. </p>'
    + '<p>I have a wonderful wife, Camila, and a gorgeous German Shepherd named Koda.</p>'
    + '<div class="images"><img src="assets/images/cami.jpg" alt="Camila" id="cami"><img src="assets/images/koda.jpg" alt="Koda" id="koda"></div>'
    + '<p>My hobbies consist of playing guitar, teaching my dog how to play guitar, and giving up on my dream of teaching my dog to play guitar.</p>';
    mainSection.append(about);
}

function skillsFunction() {
    $('.orange').removeClass('orange');
    $('#skills').addClass('orange');
    mainSection.html('');
    var skills = '<div class="container-fluid skillset"><div class="skill-icons"><div class="icon-contain"><i class="col fab fa-html5"></i>HTML</div>'
    + '<div class="icon-contain"><i class="col fab fa-css3-alt"></i>CSS</div>'
    + '<div class="icon-contain"><i class="col fab fa-bootstrap"></i>Bootstrap</div>'
    + '<div class="icon-contain"><i class="col fab fa-js"></i>Javascript</div>'
    + '<div class="icon-contain"><i class="col fab fa-git-square"></i>Git</div>'
    + '<div class="icon-contain"><i class="col fab fa-python"></i>Python</div></div>';
    mainSection.append(skills);
}

function projectFunction() {
    $('.orange').removeClass('orange');
    $('#projects').addClass('orange');
    $(this).addClass('orange');
    mainSection.html('');
    var projects = '<p>I have a couple projects</p>';
    mainSection.append(projects);
}

function educationFunction() {
    $('.orange').removeClass('orange');
    $('#edu').addClass('orange');
    mainSection.html('');
    var education = '<p>I am a current Aggie in my junior year at Texas A&M University studying Computer Engineering.</p>'
    + "<p>I'm also currently a student at UT Austin Coding Bootcamp.</p>"
    + '<p>My cumulative GPA is 3.6 and I am dropping out.</p>';
    mainSection.append(education);
}

aboutFunction();