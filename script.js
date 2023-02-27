function changeMenuIcon(){
    let menuIcon = document.getElementById("hamburger-menu");
    let imgSource = menuIcon.src.split("/");
    if (imgSource[5] === "icon-menu.svg") {
        menuIcon.src = "images/icon-close-menu.svg";
    }
    else if (imgSource[5] === "icon-close-menu.svg"){
        menuIcon.src = "images/icon-menu.svg";
    }
}


