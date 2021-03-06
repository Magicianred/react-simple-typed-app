import React, { FunctionComponent } from 'react';

/**
 * Component for showing the footer of the site
 * @component
 * @example
 * return (
 *  <Footer />
 * )
 */
const Footer: FunctionComponent = () => {
    return (
        <footer className="partial footer">
            <p>
                This is the footer 
                - <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </p>
        </footer>
    )
}

export default Footer;