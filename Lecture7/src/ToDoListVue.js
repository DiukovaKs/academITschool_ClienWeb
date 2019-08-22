Vue.component("add-note", {
    props: {
        item: {
            text:String,
            isEditing:Boolean
        },
        newText: Object,
        newTextEdit: Object
    },
    template: "#templ",
    methods: {
        remove: function () {
            this.$emit("remove", this.item);
        },
        edit: function () {
            this.$emit("edit", this.item);
        },
        save: function () {
            this.$emit("save", this.item);
        }
    }
});

/*Vue.component("edit-note", {
    props: ["item"],
    template: "#templ2",
    newTextEdited: "1235",
    methods: {
        remove: function () {
            this.$emit("remove", this.item)
        },
        cancel: function () {
            //todo
        },
        save:function () {
            //todo
        }
    }
});*/

new Vue({
    el: "#toDoListVue",
    data: {
        //curr: 1,
        items: [
            {
                text: "",
                isEditing: false
            }
        ],
        newText: "",
        isInvalid: false,
        newTextEdit: ""
    },
    methods: {
        addNote: function () {
            if (this.newText === "") {
                this.isInvalid = true;
                return;
            }
            this.items.push({
                text: this.newText
            });
            this.isInvalid = false;
            this.newText = "";
        },
        removeNote: function (item) {
            this.items = this.items.filter(function (x) {
                return x !== item;
            });
        },
        editNote: function (item) {
            //this.curr = 2;
            this.newTextEdit = item.text;
            this.items = this.items.map(function (elem) {
                if (elem.text === item.text){
                    elem.isEditing = !elem.isEditing
                }
                return elem;
            });

        },
        cancel: function (item) {
            this.items = this.items.map(function (elem) {
                if (elem.text === item.text){
                    elem.isEditing = !elem.isEditing
                }
                return elem;
            });
        },
        addEditedNote: function (item) {
            this.items = this.items.map(function (elem) {
                if (elem.text === item.text){
                    elem.isEditing = elem.isEditing
                    elem.text = this.newTextEdit;
                }
                return elem;
            });

        },
    }
})
;

