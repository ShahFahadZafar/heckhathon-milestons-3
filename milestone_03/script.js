// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form  submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b> Dynamic Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n    <h3><b>Education</b></h3>\n    <p>").concat(education, "</p>\n    <h3><b>Experience</b></h3>\n    <p>").concat(experience, "</p>\n    <h3><b>Skills</b></h3>\n    <p>").concat(skills, "</p>\n\n    ");
    //    Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("Resume display element not found");
    }
});
