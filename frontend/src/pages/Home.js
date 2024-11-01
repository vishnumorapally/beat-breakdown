import React from 'react'
import "./main.css"
import home from "../home.jpg"
import { Link } from 'react-router-dom'
import { CgGames } from "react-icons/cg";
import { GiBrain } from "react-icons/gi";
import video from "../playsong-unscreen.gif"

const Home = () => {
    return (
        <div className='all'>
            <div className='topsection'>
                <div className='content'>
                    <h1>Beat BreakDown</h1>
                    <p>Try to find the correct song from the options This is a game where you need to guess the song when it is played and fast guess, more score.</p>
                    <Link to="/form"><button className='gamebtn'>Play Game</button></Link>
                </div>
                <div className='img'>
                    <img src={home} alt='img' />
                </div>
            </div>
            <div className='deatiels'>
                <div className='box'>
                    <div className='tomakecenter'>
                        <CgGames className='logobot' />
                    </div>
                    <h3>Three Gaming Category</h3>
                    <p>We Offer you with Three Gaming Modes, where you can choose the Year,Language,Level.</p>
                </div>

                <div className='box'>
                    <div className='tomakecenter'>
                        <GiBrain className='logobot' />
                    </div>
                    <h3>Impoves Reflexes</h3>
                    <p>Improve your reflexes by playing our game! This engaging experience is designed to challenge and enhance your reaction time while providing hours of fun.</p>
                </div>
            </div>
            <div className='manysongs'>
                <div className='img'>   
                    <img src={video} alt='img' />
                </div>
                <div className='content'>
                    <h1>Many Songs</h1>
                    <p>Has many songs from 3 Different Languages. Play with the large collection of songs</p>
                </div>

            </div>
        </div>
    )
}

export default Home
