document.addEventListener("DOMContentLoaded", function () {
    var toDoText = document.getElementById("textArea");
    var toDoButton = document.getElementById("addButton");
    var toDoList = document.getElementById("toDoList");
    var validationMessage = document.querySelector(".validationMessage");

    toDoButton.addEventListener("click", function () {
        var newText = toDoText.value;
        if (newText === "") {
            validationMessage.style.display = "block";
            return;
        }
        validationMessage.style.display = "none";
        var li = document.createElement("li");

        li.innerHTML = "<span class='span'></span><button class='button' type='button'>X</button><button class='button' type='button'>Edit</button >";
        li.children[0].textContent = newText;

        li.children[1].addEventListener("click", function () {
            toDoList.removeChild(li);
        });

        li.children[2].addEventListener("click", function () {
            var li2 = document.createElement("li");

            li2.innerHTML = "<input id='inputEdit' type='text'><button class='button' type='button'>X</button><button class='button' type='button'>cancel</button><button class='button' type='button'>save</button >";
            li2.children[0].value = newText;
            li.style.display = "none";
            toDoList.insertBefore(li2, li);

            li2.children[1].addEventListener("click", function () {
                toDoList.removeChild(li2);
            });

            li2.children[2].addEventListener("click", function () {
                toDoList.removeChild(li2);
                li.style.display = "block";
            });

            li2.children[3].addEventListener('click', function () {
                newText = li2.children[0].value;
                li.children[0].textContent = newText;
                toDoList.removeChild(li2);
                li.style.display = "block";
            })
        });
        toDoList.appendChild(li);
        toDoText.value = "";
    })
});