import React, { useState, useContext } from "react";
import alertContext from "../../contexts/alert/alertContext";
import GithubContext from "../../contexts/github/githubContext";

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(alertContext);
    const [text, setText] = useState('');

    const onInputChange = event => {
        setText(event.target.value);
    }

    const submit = () => {
        if(text === ''){
            return alertContext.setAlert('Please provide input', 'light');
        }
        return githubContext.searchUsers(text);
    }

    const clear = () => {
        return githubContext.clearUsers();
    }

    return (
        <div>
                <input type="text" name="text" placeholder="Search here..." 
                onChange={onInputChange}
                />
                <button onClick={submit} className="btn btn-dark btn-block">Search</button>
                
                {githubContext.users.length > 0 && <button onClick={clear} className="btn btn-light btn-block">Clear</button>}

        </div>
    );
}
export default Search;