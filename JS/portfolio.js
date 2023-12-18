//Open and close popform
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


//creates the contact form when user clicks off item
//add evenetlistener for 'clicks'
document.addEventListener("click", function(event) {
    //if click happens on cancel button or anywhere not contact form
    //or elements with contact class
    if (event.target.matches(".cancel") || !event.target.closest(".popForm") && !event.target.closest(".popButton") && !event.target.closest("#contact")) {
        closeForm()
    }
}, false )


// function to display labels on hover
function toggleLabelOnHover(buttonId, labelId) {
    var button = document.getElementById(buttonId);
    var label = document.getElementById(labelId);

    button.addEventListener('mouseenter', function () {
        label.style.display = 'block';
    });

    button.addEventListener('mouseleave', function () {
        label.style.display = 'none';
    });
}


// Apply the hover effect for each button-label pair
toggleLabelOnHover('htmlButton', 'htmlLabel');
toggleLabelOnHover('dbButton', 'dbLabel');
toggleLabelOnHover('pythonButton', 'pythonLabel');
toggleLabelOnHover('csharpButton', 'csharpLabel');
toggleLabelOnHover('dotNetButton', 'dotNetLabel');
