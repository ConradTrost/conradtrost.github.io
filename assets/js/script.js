var mainSection = $('.section-holder');

function aboutFunction() {
    $('.orange').removeClass('orange');
    $('#about').addClass('orange');
    mainSection.html('');
    var about = '<p>I have nothing interesting about me</p>';
    mainSection.append(about);
}

function expFunction() {
    $('.orange').removeClass('orange');
    $('#exp').addClass('orange');
    mainSection.html('');
    var experience = '<p>I am from New York</p>';
    mainSection.append(experience);
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