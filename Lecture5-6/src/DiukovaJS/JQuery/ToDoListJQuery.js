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
            li.remove();
        });
        li.children().eq(2).click(function () {
            var li2 = $("<li>");
            li2.html("<input type='text'><button type='button' class='button'>X</button><button type='button' class='button'>cancel</button><button type='button' class='button'>save</button >");
            li2.children().eq(0).val(newText);
            li.before(li2);
            li.hide();

            li2.children().eq(1).click(function () {
                li2.remove();
            });
            li2.children().eq(2).click(function () {
                li2.remove();
                li.show();

            });
            li2.children().eq(3).click(function () {
                newText = li2.children().eq(0).val();
                li.children().eq(0).text(newText);
                li2.remove();
                li.show();
            })
        });
        toDoList.append(li);
        toDoText.val("");
    })
});