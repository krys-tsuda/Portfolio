// // loader animation 
// document.addEventListener("DOMContentLoaded", function () {
//     // Wait for the DOM to be fully loaded
//     setTimeout(function () {
//         // After 7 seconds, add the "off" class to the loader screen
//         document.getElementById("loader-screen").classList.add("off");
//     }, 7000);
// });

// Animation for popform
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

document.addEventListener("click", function (event) {
    if (
        event.target.matches(".close") ||
        !event.target.closest(".popForm") &&
        !event.target.closest(".popButton") &&
        !event.target.closest("#contact")
    ) {
        closeForm();
    }
}, false);

// // Parallax scroll effect
// // Defining function when DOM is loaded
// document.addEventListener("DOMContentLoaded", function () {
//     // Get all elements with the class 'flex-row'
//     var flexRows = document.querySelectorAll(".flex-row");

//     // Function to check if element is in viewport
//     // Function to check if element is in viewport
//     function isInViewport(element) {
//         var rect = element.getBoundingClientRect();
//         console.log(rect);
//         return (
//             rect.top <= window.innerHeight &&
//             rect.bottom >= 0 &&
//             rect.left <= window.innerWidth &&
//             rect.right >= 0
//         );
//     }


//    // Function to handle scroll events
//     function handleScroll() {
//         flexRows.forEach(function (row) {
//             if (isInViewport(row)) {
//                 if (!row.classList.contains("active")) {
//                     console.log("Adding 'active' class to row:", row);
//                     row.classList.add("active");
//                 }
//             } else {
//                 if (row.classList.contains("active")) {
//                     console.log("Removing 'active' class from row:", row);
//                     row.classList.remove("active");
//                 }
//             }
//         });
//     }


//     // Initial check on page load
//     handleScroll();

//     // Listen for scroll events
//     window.addEventListener("scroll", handleScroll);
// });