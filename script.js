const addNoteButton = document.getElementById('add-notes');
const inputTitle = document.getElementById('title');
const yourNotesSection = document.getElementById('your-notes');


// addNoteButton.onclick;

const storeNotes = () => {
    // check in the session storage if notes array is present
    let notes = sessionStorage.getItem('notes');
    console.log('notes', notes);

    if(notes){
        const parsedNotes = JSON.parse(notes);
        parsedNotes.push(inputTitle.value);
        sessionStorage.setItem('notes', JSON.stringify(parsedNotes));
    } else{
        let newNotes = [];
        newNotes.push(inputTitle.value)
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

const addNote = () => {
    // step 1. get the value entered by user ---> inputTitle.value
    
    // step 2. create a html tag using which you will display the notes
        const notesWrapper = document.createElement('div');
        const newNoteTitleTag =  document.createElement('p'); // <p></p>
        newNoteTitleTag.innerText = inputTitle.value;

        // get delete button
        const deleteButton = createDeleteButtonWithListener();
       
    // step 3. add the value that user entered into the newly created tag
    
    // append notes in the wrapper div
        notesWrapper.appendChild(newNoteTitleTag);
    // append delete button in the wrapper div
        notesWrapper.appendChild(deleteButton);
    
        yourNotesSection.appendChild(notesWrapper);
    
        storeNotes();
        // console.log(yourNotes);
}

addNoteButton.addEventListener('click', addNote)

