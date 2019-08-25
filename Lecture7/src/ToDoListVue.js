new Vue({
    el: "#toDoListVue",
    data: {
        items: [],
        newText: "",
        isInvalid: false,
        newTextEdit: "",
        isDisabled: false
    },
    methods: {
        addNote: function () {
            if (this.newText === "") {
                this.isInvalid = true;
                return;
            }
            this.items.push({
                text: this.newText,
                isEditing: false
            });
            this.isInvalid = false;
            this.newText = "";
        },
        removeNote: function (item) {
            this.isDisabled = false;
            this.items = this.items.filter(function (x) {
                return x !== item;
            });
        },
        editNote: function (item) {
            this.isDisabled = true;
            this.newTextEdit = item.text;
            this.items.forEach(function (elem) {
                if (elem.text === item.text) {
                    item.isEditing = true;
                }
            });
        },
        cancel: function (item) {
            this.isDisabled = false;
            this.items.forEach(function (elem) {
                if (elem.text === item.text) {
                    item.isEditing = false;
                }
            });
        },
        addEditedNote: function (item) {
            this.isDisabled = false;
            item.text = this.newTextEdit;
            this.items.forEach(function (elem) {
                if (elem.text === item.text) {
                    item.isEditing = false;
                }
            });
        }
    }
});


