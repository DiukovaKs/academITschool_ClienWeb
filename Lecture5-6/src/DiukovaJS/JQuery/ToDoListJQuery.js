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

        var note = li.children().eq(0);
        note.text(newText);

        var removeButton = li.children().eq(1);
        removeButton.click(function () {
            removeListItem(li)
        });

        var editButton = li.children().eq(2);
        editButton.click(function () {
            var editedLi = $("<li>");
            editedLi.html("<input type='text'><button type='button' class='button'>X</button><button type='button' class='button'>cancel</button><button type='button' class='button'>save</button >");
            var editNote = editedLi.children().eq(0);
            editNote.val(newText);
            li.before(editedLi);
            li.hide();

            var editRemoveButton = editedLi.children().eq(1);
            editRemoveButton.click(function () {
                removeListItem(editedLi);
            });

            var editCancelButton = editedLi.children().eq(2);
            editCancelButton.click(function () {
                showListItem(editedLi, li);
            });

            var editSaveButton = editedLi.children().eq(3);
            editSaveButton.click(function () {
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