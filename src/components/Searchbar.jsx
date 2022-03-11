import {useState} from 'react';
// Imports this component's CSS module.
import styles from './SearchBar.module.scss';

// props are what we passed into this component from App.js.
function Searchbar(props) {

    // The text state will hold the text in the search bar.
    const [text, setText] = useState('');

    // This function takes an event (e).
    function handleSubmit(e) {
        // Stops this component from re-rendering and refreshing the page.
        e.preventDefault();
        // Takes the handleFormSubmit passed via props and executes it on the text state's value.
        props.handleFormSubmit(text);
    }

    return (
        <div id={styles.searchbar}>
            {/* When the button is clicked, this form runs the handleSubmit function. */}
            <form onSubmit={handleSubmit}>
                <input 
                    // Defines the input as a single-line text field.
                    type='text'
                    // Only form elements with a name will have their value passed when the form is submitted.
                    name='video-search' 
                    // What will appear in the input if it is empty.
                    placeholder='Youtube Video'
                    // Value is the text state's value.
                    value={text}
                    /*
                    If the user type or deletes a character in the search bar, sets the text's state to be what is in the searchbar now.
                    The event's (e) target is what caused the event to happen (<input>), and value is the input's value.
                    */
                    onChange={e => setText(e.target.value)}
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Searchbar;