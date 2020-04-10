import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

//alternatively a simpler way of writing imports
//import { Cards, Chart, CountryPicker } from './components'
//import styles from './App.covid.css';
import styles from './App.module.css'
import { fetchData } from './api';

class App extends React.Component {

    async componentDidMount() {
        const data = await fetchData();

        console.log(data);
    }

    render() {
        return (
            <div className={styles.container}>
                <h1> It's working</h1>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}


export default App;