var mainSection = $('.section-holder');
var heroSection = $('.hero');

function aboutFunction() {
    $('.orange').removeClass('orange');
    $('#about').addClass('orange');
    mainSection.html('');
    heroSection.html('');
    $('#main-btn').text('About');
    var hero = '<div class="images container-fluid"><img src="assets/images/cami.jpg" alt="Camila" id="cami"><img src="assets/images/koda.jpg" alt="Koda" id="koda"></div>'
    var about = 
    `<div class="container aboutContain
    ">
        <p class="aboutLeft">Howdy! I am a full stack web developer proudly from Dallas, Texas.<br></br>
        I have a wonderful girlfriend, Camila, and a gorgeous German Shepherd named Koda. I am a current third-year student at Texas A&M University studying Computer Engineering.<br></br>
        I am a tinkerer. I love to mess around with electronics and software as a way of understanding their complex structures and learning what I can create with it.<br></br>
        I have a desire to learn. When I was 8 I began playing guitar and I have yet to stop the learning journey. I believe learning is never meant to end and that there is always more knowledge and ability to acquire.</p>
        <img src="assets/images/cami.jpg" alt="Camila" id="cami"><img src="assets/images/koda.jpg" alt="Koda" id="koda">
        <p class="aboutRight">I am a self starter. My interest in web development began in 2017 during the "Shopify Boom". I created 3 websites using Shopify's templates but found that to not give me enough flexibility in my designs.
         The main things I learned during these side projects were the importance of <span class="orange-t">SEO</span> and <span class="orange-t">branding</span>.<br></br>
        I began messing around with HTML and CSS but did not take it seriously until my second year at college. I learned Python, and more importantly, learned that Javascript was the language I wanted to master for front-end and back-end development.<br></br>
        After my second year, I decided web development is what I want to pursue, and I enrolled into <span class="orange-t">UT Austin Coding Bootcamp</span> to develop my skills and get into the field I am passionate about.<br></br>
        I am competitive. I continued to work on my own projects to master the concepts and languages taught in the bootcamp and take more control of the potential in software.
    </div>`;
    // heroSection.append(hero);
    mainSection.append(about);
}

function skillsFunction() {
    $('.orange').removeClass('orange');
    $('#skills').addClass('orange');
    mainSection.html('');
    heroSection.html('');
    $('#main-btn').text('Skills');
    var skills = 
    `<div class="container skillset">
        <div class="go-left">
            <div class="skill-icons">
                <div class="icon-contain one"><i class="col fab fa-html5"><div class="bar-graph htmlf"><h5>Html/CSS</h5></div></i></div>
                <div class="icon-contain two"><i class="col fab fa-js"><div class="bar-graph jsf"><h5>Javascript</h5></div></i></div>
                <div class="icon-contain three"><i class="col fab fa-git-alt"><div class="bar-graph gitf"><h5>Git/Github</h5></div></i></div>
                <div class="icon-contain four"><i class="col fab fa-python"><div class="bar-graph pythonf"><h5>Python</h5></div></i></div>
                <div class="icon-contain five"><i class="col fab fa-node-js"><div class="bar-graph nodef"><h5>Node.js</h5></div></i></div>
            </div>
        </div>
        <div class="skills-text">
            <p>Full stack web developer specialized in <span class="orange-t">Javascript</span> and <span class="orange-t">Node.js</span></p>
            <p>Experienced front-end designer. I use <span class="orange-t">Figma</span> to create prototypes before mocking the design in CSS and HTML. I have experience using <span class="orange-t">Bootstrap</span>, although I prefer minimal framework usage.</p>
            <p>Back-end architect with an established understanding of <span class="orange-t">Node.js</span> and server-side API's. My main focus is quick loading times and minimal data usage.</p>
            <p>My main skill trait is my ability to learn quickly, efficiently, and well. I have always been a self-learner and I am proud to say that I have a developed ability to grasp new concepts and retain new information.</p>
        </div>
    </div>`;
    mainSection.append(skills);
}

function projectFunction() {
    $('.orange').removeClass('orange');
    $('#projects').addClass('orange');
    $(this).addClass('orange');
    $('#main-btn').text('Projects');
    mainSection.html('');
    heroSection.html('');
    var projects = 
    `<div class="containers row">
        <div id="neoo" class="proj module"><header><h1><a href="https://retro1967.github.io/NEOO">NEOO</a></div>
        <div id="weather-dashboard" class="proj module"><header><h1><a href="https://retro1967.github.io/weather-dashboard">Weather Dashboard</a></div>
        <div id="run-buddy" class="proj module"><header><h1><a href="https://retro1967.github.io/run-buddy">Run Buddy</a></div>
    </div>`;
    mainSection.append(projects);
}

// function educationFunction() {
//     $('.orange').removeClass('orange');
//     $('#edu').addClass('orange');
//     $('#main-btn').text('Education')
//     mainSection.html('');
//     heroSection.html('');
//     var education = 
//     `<div class="container">
//         <p class="left rel">Current student at UT Austin Coding Bootcamp studying web development.</p>
//         <p class="right rel">Current Aggie at Texas A&M University studying Computer Engineering.</p>
//         <p class="rel full">Throughout my education I have always prioritized self-learning. I believe this was an important step in developing my skills to the <span class="orange-t">full</span> potential.</p>
//     </div>`;
//     mainSection.append(education);
// }

function contactFunction() {
    $('.orange').removeClass('orange');
    $('.contact').addClass('orange');
    $('#main-btn').text('Education')
    mainSection.html('');
    heroSection.html('');
    var contactSection = `
    <div class="container">
        <h1>Shoot me an email!</h1>
        <p>I'd be happy to respond.</p>
    </div>
    `;
    mainSection.append(contactSection);
}

aboutFunction();

// Remove heroSection??
// Remove project transparent thing and change it to hover w/ languages declared.
// Make about section mobile responsive please.
// Contact section using Node.js