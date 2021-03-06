import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate.js';
import StreamDelete from './streams/StreamDelete.js';
import StreamEdit from './streams/StreamEdit.js';
import StreamList from './streams/StreamList.js';
import StreamShow from './streams/StreamShow.js';
import Header from './Header.js'
import history from '../history.js'

const App = () => {
    return(
        <div className='ui container'>
            <Router history={history}>
                <div>
                    <Header />
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' component={StreamCreate} />
                    <Route path='/streams/edit' component={StreamEdit} />
                    <Route path='/streams/delete' component={StreamDelete} />
                    <Route path='/streams/show' component={StreamShow} />
                </div>
            </Router>
        </div>
    )
}

export default App
