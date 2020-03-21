console.log("hw9");

class Contact {
    constructor(firstName, lastName, phoneNumber, emailAddress) {
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNumber = phoneNumber
        this.emailAddress = emailAddress
    }
}

const app = {

    contactsArray: [],
    addContact: function(firstName, lastName, phoneNumber, emailAddress) {
        const newContact = new Contact(firstName, lastName, phoneNumber, emailAddress);
        app.contactsArray.push(newContact)
    },

    printContactToList: function() {


        const lastObjInArr = app.contactsArray[app.contactsArray.length - 1]

        const contactDiv = document.createElement('div')
        contactDiv.id = lastObjInArr.lastName + '-' + lastObjInArr.firstName
        contactDiv.style.cssText = "border-style : solid; margin-bottom : 1% ";


        const h1NameTag = document.createElement('h1')
        h1NameTag.innerHTML = `${lastObjInArr.lastName}, ${lastObjInArr.firstName}`
        contactDiv.appendChild(h1NameTag)

        const h3PhoneTag = document.createElement('h3')
        h3PhoneTag.innerHTML = `Phone Number : ${lastObjInArr.phoneNumber}`
        contactDiv.appendChild(h3PhoneTag)

        const h4EmailTag = document.createElement('h4')
        h4EmailTag.innerHTML = `Email : ${lastObjInArr.emailAddress}`
        contactDiv.appendChild(h4EmailTag)

        const makeDeleteButton = () => {
            const deleteButton = document.createElement("button");
            deleteButton.id = `delete-` + lastObjInArr.lastName + '-' + lastObjInArr.firstName
            deleteButton.classList.add("deleteButtons")
            deleteButton.innerHTML = "Delete Contact"
            contactDiv.appendChild(deleteButton)

        };

        makeDeleteButton()

        document.body.appendChild(contactDiv)


    },

    deleteContact: (contact) => {
        document.body.removeChild(contact)
    },
}




const submitInfo = document.querySelector("#contact-form")
submitInfo.addEventListener('submit', (event) => {

    let firstNameInput = document.querySelector("#firstName").value
    let lastNameInput = document.querySelector("#lastName").value
    let phoneNumberInput = document.querySelector("#phoneNumber").value
    let emailAddressInput = document.querySelector("#emailAddress").value

    event.preventDefault();
    app.addContact(firstNameInput, lastNameInput, phoneNumberInput, emailAddressInput);
    app.printContactToList();

    firstNameInput = "";
    lastNameInput = "";
    phoneNumberInput = "";
    emailAddressInput = "";
})

const deleteButtons = document.querySelectorAll(".deleteButtons")
const contactsUL = document.querySelector('#contacts-ul')

document.body.addEventListener('click', (event) => {
    let deleteButtonClicked = event.target
    let contactToDelete = deleteButtonClicked.parentNode
    if (deleteButtonClicked.className === "deleteButtons") {
        app.deleteContact(contactToDelete)
    }
})