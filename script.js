$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 150) {
            $(".header").addClass("header-active");
        } else {
           $(".header").removeClass("header-active");
        }
    });
});

const myBody = document.body;
const settingToggle = document.getElementById('settings-toggle');
const settingDiv = document.querySelector('.settings-div');

settingToggle.addEventListener('click', ()=>{
    settingToggle.classList.toggle('active');
    settingDiv.classList.toggle('settings-active');
});

const rtlToggle = document.getElementById('rtl-toggle');
rtlToggle.addEventListener('click', ()=>{
    myBody.classList.toggle('rtl');
    settingDiv.classList.toggle('rtl-settings');
});


const sections = document.getElementsByTagName('section');

const seamlessToggle = document.getElementById('seamless-toggle');
seamlessToggle.addEventListener('click', ()=>{
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.toggle('section-bg');
    }
});

const themeColor = document.getElementById('theme-color');
themeColor.addEventListener('click', ()=>{
    myBody.classList.toggle('yellow-theme');
});


const darkMode = document.getElementById('dark-mode');
darkMode.addEventListener('click', ()=>{
    myBody.classList.toggle('dark-theme');
});

const largerFont = document.getElementById('larger-font');
largerFont.addEventListener('click', ()=>{
    if (largerFont.classList.contains('font-active')) {
        document.documentElement.style.fontSize = 68.5 + '%';
        largerFont.classList.remove('font-active');
    }
    else{
        largerFont.classList.add('font-active');
        document.documentElement.style.fontSize = 90 + '%';
    }
});

const smallerFont = document.getElementById('smaller-font');
smallerFont.addEventListener('click', ()=>{
    if (smallerFont.classList.contains('font-active')) {
        document.documentElement.style.fontSize = 68.5 + '%';
        smallerFont.classList.remove('font-active');
    }
    else{
        smallerFont.classList.add('font-active');
        document.documentElement.style.fontSize = 50 + '%';
    }
});


const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    settingDiv.classList.toggle('settings-div-mobile');
    settingDiv.classList.toggle('settings-active-mobile');

    if (hamburger.classList.contains('active')) {
        header.classList.add('header-active');
    }
    else{
        header.classList.remove('header-active');
    }
});