import React from 'react'
import {MemoryRouter,Route,Link} from 'react-router-dom'

const PageOne =() =>{
    return (
        <div>
            Page 1
            <br />
            <Link to='/pagetwo'>Naviagete to Page 2</Link>

        </div>
    )
}

const PageTwo =() =>{
    return (<div>
        Page 2
        <br />
        <button>Click Me !</button>
        <br />
        <Link to='/'>Naviagete to Page 1</Link>
     </div>)
}

const App =()=>{
    return (
        <div>
            <MemoryRouter>
                <div>
                    <Route path ="/" exact component ={PageOne}/>
                    <Route path ="/pagetwo"  component ={PageTwo}/>
                </div>

            </MemoryRouter>

        </div>
    )
}

export default App