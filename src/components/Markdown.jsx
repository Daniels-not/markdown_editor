import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import DarkModeToggle from "react-dark-mode-toggle";


function Markdown() {

    const [markdown, setMarkdown] = useState('');

    return (
        <div className="container">
            <textarea className="textarea" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
            <div className="output">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>

        </div>
    )
}

export default Markdown;
