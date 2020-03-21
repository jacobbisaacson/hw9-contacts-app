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
	contacts: [],
 
	addContact: function(obj) {
		const contact = new Contact(obj)
		this.contacts.push(contact)
		this.printContact()

	},

	printContact: function() {
		const ul = document.querySelector('#contact-adding-form')
		ul.innerHTML = ""
		for(let i = 0; i < this.contacts.length; i++) {
			let contact = this.contacts
			const li = document.createElement('li')
			li.innerText = `${this.contacts[i].firstName} ${this.contacts[i].lastName} 
			\n phone: ${this.contacts[i].phoneNumber} \n
			email: ${this.contacts[i].emailAddress}`

			ul.appendChild(li)
		// const ul = document.createElement("#firstName-text-input")
		}
	}


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















