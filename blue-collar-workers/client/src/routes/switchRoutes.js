import React from 'react'
import {Router , Route} from 'react-router-dom'
import ReadyToWork from '../components/ReadyToWork'
import history from './history'

function SwitchRoutes() {
    return (
        <div>
            <Router history={history}>
    <Route exact path='/' component ={props => <ReadyToWork {...props}/>}/>
            </Router>
        </div>
    )
}

export default SwitchRoutes
