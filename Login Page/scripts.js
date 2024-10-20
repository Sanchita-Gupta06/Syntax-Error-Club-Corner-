
document.querySelector('.welcome-box h1').innerText = 'Hello!';

function showStudentForm() {
    document.getElementById('student-form').classList.remove('hidden');
    document.getElementById('club-form').classList.add('hidden');
    document.querySelector('.welcome-box h1').innerText = 'Welcome to Student Portal';
    document.querySelector('.image-placeholder').style.backgroundImage = "url('img2.png')";
}

function showClubForm() {
    document.getElementById('club-form').classList.remove('hidden');
    document.getElementById('student-form').classList.add('hidden');
    document.querySelector('.welcome-box h1').innerText = 'Welcome to Club Portal';
    document.querySelector('.image-placeholder').style.backgroundImage = "url('img3.png')";
}
document.querySelector('.image-placeholder').style.backgroundImage = "url('img1.png')";
