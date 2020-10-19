import React from 'react';
import logo from './logo.svg';
import './index.css';
import Swal from 'sweetalert2'


class App extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            isConfirmed: false,
            OnePlayer: false,
            TwoPlayer: false,
            FourFun: true,
            activePlayer: 0,
            score: 0,
            score2: [0, 0],
            trick: "Let’s do some trick!",
            allTricks:[
                "360 Flip | Treflip",
                "Hardflip",
                " FS Bluntslide",
                "BS Bluntslide",
                "Nollieflip Noseslide",
                "Pivot To Fakie",
                "Blunt To Fakie",
                "Ollie",
                "FS 180 Ollie",
                "BS 180 Ollie",
                "Pop Shove It",
                "FS Pop Shove It",
                "No Comply 180",
                "BS Boardslide",
                "BS Noseslide",
                "FS Tailslide",
                "50-50 Grind",
                "5-0 Grind",
                "Nosegrind",
                "BS Crooked Grind",
                "Drop In",
                "Rock To Fakie",
                "Rock N Roll",
                "Axle Stall & BS 50-50",
                "Fakie Disaster",
                "Kickflip",
                "Nollie Kickflip",
                "FS 180 Kickflip",
                "BS 180 Kickflip",
                "Switch Kickflip",
                " Heelflip",
                "Nollie Heelflip",
                "BS 180 Heelflip",
                "Switch Heelflip",
                "Varial Heelflip",
                "360 Pop Shove It",
                "BS Bigspin",
                "FS Boardslide",
                "FS Noseslide",
                "BS Tailslide",
                "FS Lipslide",
                "BS Lipslide",
                "FS Crooked",
                "FS Smithgrind",
                "BS Smithgrind",
                "FS 50-50",
                "FS Ollie",
                "BS Ollie",
                "FS Disaster",
                "BS Disaster",
            ],
            easyTricks: [
                "Ollie",
                "FS 180 Ollie",
                "BS 180 Ollie",
                "Pop Shove It",
                "FS Pop Shove It",
                "No Comply 180",
                "BS Boardslide",
                "BS Noseslide",
                "FS Tailslide",
                "50-50 Grind",
                "5-0 Grind",
                "Nosegrind",
                "BS Crooked Grind",
                "Drop In",
                "Rock To Fakie",
                "Rock N Roll",
                "Axle Stall & BS 50-50",
                "Fakie Disaster"
            ],
            mediumTricks: [
                "Kickflip",
                "Nollie Kickflip",
                "FS 180 Kickflip",
                "BS 180 Kickflip",
                "Switch Kickflip",
               " Heelflip",
                "Nollie Heelflip",
                "BS 180 Heelflip",
                "Switch Heelflip",
                "Varial Heelflip",
                "360 Pop Shove It",
                "BS Bigspin",
                "FS Boardslide",
                "FS Noseslide",
                "BS Tailslide",
                "FS Lipslide",
                "BS Lipslide",
                "FS Crooked",
                "FS Smithgrind",
                "BS Smithgrind",
                "FS 50-50",
                "FS Ollie",
                "BS Ollie",
                "FS Disaster",
                "BS Disaster",
            ],
            hardTricks: [
                "360 Flip | Treflip",
                "Hardflip",
               " FS Bluntslide",
                "BS Bluntslide",
                "Nollieflip Noseslide",
                "Pivot To Fakie",
                "Blunt To Fakie"
            ]
        }
        this.handleClickChooseLvl_4Fun_Player1_Player2 = this.handleClickChooseLvl_4Fun_Player1_Player2.bind(this)
        this.handleClickThumbUp = this.handleClickThumbUp.bind(this)
        this.handleClickThumbDown = this.handleClickThumbDown.bind(this)
        this.handleClickReset = this.handleClickReset.bind(this)
        this.nextPlayer = this.nextPlayer.bind(this)
        // this.GameOnePlayer = this.GameOnePlayer.bind(this)
    }
    saveDat =()=>{
        localStorage.setItem('myData', JSON.stringify(this.state.isConfirmed,
            this.state.OnePlayer,
            this.state.TwoPlayer,
            this.state.FourFun,
            this.state.activePlayer,
            this.state.score,
            this.state.score2))
    }
    handleClickChooseLvl_4Fun_Player1_Player2() {
        this.saveDat()
        const easyInput = document.querySelector("#easy")
        const mediumInput = document.querySelector("#medium")
        const hardInput = document.querySelector("#hard")
        const allInput = document.querySelector("#all")
        const Swal = require('sweetalert2')
        const randomTrick=()=>
        {
            this.setState({
                trick: this.state.easyTricks[Math.floor(Math.random() * this.state.easyTricks.length)],
            })
        }
          if (easyInput.checked === true)
            {
                randomTrick();
                if (!this.state.isConfirmed) {
                    this.setState({
                        isConfirmed: !this.state.isConfirmed
                    })
                }
            }
            else if (mediumInput.checked === true){
                randomTrick();
                if (!this.state.isConfirmed) {
                    this.setState({
                        isConfirmed: !this.state.isConfirmed
                    })
                }

            }
            else if (hardInput.checked === true){
                randomTrick();
                if (!this.state.isConfirmed) {
                    this.setState({
                        isConfirmed: !this.state.isConfirmed
                    })
                }
            }
            else if (allInput.checked === true){
                randomTrick();
                if (!this.state.isConfirmed) {
                    this.setState({
                        isConfirmed: !this.state.isConfirmed
                    })
                }
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Let\'s choose a range of difficulties!',
                })
                }

    }


    nextPlayer() {
        this.state.activePlayer === 0 ? this.state.activePlayer = 1 : this.state.activePlayer = 0;
    }

    handleClickThumbUp(type) {
        if(type ==="TwoPlayer")
        {
            let a = this.state.score2.slice();
            let player = this.state.activePlayer;
            a[player] = a[player] +1;
            if(this.state.isConfirmed) {
                this.setState({
                    score2: a,
                    isConfirmed: !this.state.isConfirmed
                })
                this.nextPlayer()
            }
        }
        else if(type ==="OnePlayer"){
            if(this.state.isConfirmed) {
                this.setState( {
                    score: this.state.score + 1,
                    isConfirmed: !this.state.isConfirmed
                })
            }
        }

    }
    handleClickThumbDown(type){
        if(type ==="TwoPlayer")
        {
            let a = this.state.score2.slice();
            let player = this.state.activePlayer;
            a[player] = a[player] - 0.25;
            if(this.state.isConfirmed) {
                this.setState({
                    score2: a,
                    isConfirmed: !this.state.isConfirmed
                })
                this.nextPlayer()
            }
        }
        else if(type ==="OnePlayer"){
            if(this.state.isConfirmed) {
                this.setState( {
                    score: this.state.score - 0.25,
                    isConfirmed: !this.state.isConfirmed
                })
            }
        }
    }
    handleClickReset(){

        this.setState({
            score: 0,
            score2: [0,0],
            isConfirmed: false,
            trick: "Let’s do some trick!"
        })

    }

    buttonClickHandler (button) {

        if(button === "4Fun")
        {
            this.setState({
                OnePlayer: false,
                FourFun : true,
                TwoPlayer: false,
                activePlayer: 0,
                score: 0,
                score2: [0, 0],
                displayComponent: "OnePlayer",
                trick: "Let’s do some trick!",
                }
            )
        }

        else if(button === "OnePlayer")
        {
            this.setState({
                    OnePlayer: true,
                    FourFun : false,
                    TwoPlayer: false,
                    activePlayer: 0,
                    score: 0,
                    score2: [0, 0],
                    displayComponent: "OnePlayer",
                    trick: "Let’s do some trick!",
            } )
        }
        else if(button === "TwoPlayer")
        {
            this.setState({
                    OnePlayer: false,
                    FourFun : false,
                    TwoPlayer: true,
                    activePlayer: 0,
                    score: 0,
                    score2: [0, 0],
                    displayComponent: "OnePlayer",
                    trick: "Let’s do some trick!",
            })
        }



    }


    render() {

        return (
            <div className="App">

                <div className="btnPlayerSelect">
                    <button className={this.state.FourFun === false ? "btnPlayer 4fun" : 'btnPlayer 4fun orange'} onClick={this.buttonClickHandler.bind(this, '4Fun')}><p className="textRotation">4Fun</p> </button>
                    <button className={this.state.OnePlayer === false ? "btnPlayer 1" : 'btnPlayer 1 orange'} onClick={this.buttonClickHandler.bind(this, 'OnePlayer')}><p className="textRotation">1Player</p> </button>
                    <button className={this.state.TwoPlayer === false ? "btnPlayer 2" : 'btnPlayer 2 orange'} onClick={this.buttonClickHandler.bind(this, 'TwoPlayer')}><p  className="textRotation">2Players</p> </button>

                </div>
                { this.state.FourFun && <FourFun  type="OnePlayer" handleClickChooseLvl={this.handleClickChooseLvl_4Fun_Player1_Player2}
                                                  trick = {this.state.trick}/>
                }

                { this.state.OnePlayer && <OnePlayer trick = {this.state.trick} type="OnePlayer"
                    score = {this.state.score}
                    handleClickChooseLvl={this.handleClickChooseLvl_4Fun_Player1_Player2}
                    handleClickThumbUp ={this.handleClickThumbUp}
                    handleClickThumbDown ={this.handleClickThumbDown}
                    handleClickReset ={this.handleClickReset}/>
                }

                { this.state.TwoPlayer && <TwoPlayer trick = {this.state.trick} type="TwoPlayer"
                                                     activePlayer = {this.state.activePlayer}
                                                     score2 = {this.state.score2}
                                                     handleClickChooseLvl={this.handleClickChooseLvl_4Fun_Player1_Player2}
                                                     handleClickThumbUp ={this.handleClickThumbUp}
                                                     handleClickThumbDown ={this.handleClickThumbDown}
                                                     handleClickReset ={this.handleClickReset}/>

                }
            </div>
        )
    }
}
const FourFun = (props)=> {

    return(
        <div className="container 4fun">
            <h1 className="title">{props.trick}</h1>
            <button className="btnStart" onClick={props.handleClickChooseLvl}>Kick It!</button>
            <div className="checkBox">
                <input id="easy" type="radio" name="tricks" value="easy"/>
                <label className="dark easy" htmlFor="easy"> </label>

                <input id="medium" type="radio" name="tricks" value="medium"/>
                <label className="dark medium" htmlFor="medium"> </label>

                <input id="hard" type="radio" name="tricks" value="hard"/>
                <label className="dark hard" htmlFor="hard"> </label>

                <input id="all" type="radio" name="tricks" value="all"/>
                <label className="dark all" htmlFor="all"> </label>
            </div>
        </div>
    )
}
const OnePlayer = (props)=> {

    return(
        <div className="container onePlayer">
            <h1 className="title">{props.trick}</h1>
            <div className="btnStartReset">
                <button className="btnStart" onClick={props.handleClickChooseLvl}>Kick It!</button>
                <button className="btnReset" onClick={props.handleClickReset}>Reset!</button>
            </div>
            <div className="trickMenu">
                <button className="btnUp" onClick={()=>props.handleClickThumbUp(props.type)}> </button>
                <div className="score">
                    <p>Player 1</p>
                    <p>Score: {props.score}</p>
                </div>
                <button className="btnDown" onClick={()=>props.handleClickThumbDown(props.type)}> </button>

            </div>
            <div className="checkBox">
                <input id="easy" type="radio" name="tricks" value="easy"/>
                <label className="dark easy" htmlFor="easy"> </label>

                <input id="medium" type="radio" name="tricks" value="medium"/>
                <label className="dark medium" htmlFor="medium"> </label>

                <input id="hard" type="radio" name="tricks" value="hard"/>
                <label className="dark hard" htmlFor="hard"> </label>

                <input id="all" type="radio" name="tricks" value="all" />
                <label className="dark all" htmlFor="all"> </label>
            </div>
        </div>
    )
}
const TwoPlayer = (props)=> {

    return(
        <div className="container TwoPlayer">
            <h1 className="title">{props.trick}</h1>
            <div className="btnStartReset">
                <button className="btnStart" onClick={props.handleClickChooseLvl}>Kick It!</button>
                <button className="btnReset" onClick={props.handleClickReset}>Reset!</button>
            </div>
            <div className="trickMenu">
                <button className="btnUp" onClick={()=>props.handleClickThumbUp(props.type)}> </button>

                <div className="score" style={
                    {
                        color: props.activePlayer ===0 ? '#FCA311' : 'black'
                    }
                }>
                    <p>Player 1</p>
                    <p className={props.activePlayer ===0 ? '' : 'pulse'}>Score: {props.score2[0]}</p>
                </div>
                <div className="score" style={{
                    color: props.activePlayer ===1 ? '#FCA311' : 'black'
                }}>
                    <p>Player 2</p>
                    <p className={props.activePlayer ===1 ? '' : 'pulse'}>Score: {props.score2[1]}</p>
                </div>

                <button className="btnDown" onClick={()=>props.handleClickThumbDown(props.type)}> </button>

            </div>
            <div className="checkBox">
                <input id="easy" type="radio" name="tricks" value="easy"/>
                <label className="dark easy" htmlFor="easy"> </label>

                <input id="medium" type="radio" name="tricks" value="medium"/>
                <label className="dark medium" htmlFor="medium"> </label>

                <input id="hard" type="radio" name="tricks" value="hard"/>
                <label className="dark hard" htmlFor="hard"> </label>

                <input id="all" type="radio" name="tricks" value="all"/>
                <label className="dark all" htmlFor="all"> </label>
            </div>
        </div>
    )
}
export default App;
