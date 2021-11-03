/* =================== NAVBAR =================== */

const shows = document.getElementsByClassName("navswitch");

for(let i = 0 ; i < shows.length ; i++) {
    const show = shows[i];

    show.addEventListener("click", () => {
        const links = document.getElementById("sm-links");

        if(show.id === "open_navswitch") {
            links.style.display = "flex";
            document.getElementById("close_navswitch").style.display = "block";
        } else {
            links.style.display = "none";
            document.getElementById("open_navswitch").style.display = "block";
        }

        show.style.display = "none";
    });
}


window.addEventListener('resize', () => resizeNavbar());
window.onload = resizeNavbar();

function resizeNavbar() {
    const closeNavswitch = document.getElementById("close_navswitch");
    const openNavswitch = document.getElementById("open_navswitch");
    const smLinks = document.getElementById("sm-links");
    const lgLinks = document.getElementById("lg-links");

    if(document.documentElement.clientWidth >= 1024) {
        smLinks.style.display = "none";
        closeNavswitch.style.display = "none";
        openNavswitch.style.display = "none";
        lgLinks.style.display = "flex";
    } else if(document.getElementById("close_navswitch").style.display !== "block") {
        openNavswitch.style.display = "block";
        closeNavswitch.style.display = "none";
        lgLinks.style.display = "none";
    }
}

/* =================== HERO CHANGING TEXT =================== */

setInterval(() => {
    const changingText = document.getElementById("changing_text");

    if(changingText.innerHTML === "green") {
        changingText.innerHTML = "clean";
    } else {
        changingText.innerHTML = "green";
    }
}, 3000);