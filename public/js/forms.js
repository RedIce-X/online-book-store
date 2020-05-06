const eye_icons = [...document.querySelectorAll("i")];
const pwd_textbox = [...document.querySelectorAll(".pwd-textbox")];
const form_controls = [...document.querySelectorAll(".form-control.pwd")]
const eye_icon_slash = [...document.querySelectorAll(".eye-icon-slash")];

eye_icons.forEach(function (element, index) {
    element.addEventListener("click", function () {
        // const eye_icon = document.createElement("i");
        if (pwd_textbox[index].type === "password") {
            eye_icon_slash[index].style.visibility = "initial";
            pwd_textbox[index].type = "text";
            // eye_icon.className = "fas fa-eye-slash";
            // eye_icons.splice(index, 1, eye_icon);
            // form_controls[index].replaceChild(eye_icon, element)
        } else {
            eye_icon_slash[index].style.visibility = "hidden";
            pwd_textbox[index].type = "password";
            // eye_icon.className = "fas fa-eye";
            // eye_icons.splice(index, 1, eye_icon);
            // form_controls[index].replaceChild(eye_icon, element)
        }
    })
});