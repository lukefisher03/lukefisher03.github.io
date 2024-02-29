console.log("Hello, welcome to my mind")


function testing() {
    console.log("Clicked me!")
}


function toggleSidebar() {
    console.log("Sidebar toggled")
    let sidebar = document.getElementsByClassName("sidebar")[0]
    sidebar.style.display = sidebar.style.display == "none" ? "block" : "none"
}