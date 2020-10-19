import React from 'react';
import logo from './logo.svg';
import './index.css';
import Swal from 'sweetalert2'


class App extends React.Component{

    handleClickTut=()=> {
        return (
            Swal.fire(
                'KICK IT!',
                '<h3>3 type of game:</h3> <br/>' + '4Fun - kick all tricks you want<br/>' + 'One Player - Check yourself, every good trick is +1, mistake -0.25<br/>'+' Two Player - Play with friends, check who is better',
                'question'
            )
        )
    }

    render() {
        return(

            <div className="footer">
                Created by <a href={"https://github.com/xpytix"}> xpytix </a>
                <button className="tutorial" onClick={this.handleClickTut}> </button>
            </div>

        )
    }
}
export default App;