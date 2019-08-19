import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Design from './Design'
import Projects from './Projects'
import Resume from './Resume'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Design}/>
            {/* <Route path='/Design' component={Design}/>
            <Route path='/Projects' component={Projects}/>
            <Route path='/Resume' component={Resume}/> */}
        </Switch>
    </main>
)

export default Main