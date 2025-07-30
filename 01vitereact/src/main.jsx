import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
        <h1>Hello, World!</h1>
        </div>
    )
}


// the syntax of below code is not correct thats why its not running
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: 'click me to  visit google'
// }

// it is an object
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)


const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },  
    'click me to visit google'
)




ReactDOM.createRoot(document.getElementById('root')).render(
  
// MyApp() we can use it like this also
// <MyApp/ >

// to run an object this is the syntax
//   anotherElement


    // reactElement


    <App />
)
