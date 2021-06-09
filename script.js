const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav')
const toggleButtonBar_1 = document.querySelector('.toggle-button__bar-1');
const toggleButtonBar_3 = document.querySelector('.toggle-button__bar-3');
let a;
const header = document.querySelector('header');

toggleButton.addEventListener('click', function(){
    if(a == 1){
        //mobileNav.style.display = "none";
        toggleButtonBar_1.style.animation = "up-1 500ms forwards";
        toggleButtonBar_3.style.animation = "down-2 500ms forwards";
        mobileNav.style.animation = "slide-right 500ms forwards";
        return a=0;
    }
    else {
        //mobileNav.style.display = "flex";
        toggleButtonBar_1.style.animation = "down-1 500ms forwards";
        toggleButtonBar_3.style.animation = "up-2 500ms forwards";
        mobileNav.style.animation = "slide-left 500ms forwards";
        return a=1;
    }
})


mobileNav.addEventListener('click', closeMobileNav)

function closeMobileNav() {
    //mobileNav.style.display = "none";
    toggleButtonBar_1.style.animation = "up-1 500ms forwards";
    toggleButtonBar_3.style.animation = "down-2 500ms forwards";
    mobileNav.style.animation = "slide-right 500ms forwards";
    return a=0;
}

document.addEventListener('scroll', () => {
	let scrollPosition = window.scrollY;
	if (scrollPosition > 150) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'rgba(0,0,0,0.1)';
	}
});