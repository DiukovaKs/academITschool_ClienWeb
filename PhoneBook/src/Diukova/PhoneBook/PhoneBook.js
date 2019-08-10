$(document).ready(function () {
    var table = $(".tbody");
    var inputName = $("#inputName");
    var inputSurname = $("#inputSurname");
    var inputPhone = $("#inputPhone");
    var addButton = $("#addButton");

//Счетчик номеров
    function getNumber(curr) {
        if (curr === undefined) {
            curr = 1;
        }
        return {
            getNext: function () {
                return curr++;
            },
            setCurr: function (val) {
                curr = val;
            }
        }
    }

    var newCurr = undefined;
    var counter = getNumber(newCurr);

//Добавление номера в книгу
    addButton.click("click", function () {
        //Проверка заполнености полей
        if (inputSurname.val() === "" && inputName.val() === "" && (inputPhone.val() === "" || isNaN(inputPhone.val()))) {
            alert("Fill text areas correct!");
            inputName.addClass("btn-outline-danger");
            inputSurname.addClass("btn-outline-danger");
            inputPhone.addClass("btn-outline-danger");
            return
        } else if (inputName.val() === "") {
            alert("Fill Name!");
            inputName.addClass("btn-outline-danger");
            return;
        } else if (inputSurname.val() === "") {
            alert("Fill Surname!");
            inputSurname.addClass("btn-outline-danger");
            return;
        } else if (inputPhone.val() === "" || isNaN(inputPhone.val())) {
            alert("Fill correct Phone number!");
            inputPhone.addClass("btn-outline-danger");
            return;
        }

//Создание новой строки
        $('.emptyRow').remove();
        var newRow = $("<tr>");
        newRow.html("<td class='num'></td><td></td><td></td><td></td><td><button type='button'>X</button></td>");
        table.append(newRow);

//Вычисление порядкового номера строки
        if (newCurr === undefined) {
            var number = counter.getNext();
        } else {
            counter.setCurr(newCurr + 1);
            number = counter.getNext();
            newCurr++;
        }

//Добавление данных из input
        var numberCell = newRow.children().eq(0);
        numberCell.text(number);
        var nameCell = newRow.children().eq(1);
        nameCell.text(inputName.val());
        var surnameCell = newRow.children().eq(2);
        surnameCell.text(inputSurname.val());
        var phoneCell = newRow.children().eq(3);
        phoneCell.text(inputPhone.val());

//Вставка пустой строки (для пущей красоты)
        var nextRow = $("<tr class='emptyRow'>");
        nextRow.html("<td></td><td></td><td></td><td></td><td></td>");
        table.append(nextRow);

//Удаление данных из input
        inputPhone.val("");
        inputName.val("");
        inputSurname.val("");

//Очистка стилей после неправильного ввода данных
        inputName.removeClass("btn-outline-danger");
        inputSurname.removeClass("btn-outline-danger");
        inputPhone.removeClass("btn-outline-danger");

//Удаление записи
        var delButton = newRow.children().eq(4);
        delButton.click("click", function () {
            newRow.remove();
            counter.setCurr(1);
            var listNumber = $('.num');
            if (!listNumber.isCreated) {
                newCurr = undefined;
            }

            listNumber.each(function (index) {
                $(this).text(counter.getNext(index + 1));
                newCurr = index + 1;
            });
        });
    });
});