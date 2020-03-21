console.log("hw9");

class Contact {
	constructor(firstName,lastName,phoneNumber,emailAddress) {
		this.firstName = firstName
		this.lastName = lastName 
		this.phoneNumber = phoneNumber
		this.emailAddress = emailAddress
	}
}

const app = {

	contactsArray : [],
	addContact : function(firstName,lastName,phoneNumber,emailAddress){
		const newContact = new Contact(firstName,lastName,phoneNumber,emailAddress);
		app.contactsArray.push(newContact)
	},

printContactToList : function(){
	

		const lastObjInArr = app.contactsArray[app.contactsArray.length-1]
		
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
			deleteButton.id = `delete-`+lastObjInArr.lastName + '-' + lastObjInArr.firstName
			deleteButton.classList.add("deleteButtons")
			deleteButton.innerHTML = "Delete Contact"
			contactDiv.appendChild(deleteButton)

		};

		makeDeleteButton() 

		document.body.appendChild(contactDiv)


	},

	deleteContact : (contact) => {
		document.body.removeChild(contact)
	}, 
}





const contactForm = document.querySelector("#contact-adding-form")
contactForm.addEventListener('submit', (event) => {
	event.preventDefault()

const inputFirstName = document.querySelector("#firstName-text-input")
const inputLastName = document.querySelector("#lastName-text-input")
const inputPhoneNumber = document.querySelector("#phoneNumber-text-input")
const inputEmailAddress = document.querySelector("#emailAddress-text-input")
	const newContact = {
		firstName: inputFirstName.value,
		lastName: inputLastName.value,
		phoneNumber: inputPhoneNumber.value,
		emailAddress: inputEmailAddress.value
	}
app.addContact(newContact)



})















