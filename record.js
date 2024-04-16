document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var empID = document.getElementById("empID").value;
    var department = document.getElementById("department").value;
    var experience = document.getElementById("experience").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var role = "";
    
    if (experience > 5) {
        role = "Senior";
    } else if (experience >= 2 && experience <= 5) {
        role = "Junior";
    } else {
        role = "Fresher";
    }
    
    var newRow = "<tr><td>" + name + "</td><td>" + empID + "</td><td>" + department + "</td><td>" + experience + "</td><td>" + email + "</td><td>" + mobile + "</td><td>" + role + "</td><td><button class='deleteBtn'>Delete</button></td></tr>";
    
    document.getElementById("EMPtable").innerHTML += newRow;
    
    document.getElementById("employeeForm").reset();
});

document.getElementById("EMPtable").addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteBtn")) {
        event.target.parentElement.parentElement.remove();
    }
});
