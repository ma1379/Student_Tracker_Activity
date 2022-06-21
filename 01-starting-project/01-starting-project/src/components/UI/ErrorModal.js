import React from 'react';
import './ErrorModal.js';
import Card from './Card.js';
import Button from './Button.js';

const ErrorModal = props => {
    return(
        <div>
            <div className ="backdrop" onClick = {props.onHandleError}/>
            <div className ="modal">
                <Card>
                    <header className = "header">
                        <h2>{props.title}</h2>
                        <div className = "contents">
                            <p>{props.message}</p>
                        </div>
                        <footer className = "actions">
                            <Button clickHandler = {props.onHandleError}>Okay</Button>
                        </footer>
                    </header>
                </Card>
            </div>
        </div>

    );
};

export default ErrorModal;