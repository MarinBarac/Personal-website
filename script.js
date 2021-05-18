var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav')
var toggleButtonBar_1 = document.querySelector('.toggle-button__bar-1');
var toggleButtonBar_3 = document.querySelector('.toggle-button__bar-3');
var a;

toggleButton.addEventListener('click', function(){
    if(a == 1){
        mobileNav.style.display = "none";
        toggleButtonBar_1.style.display = "block"
        toggleButtonBar_3.style.display = "block"
        return a=0;
    }
    else {
        mobileNav.style.display = "flex";
        toggleButtonBar_1.style.display = "none"
        toggleButtonBar_3.style.display = "none"
        return a=1;
    }
})


mobileNav.addEventListener('click', closeMobileNav)

function closeMobileNav() {
    mobileNav.style.display = "none";
    toggleButtonBar_1.style.display = "block"
    toggleButtonBar_3.style.display = "block"
    return a=0;
}