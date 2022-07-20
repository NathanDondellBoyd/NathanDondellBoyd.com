/*Sticky Navbar*/

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function glueNav(){
    if ( window.pageYOffset <= sticky)
    {
        navbar.classList.add('sticky')
    }
    else{
        navbar.classList.remove('sticky')
    }
}

glueNav()