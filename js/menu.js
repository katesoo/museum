const menu = document.querySelector(".menu-burger");
const navigation = document.querySelector(".navigation")
const welcomeText = document.querySelector(".welcome_all_text")

menu.addEventListener("click", function(){
    menu.classList.toggle("active");
    navigation.classList.toggle("active");
    welcomeText.classList.toggle("active-welcome-text");
});

