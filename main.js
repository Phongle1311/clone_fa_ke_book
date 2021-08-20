// navbar mobile
const toggleBar = document.getElementById('toggle-bar');
const mobileDropdown = document.querySelector("#mobile-dropdown-menu");

toggleBar.onclick = () => {
    mobileDropdown.classList.toggle("hidden");
}

//shortcut dropdown
const toggleDropdown = document.querySelectorAll(".toggle-dropdown");
const shortcutDropdown = document.querySelectorAll(".shortcut-dropdown");

toggleDropdown.forEach((item, index)=>{
    item.onclick = () => {
        shortcutDropdown.forEach((item2, index2)=>{
            if (index2===index) {
                item2.classList.toggle("hidden");
            }
            else {
                item2.classList.add("hidden");
            }
        })
    }
});

// Quit Notifications
const quit=document.querySelector(".quit");
const notifications=document.querySelector("#notifications");
quit.onclick = () => {notifications.classList.add("hidden");}