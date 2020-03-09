![GA Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# Contact List

Following the patterns from class today, create a Contact List app, in a folder structure inside your fork of this repo.  

## Model your data

You should have a `Contact` class, an `app` object, and whatever listeners you'd like to have. A `Contact` should have 4 properties set in its constructor: a firstName, lastName, phoneNumber, and emailAddress.  They can have whatever else you want to include. 

## Let the user add contacts

A form should be displayed that lets the user enter the information.  The form should have four fields—one for each of the properties (firstName, lastName, phoneNumber, and emailAddress).  When the form is submitted, a new `Contact` should be instantiated and added into an array in the `app` object.   This should be done by having a listener/handler get the data for each of the 4 fields and then calling a method in the `app` object (`addContact()` might be a nice name for this method) and passing in the form data. 

## Print the contacts

After a contact is added, they should appear on in a list on the screen in a nice layout.  If you have time, make it look nice (like maybe some kind of little cards or something?), but **_functionality is the most important thing_**.

## You should be able to delete them

User should be able to delete a contact by clicking something (a button or an X or a link or something, for each contact).

> Hints: Have a container (div or ul) where all the contacts are displayed. Add a listener to the container.  Use conditional logic and `e.target`  (i.e. check and see if the thing clicked has a class like `.delete-button`) so that if the user clicks on a delete button/link/X something happens, but otherwise the click is ignored.

Bonus: Use `confirm()` to ask the user if they're sure they want to delete that contact.

## Commits & guidance

**Your app should have at least ten commits.**  Add functionalities one at a time.  The exact order in which you add them is up to you, but you should try to have a functional coherent app after each step. 

If you're unsure how to approach this, try to follow the commit history for today's lesson and lab.

<details><summary>Suggested list of commit messages</summary>

#### Note: These could _definitely_ be broken down into smaller steps
  
  * form for user to add contacts
  
  * added a listener/handler for form submission
  
  * form data prints in console when user submits form
  
  * created and tested a `Contact` class by instantiating it a couple of times
  
  * `addContact()` method in `app` that instantiates a contact and pushes the contact object into an array
  
  * `app.addContact()` is called when user submits form
  
  * contact is pushed into an `app.contacts` array when user submits form
  
  * `app.printContacts()` prints contact names on screen (no CSS)
  
  * new contacts are displayed after the user adds them

  * `app.printContacts()` prints all contact info on screen
  
  * added a listener/handler for clicking a contact's delete button
  
  * user can click a contact name and the contact's name and the index of that contact in the `app.contacts` array show on the console
  
  * user can delete a contact

</details>


# Hungry for More?

Add these functionalities, committing after each. 

* Contacts should display in alphabetical order by first name.

* User should be able to click something that allows them to toggle whether the contacts are sorted by last name or first name.

* User should be able to "favorite" contacts, and "favorited" contacts should appear separately at the top of the list. 

* User should be able to edit/update information for existing contacts.

* User should not be able to add a contact that has the same first AND last name as another contact.

* Contacts should be able to have multiple phone numbers.  Phone numbers should be able to be added or removed from a contact in their edit screens.

* User should be able to store the contacts in `localStorage` (google it) so that they see their list (including favorites) when the page is reloaded/if the window is closed.



