import { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            timeInterval: 0,
            intervalId: null,
        }
        
        this.identitiy = {
            fullName: 'Irsyad Alaudin Hariono',
            profession: 'Software Engineer',
            bio: 'Irsyad Alaudin Hariono is a talented software engineer with a passion for coding. He has extensive experience in developing software applications and solving complex problems. Irsyad is known for his attention to detail and his ability to work collaboratively with other team members. Throughout his career, Irsyad has worked on a variety of projects, ranging from mobile applications to complex software systems. He has a deep understanding of programming languages such as JavaScript, Python, and Java, and is always looking to expand his skill set. Irsyad is a dedicated and hard-working individual who is committed to producing high-quality work. He is constantly seeking new challenges and opportunities to grow as a software engineer. With his exceptional technical skills and his passion for technology, Irsyad is a valuable asset to any team.',
            img: 'https://picsum.photos/id/5/200/300',
        }
    }    

    handleClick = ()=>{
        if(!this.state.visible) {
            this.setState({
                intervalId : setInterval(() => {
                    this.setState(prevState => ({
                        timeInterval: prevState.timeInterval + 1
                    }))
                }, 1000)
            });
        } else {
            clearInterval(this.state.intervalId);
            this.setState({
                timeInterval: 0
            })
            this.setState({
                intervalId: null
            });
        }

        this.setState((prev) => {
            return {visible: !prev.visible}
        })
    }

    // componentDidMount() {
    //     this.interval = setInterval(() => {
    //         this.setState(prevState => ({
    //             timeInterval: prevState.timeInterval + 1
    //         }))
    //     }, 1000)
    // }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }


render() {
    return (
        <div>
            {this.state.visible && (
                <div className='d-flex justify-content-center text-center bg-info-subtle mt-5 mx-5 rounded-5'>
                    <div>
                        <h1>{this.identitiy.fullName}</h1>
                        <h3>{this.identitiy.profession}</h3>
                        <p className='mx-3'>{this.identitiy.bio}</p>
                        <div className='d-flex justify-content-center'>
                            <img src={this.identitiy.img} alt=''/>
                        </div>

                        <p>Time Interval: {this.state.timeInterval} seconds</p>
                    </div>
                </div>
            )}

                <div className='d-flex justify-content-center mt-3'>
                    <button onClick={this.handleClick} className='rounded-3'>Show</button>
                </div>
        </div>
    )
}}

export default App;