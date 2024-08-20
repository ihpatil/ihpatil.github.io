var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = e.target;
    var formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            modal.style.display = "block";
            form.innerHTML = "<p>Message sent!</p>";
        } else {
            response.json().then(data => {
                if (data && data.hasOwnProperty('errors')) {
                    alert(data.errors.map(error => error.message).join(", "));
                } else {
                    alert('Failed to send email.');
                }
            });
        }
    }).catch(error => {
        alert('Failed to send email.');
    });
});

function showModalpp() {
    var modal = document.getElementById("ppModal");
    modal.style.display = "block";
}
function showModaldot() {
    var modal = document.getElementById("dotModal");
    modal.style.display = "block";
}
function showModalsoon() {
    var modal = document.getElementById("soonModal");
    modal.style.display = "block";
}
function closeModalpp() {
    var modal = document.getElementById("ppModal");
    modal.style.display = "none";
}
function closeModaldot() {
    var modal = document.getElementById("dotModal");
    modal.style.display = "none";
}
function closeModalsoon() {
    var modal = document.getElementById("soonModal");
    modal.style.display = "none";
}
window.onclick = function(event) {
var modal = document.getElementById("ppModal");
if (event.target == modal) {
    modal.style.display = "none";
    }
}
        
        
        