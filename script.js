console.log("Hello, welcome to my mind")


function testing() {
    console.log("Clicked me!")
}


function toggleSidebar() {
    let sidebar = document.getElementsByClassName("sidebar")[0]
    sidebar.style.display = sidebar.style.display == "none" ? "block" : "none"
}