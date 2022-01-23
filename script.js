console.log("hello1456")

document.querySelector('.cross').style.display = "none";

if (window.matchMedia("(max-width: 400px)").matches) {
    document.querySelector('.sidebar').classList.toggle('sidebargo');
}


document.querySelector('.hamburger').addEventListener("click", () => {
        document.querySelector('.sidebar').classList.toggle('sidebargo');

        if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
            document.querySelector('.ham').style.display = "inline";
            document.querySelector('.cross').style.display = "none";
        } else {

            document.querySelector('.cross').style.display = "inline";
            document.querySelector('.ham').style.display = "none";
        }


    }

)
