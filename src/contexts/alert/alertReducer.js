import React, { useState, useContext } from "react";
import AlertContext from "../../contexts/alert/alertContext";
import GithubContext from "../../contexts/github/githubContext";

const Search = (props) => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');

    const onInputChange = event => {
        setText(event.target.value);
    }

    const submit = () => {
        if(text === ''){
            alertContext.setAlert('Please provide input', 'light');
            return;
        }
        githubContext.searchUsers(text);
        setText('');
        return;
    }

    const clear = () => {
        return githubContext.clearUsers();
    }

    return (
        <div>
                <input type="text" id="searchInput" name="text" placeholder="Search here..." 
                onChange={onInputChange}
                />
                <button onClick={submit} className="btn btn-dark btn-block">Search</button>
                
                {githubContext.users.length > 0 && <button onClick={clear} className="btn btn-light btn-block">Clear</button>}

        </div>
    );
}
export default Search;