var mainSection = $('.section-holder');

function aboutFunction() {
    $('.orange').removeClass('orange');
    $('#about').addClass('orange');
    mainSection.html('');
    var about = '<p>Howdy! I am a web developer originating from South Florida but currently residing in Dallas, TX. </p>'
    + '<p>I have a wonderful wife, Camila, and a gorgeous German Shepherd named Koda.</p>'
    + '<p>My hobbies consist of playing guitar, teaching my dog how to play guitar, and giving up on my dream of teaching my dog to play guitar.</p>';
    mainSection.append(about);
}

function skillsFunction() {
    $('.orange').removeClass('orange');
    $('#skills').addClass('orange');
    mainSection.html('');
    var skills = '<p>I am from New York</p>';
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
    var education = '<p>I am smart</p>';
    mainSection.append(education);
}

aboutFunction();