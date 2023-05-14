import { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            number: 0
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

    handlePlus = () => {
        this.setState((prev) => {
            return {number: prev.number + 1}
        });
    }

    handleMinus = () => {
        this.setState((prev) => {
            if (prev.number > 0) {
                return {number: prev.number - 1}
            } else {
                return {number: prev.number}
            }
        });
    }

render() {
    return (
        <div>
            {this.state.visible && (
                <>
                    <h1>{this.identitiy.fullName}</h1>
                    <h3>{this.identitiy.profession}</h3>
                    <p>{this.identitiy.profession}</p>
                    <img src={this.identitiy.img} alt=''/>

                    <button onClick={this.handleMinus}>-</button>
                    <span>{this.state.number}</span>
                    <button onClick={this.handlePlus}>+</button>
                </>
            )}
            <button onClick={this.handleClick}>Show</button>
        </div>
    )
}}

export default App;