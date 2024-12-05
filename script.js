function showParagraph() {
    var select = document.getElementById("terms");
    var value = select.value;
    var description = document.getElementById("description");

    if (value === "html") {
        description.textContent = "HTML stands for HyperText Markup Language. It is the standard language for creating web pages.";
    } else if (value === "css") {
        description.textContent = "CSS stands for Cascading Style Sheets. It is used to style and layout web pages.";
    } else if (value === "javascript") {
        description.textContent = "JavaScript is a programming language commonly used in web development. It allows you to create dynamically updating content.";
    } else if (value === "git") {
        description.textContent = "Git is a distributed version control system. It helps you track changes in your code and collaborate with others.";
    } else {
        description.textContent = "";
    }
}