const addNoteButton = document.getElementById('add-notes');
const inputTitle = document.getElementById('title');
const inputDate = document.getElementById('due-date');
const inputUrgency = document.getElementById('urgency');
const yourNotesSection = document.getElementById('your-notes');

// addNoteButton.onclick;

const getItemFromSessionStorage = () => {
    let notes = sessionStorage.getItem('notes');
    // ["note", "note"] or null
    if(notes){
        notes = JSON.parse(notes);
    }
    return notes;
}

const addNotesOnPageLoad = () => {
    // step - 1 get the data
    let notesData = getItemFromSessionStorage()
    if(notesData){
        notesData.forEach(notes => {
            addNote(notes.title, notes.date, notes.importance);
        });
    }
}

document.addEventListener('DOMContentLoaded', addNotesOnPageLoad)

const storeNotes = () => {
    // check in the session storage if notes array is present
    let notes = getItemFromSessionStorage();
    let notesObj = {
        title: inputTitle.value,
        date: inputDate.value,
        importance: inputUrgency.value
    }
    if(notes){
        notes.push(notesObj);
        sessionStorage.setItem('notes', JSON.stringify(notes));
    } else{
        let newNotes = [];
        newNotes.push(notesObj);
        sessionStorage.setItem('notes', JSON.stringify(newNotes));
    }
}

const createDeleteButtonWithListener = () => {
    // create a button
    const deleteNoteButton = document.createElement('button'); //<button>delete</button>
    // add text 
    deleteNoteButton.innerText = 'delete';
    // add listener
    deleteNoteButton.addEventListener('click', () => {
        console.log(event.target.parentElement);
        const elementToBeRemoved = event.target.parentElement;
        elementToBeRemoved.remove();
        // notesWrapper.remove();
    })
    return deleteNoteButton
}

const createParagraphElementAndAddValue = (value) => {
     const newNoteTitleTag =  document.createElement('p'); // <p></p>
     newNoteTitleTag.innerText = value;
     return newNoteTitleTag;
}

const addNote = (title, date, urgency) => {
        // creating a wrapper
        const notesWrapper = document.createElement('div');
        notesWrapper.className = 'wrapper';
        // console.log(notesWrapper);
        // create title element
       
        // add value in title element
        let titleTag = createParagraphElementAndAddValue(title);
        let dateTag = createParagraphElementAndAddValue(date);
        let importanceTag  = createParagraphElementAndAddValue(urgency);
        // get delete button
        const deleteButton = createDeleteButtonWithListener();
       
        // append notes in the wrapper div
        notesWrapper.appendChild(titleTag);
        // notesWrapper.appendChild(dateTag);
        // notesWrapper.appendChild(importanceTag);
        // append delete button in the wrapper div
        notesWrapper.appendChild(deleteButton);
        // add wrapper in section
        yourNotesSection.appendChild(notesWrapper);
}

addNoteButton.addEventListener('click', () => {
    addNote(inputTitle.value, inputDate.value, inputUrgency.value);
    storeNotes();
    console.log('inputTitle', inputTitle.value);
    console.log('inputDate', inputDate.value);
    console.log('inputUrgency', inputUrgency.value);
})

