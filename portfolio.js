document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('hamburger-menu').style.width = "100%";
        document.getElementById('hamburger').style.display = "none";
        document.getElementById('new-hamburger').style.display = "block";
        document.body.style.overflowY = "hidden";
    })
    document.getElementById('new-hamburger').addEventListener('click', () => {
        document.getElementById('hamburger-menu').style.width = "0%";
        document.getElementById('hamburger').style.display = "block";
        document.getElementById('new-hamburger').style.display = "none";
        document.body.style.overflowY = "scroll";
    })
    document.querySelectorAll('.content-item').forEach(element => {
        element.addEventListener('click', () => {
            document.getElementById('hamburger-menu').style.transition = "0.2s";
            document.getElementById('hamburger-menu').style.width = "0%";
            document.getElementById('hamburger').style.display = "block";
            document.getElementById('new-hamburger').style.display = "none";
            document.body.style.overflowY = "scroll";

        })
    });
})