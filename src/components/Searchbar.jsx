import {useState} from 'react';

function Searchbar(props) {
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // Not sure where handleFormSubmit is yet.
        props.handleFormSubmit(text);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='video-search'>Video Search</label>
                <input 
                    type='text'
                    value={text}
                    placeholder='Youtube Video'
                    name='video-search' 
                    onChange={e => setText(e.target.value)}
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Searchbar;