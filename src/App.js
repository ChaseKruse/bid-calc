import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    const [price, setPrice] = useState(0);
    const [players, setPlayers] = useState(8);
    const [isEqual, setIsEqual] = useState(false);

    let calcBid = price => {
        if(isEqual)
            return Math.floor(0.95*(players-1)/players*price).toLocaleString();
        else
            return Math.ceil((0.95*(players-1)/players*price +
1)/1.05).toLocaleString();
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <input
                        type="text"
                        placeholder="10,000..."
                        style={{
                            padding: 8,
                            border: "1px solid #ccc",
                            backgroundColor:"#e2e2e2",
                            width: 290,
                            outline: "none"
                        }}
                        onKeyUp={e => setPrice(e.target.value || 0)}
                        autoFocus
                    />
                </p>
                <table style={{ width:300 }}>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="button"
                                    value="4"
                                    style={{
                                        padding: 8,
                                        fontSize: 18,
                                        color: "#282c34",
                                        border: "none",
                                        backgroundColor: players === 4
? "#618efb" : "#61DBFB",
                                        width: 150,
                                        cursor:"pointer"
                                    }}
                                    onClick={e => setPlayers(4) }
                                />
                            </td>
                            <td>
                                <input
                                    type="button"
                                    value="8"
                                    style={{
                                        padding: 8,
                                        fontSize: 18,
                                        color: "#282c34",
                                        border: "none",
                                        backgroundColor: players === 8
? "#618efb" : "#61DBFB",
                                        width: 150,
                                        cursor:"pointer"
                                    }}
                                    onClick={e => setPlayers(8)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="button"
                                    value="Equal"
                                    style={{
                                        padding: 8,
                                        fontSize: 18,
                                        color: "#282c34",
                                        border: "none",
                                        backgroundColor: isEqual ?
"#618efb" : "#61DBFB",
                                        width: 150,
                                        cursor:"pointer"
                                    }}
                                    onClick={e => setIsEqual(true) }
                                />
                            </td>
                            <td>
                                <input
                                    type="button"
                                    value="Rat"
                                    style={{
                                        padding: 8,
                                        fontSize: 18,
                                        color: "#282c34",
                                        border: "none",
                                        backgroundColor: !isEqual ?
"#618efb" : "#61DBFB",
                                        width: 150,
                                        cursor:"pointer"
                                    }}
                                    onClick={e => setIsEqual(false) }
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className="App-link" >
                    {price ? calcBid(price) : 0}
                </p>
            </header>
        </div>
    );
}

export default App;