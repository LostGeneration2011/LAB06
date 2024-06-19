// scripts/main.js

document.addEventListener('DOMContentLoaded', function () {
    const progressCircles = document.querySelectorAll('.progress-circle');

    progressCircles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        const radius = circle.querySelector('circle').r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100 * circumference);
        
        circle.querySelector('circle:nth-child(2)').style.strokeDashoffset = offset;
    });
});
