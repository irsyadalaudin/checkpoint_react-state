import { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
        
        this.identitiy = {
            fullName: 'Irsyad Alaudin Hariono',
            profession: 'Software Engineer',
            bio: 'abcd',
            img: 'https://picsum.photos/id/5/200/300',
            
        }
    }

    handleClick = ()=>{
        this.setState((prev) =>{
            return {visible: !prev.visible}
        })
    }

render() {
    return (
        <div>
            {this.state.visible && (
                <div>
                <h1>{this.identitiy.fullName}</h1>
                <h3>{this.identitiy.profession}</h3>
                <p>{this.identitiy.profession}</p>
                <img src={this.identitiy.img} alt=''/>
                </div>
            )}
            <button onClick={this.handleClick}>Show</button>
        </div>
    )
}}

export default App;