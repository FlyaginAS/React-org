import  React from 'react';
import ReactDOM from 'react-dom';
////////////////////////////////////////////////////////////////////////////////////////////////////

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={seconds: 0};
    }
    tick(){
        this.setState((state)=>({
            seconds: state.seconds+1
        }));
    }
    componentDidMount(){
        this.timerId =  setInterval(()=> this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    render(){
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
ReactDOM.render(
    <Timer/>,
    document.querySelector('#root')
);