const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () => {
    console.log("funciona");
    if (mainMenuElement.style.display === "none") {
            mainMenuElement.style.display = "block";
          } else {
                mainMenuElement.style.display = "none";
          }
});