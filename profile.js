function validateForm(event) {
    event.preventDefault();

   
    const inputUsername = document.getElementById("username").value.trim();
    const inputNoTelp = document.getElementById("notelp").value.trim();
    const inputGmail = document.getElementById("gmail").value.trim();
    const inputPassword = document.getElementById("password").value.trim();

    
    if (!inputUsername || !inputNoTelp || !inputGmail || !inputPassword) {
        showModal(); 
    } else {
        
        localStorage.setItem("username", inputUsername);
        localStorage.setItem("notelp", inputNoTelp);
        localStorage.setItem("gmail", inputGmail);
        localStorage.setItem("password", inputPassword);

        
        window.location.href = "profile.html"; 
    }
}

function validateFormLogin(event) {
    event.preventDefault();

   
    const inputEmail = document.getElementById("gmail").value.trim();
    const inputPassword = document.getElementById("password").value.trim();

    
    if (inputEmail === "silvia@gmail.com" || inputPassword === "123") {
        localStorage.setItem("username", inputEmail);
        localStorage.setItem("password", inputPassword);
        window.location.href = "profile.html";
    } else {
        showModal(); 
    }
}

function showModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "flex"; // Tampilkan modal
    } else {
        console.error("Modal element not found");
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none"; 
    } else {
        console.error("Modal element not found");
    }
}


document.getElementById("closeModalBtn")?.addEventListener("click", closeModal);

window.onload = function () {
   
    const username = localStorage.getItem("username");
    const gmail = localStorage.getItem("gmail");
    const notelp = localStorage.getItem("notelp");


    const usernameElement = document.getElementById("usernameElement");
    const gmailElement = document.getElementById("gmailElement");
    const notelpElement = document.getElementById("notelpElement");

    
    if (usernameElement && username) {
        usernameElement.textContent = username;
    }

    if (gmailElement && gmail) {
        gmailElement.textContent = gmail;
    }

    if (notelpElement && notelp) {
        notelpElement.textContent = notelp;
    }
};