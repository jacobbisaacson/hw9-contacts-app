console.log("hw9");

class Contact {

	constructor(obj) {
		console.log("this is the new contact data");
		console.log(obj);
		this.firstName = obj.firstName
		this.lastName = obj.lastName
		this.phoneNumber = obj.phoneNumber
		this.emailAddress = obj.emailAddress
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
		const ul = document.querySelector('#firstName-text-input')
		ul.innerHTML = ""
		for(let i = 0; i < this.contacts.length; i++) {
			let contact = this.contacts[i]
		}
		const li = document.createElement('li')
		li.innerText = contact.itemContent
		la.dataset.contactIndex = i
		ul.appendChild(li)
		// const ul = document.createElement("#firstName-text-input")
		// const li = document.createElement("#firstName-text-input")
		// ul.appendChild(li)
		// need to loop over array
		// in order to print each element of the added contact
		// need to create element to show
		// created and li, for the contact
		// for each elemt in the array, set the innerText of the li, to 
	}



}


const contactAddingForm = document.querySelector('#contact-adding-form')
contactAddingForm.addEventListener('submit', (obj) => {
	event.preventDefault()
	const inputContactInfo = document.querySelector("firstName-text-input")
	console.log(inputContactInfo.value);
	app.addContact(inputContactInfo.value)
	inputContactInfo.value = ""
})




const itemAddingForm = document.querySelector('#item-adding-form')
itemAddingForm.addEventListener('submit', (event) => {
  // default behavior of forms is sending info to server
  // (that's how the internet works)
  // but we don't want that here
  // we want to PREVENT the DEFAULT behavior
  // turns out we can do this using a method attached to the 
  // event object!!! 
  event.preventDefault() // <--- stops the form submission

  // find the input field
  const itemTextInput = document.querySelector('#item-text-input')
  // get the text from it
  // log that text 
  // console.log(itemTextInput.value);

  // call app.addTodo, pass in the text from the input field
  app.addTodo(itemTextInput.value)

  // clear the form 
  itemTextInput.value = ""

})




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



	// app.addContact(inputFirstName.value)
	// app.addContact(inputLastName.value)
	// app.addContact(inputPhoneNumber.value)
	// app.addContact(inputEmailAddress.value)
	// inputFirstName.value = ""
	// event.preventDefault()


})


















