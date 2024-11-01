import React from 'react'
import { Link } from 'react-router-dom'
import "./game.css"

const Game = () => {
    const songlink = "https://www.dropbox.com/scl/fi/k17qtyuwd67clvdtjk5tl/Raghunandana.mp3?rlkey=mmr0lcnguvkrerqgcjngxplre&e=1&st=yn0u5qe7&raw=1"
    const song = new Audio(songlink)
    const playsong = () => {
        song.play()
    }
    return (

        <div>
            <div className='scoreboard'>
                <div className='table'>
                    <div className='row'>
                        <span className='h3'>Name</span>
                        <span className='p'>Vishnu</span>
                    </div>

                    <div className='row'>
                        <span className='h3'>Total Score</span>
                        <span className='p'>30</span>
                    </div>

                    <div className='row'>
                        <span className='h3'>Timer</span>
                        <span className='p'>30</span>
                    </div>

                    <div className='row'>
                        <span className='h3 dddsf'>No. of Questions</span>
                        <span className='p'>2</span>
                    </div>
                </div>
            </div>
            <div className='gamesection'>
                <div className='game'>
                    <button onClick={playsong} className='playsongbtn'>Play song</button>
                    <div className='options'>
                        <div className='option-row'>
                            <div className='llkafn'>
                                <span>A)</span>
                                <Link to="" className='option'>ye chota modayindo telusa("saripoda sanivaram")</Link>
                            </div>
                            <div className='llkafn'>
                                <span>B)</span>
                                <Link to="" className='option'>ye chota modayindo telusa</Link>
                            </div>
                        </div>
                        <div className='option-row'>
                            <div className='llkafn'>
                                <span>C)</span>
                                <Link to="" className='option'>Shiva Tandav</Link>
                            </div>
                            <div className='llkafn'>
                                <span>D)</span>
                                <Link to="" className='option'>Next Nuvve</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Game
