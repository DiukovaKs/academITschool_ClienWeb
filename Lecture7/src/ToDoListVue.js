
Vue.component("add-note", {
    props: ["item"],
    template: "#templ",
    methods: {
        remove: function () {
            this.$emit("remove", this.item)
        },
        edit:function () {
            this.$emit("edit", this.item);
        }
    }
});

Vue.component("edit-note", {
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
});

new Vue({
    el: "#toDoListVue",
        data: {
        curr: "add-note",
        items: [],
        newText: "",
        isInvalid: false
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
            item.curr = "edit";
           /** this.items = this.items.filter(function (x) {
                return x !== item;
            });*/

        },
        cancel: function () {
            //todo
        }
    }
})
;

