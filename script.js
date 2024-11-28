const h4 = document.querySelector("#Error");
const form = document.querySelector("form");
const int1 = document.querySelector("#input1");
const int2 = document.querySelector("#input2");
const int3 = document.querySelector("#input3"); 
const int4 = document.querySelector("#input4"); 
const cursor = document.createElement('div');
const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordValidation = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (int1.value.trim() === "" || int2.value.trim() === "" || int3.value.trim() === "" || int4.value.trim() ==="") {
        h4.textContent="All fields are required";
        h4.style.color="red";
        console.log("All fields are required");
    } 
    else if (!emailValidation.test(int3.value.trim())) {
        h4.textContent="invalid email address";
        h4.style.color="red";
        console.log("invalid email address");
    }
    else if (!passwordValidation.test(int4.value.trim())) { h4.textContent=" invalid pasward";
        h4.style.color="red";
        console.log("Invalid password: Password must be at least 8 characters long and include a special character");
    }
    else  {h4.textContent="Form submitted successfully.";
        h4.style.color="green";
        console.log("Form submitted successfully!");
    }
});
cursor.classList.add('cursor');
document.body.appendChild(cursor);
function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('cursor-trail');
    document.body.appendChild(trail);


    trail.style.left = `${x - 7}px`; 
    trail.style.top = `${y - 7}px`;
    
    const colors = ['#b6b9ba', '#b6b9ba', '#b6b9ba', '#d3d3d3', '#b6b9ba'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    trail.style.background = randomColor;
}
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    createTrail(e.pageX, e.pageY);
});

