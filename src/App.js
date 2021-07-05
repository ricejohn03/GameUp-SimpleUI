import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Data } from './data'
import { MdMenu, MdSearch } from "react-icons/md";
import DoughnutScore from './components/DoughnutScore'

  

function App() {
    const [gamedata, setGameData] = useState({})
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const req = await axios.get('https://api.rawg.io/api/games?key={YOURAPI-KEY}&dates=2021-05-01,2021-06-30&platforms=18,1,7')
            console.log(req)
            setGameData(req.data.results)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getData()
        // uncomment setGameData to just grab local Data from the Data.file it has the same structure of the API CALL
        //setGameData(Data.results)
    }, [])

    useEffect(() => {
        checkLoading()
    }, [gamedata])


    const checkLoading = () => {
        if (gamedata.length > 0) {
            setLoading(false)
        }
    }
    const printData = () => {
        console.log(gamedata)
    }

    const moblieNav = "moblie-nav"

    return (
        <div className='top-color'>
            <div className="main-wrapper">
                <div className='nav-container'>
                    <div className="navbar">
                        <h1 className="nav-logo"> GB</h1>
                        <div className='input-container'>
                            <MdSearch className="search-icon" />
                            <input className="nav-search" type='text' placeholder='Search' />
                        </div>
                        
                        <MdMenu size={35} className="moblie-nav" />
                    </div>

                </div>
                <div className="hero-card-container">
                    <div className="hero-card" >
                        <div className='left-content'>
                            <div class="profile">
                                <img src="http://www.createla.us/johnrice/images/mr.jpg" />
                                <div className="profile-text">
                                    <h4 className="welcome-text">Welcome Back,</h4>
                                    <h1 className='name-title'> John Rice </h1>
                                    <h3 className="welcome-text"> PS5, Switch, PC</h3>
                                </div>

                            </div>
                        </div>
                        <div className='right-content'>
                            <button className="btn-simple">View Profile</button>
                        </div>

                    </div>
                    <div className="time-sections ">
                        <div className="daily time-btn">
                            <h5 welcome-text>Daily Releases</h5>
                        </div>
                        <div className="weekly time-btn">
                            <h5 welcome-text>Weekly Releases</h5>
                        </div>
                        <div className="monthly time-btn active-btn">
                            <h5> Monthly Releases</h5>
                        </div>
                    </div>

                </div>

                <div className="game-cards" >
                    {!loading ?
                        (gamedata.map((game) => <div key={game.id } style={{ backgroundImage: `url(${game.background_image})` }} className="game-card">
                            
                            <div className="overlay"> <div className="game-title">{game.name}</div>
                                <div className='score'> 
                                    <DoughnutScore score={game.metacritic} />
                                </div>
                            </div>
                        </div>))
                    : <h1>The compenent is loading</h1>
                    } 
                </div>

            </div>
            
        </div>

    );
}

export default App;
