function removeListItem(item) {
    item.remove();
}

function showListItem(hide, show) {
    hide.remove();
    show.show();
}

$(document).ready(function () {
    var toDoText = $("#textArea");
    var toDoButton = $("#addButton");
    var toDoList = $("#toDoList");
    var validationMessage = $(".validationMessage");

    toDoButton.click(function () {
        var newText = toDoText.val();
        if (newText === "") {
            validationMessage.show();
            return;
        }
        validationMessage.hide();

        var li = $("<li>");
        li.html("<span class='span'></span><button type='button' class='button'>X</button><button type='button' class='button'>Edit</button >");

        li.children().eq(0).text(newText);

        li.children().eq(1).click(function () {
            removeListItem(li)
        });

        li.children().eq(2).click(function () {
            var editedLi = $("<li>");
            editedLi.html("<input type='text'><button type='button' class='button'>X</button><button type='button' class='button'>cancel</button><button type='button' class='button'>save</button >");
            editedLi.children().eq(0).val(newText);
            li.before(editedLi);
            li.hide();

            editedLi.children().eq(1).click(function () {
                removeListItem(editedLi);
            });

            editedLi.children().eq(2).click(function () {
                showListItem(editedLi, li);
            });

            editedLi.children().eq(3).click(function () {
                newText = editedLi.children().eq(0).val();
                if (newText === "") {
                    removeListItem(editedLi);
                    return;
                }
                li.children().eq(0).text(newText);
                showListItem(editedLi, li);
            })
        });
        toDoList.append(li);
        toDoText.val("");
    })
});