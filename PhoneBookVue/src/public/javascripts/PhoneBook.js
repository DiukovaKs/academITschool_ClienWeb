function post(url, data) {
    return $.post({
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json"
    });
}

function get(url, data) {
    return $.get(url, data);
}

new Vue({
    el: "#phoneBookVue",
    data: {
        contacts: [],
        newName: "",
        newSurname: "",
        newPhoneNumber: "",
        term: "",
        isInvalidName: false,
        isInvalidSurname: false,
        isInvalidPhone: false
    },
    created: function () {
        this.loadData();
    },
    methods: {
        addContact: function () {
            if (this.newName === "" && this.newSurname === "" && (this.newPhoneNumber === "" || isNaN(this.newPhoneNumber))) {
                this.isInvalidName = true;
                this.isInvalidSurname = true;
                this.isInvalidPhone = true;
                return
            } else if (this.newName === "") {
                this.isInvalid = true;
                return;
            } else if (this.newSurname === "") {
                this.isInvalidSurname = true;
                return;
            } else if (this.newPhoneNumber === "" || isNaN(this.newPhoneNumber)) {
                this.isInvalidPhone = true;
                return;
            }
            var data = {
                name: this.newName,
                surname: this.newSurname,
                phoneNumber: this.newPhoneNumber
            };

            this.newName = "";
            this.newSurname = "";
            this.newPhoneNumber = "";

            this.isInvalidName = false;
            this.isInvalidSurname = false;
            this.isInvalidPhone = false;

            var self = this;

            post("/addContact", data).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }
                self.loadData();

                self.name = "";
                self.surname = "";
                self.phoneNumber = "";
            })
        },
        loadData: function () {
            var self = this;

            var data = {
                term: this.term
            };

            get("/getContacts", data).done(function (contacts) {
                self.contacts = contacts;
            });
        },
        removeContact: function (contact) {
            /* this.contacts = this.contacts.filter(function (x) {
                 return x !== contact;
             });*/
            var self = this;
            post("/removeContact", {id: contact.id}).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }
                self.loadData();
            });
        },
        search: function () {
            this.loadData();
        }
    }
});
