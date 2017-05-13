import React from 'react';


export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            opacity: 1
        }
    }
    handleMouseMove = () =>{
        this.setState({
            opacity:'0.5'
        })
    };
    render(){
        const styles={
            primary:{
                opacity:this.state.opacity,
                backgroundColor:'#2e6da4',
                padding:'6px 12px',
                color:'#fff',
                border:'1px solid #2e6da4',
                borderRadius:'4px',
                fontSize:'14px',
            },
            success:{
                opacity:this.state.opacity,
                backgroundColor:'#4cae4c',
                padding:'6px 12px',
                color:'#fff',
                border:'1px solid #4cae4c',
                borderRadius:'4px',
                fontSize:'14px'
            },
            danger:{
                opacity:this.state.opacity,
                backgroundColor:'#d43f3a',
                padding:'6px 12px',
                color:'#fff',
                border:'1px solid #d43f3a',
                borderRadius:'4px',
                fontSize:'14px'
            },
        };
        return (
            <button type="button" style={styles[this.props.pattern]} className={this.props.pattern} onMouseOver={this.handleMouseMove}>{this.props.name}</button>
        )
    }
}