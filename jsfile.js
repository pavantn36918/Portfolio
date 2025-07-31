let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll section

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        }
    });
    // sticky header

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// Changes


const texts = ["Automation Tester", "Frontend Developer"];
const h3 = document.querySelector(".text-animate h3");
const h3After = window.getComputedStyle(h3, '::after');
let index = 0;

function updateText() {
    // Change text
    h3.textContent = texts[index];



    // Restart the ::after animation by forcing a reflow
    h3.classList.remove('restart-typing');
    void h3.offsetWidth; // trigger reflow
    h3.classList.add('restart-typing');

    // Move to next text
    index = (index + 1) % texts.length;

}



// Start the cycle
updateText();
setInterval(updateText, 5000); // 4s animation + 1s buffer

document.oncontextmenu = () => {
    alert("Can't do right click website");
    return false
}

document.onkeydown = e => {

    if (e.key == "F12") {
        alert("Can't Inspect this website");
        return false
    }

    if (e.ctrlKey && e.key == "u") {
        alert("Can't access the page sourse of this website");
        return false
    }

}






