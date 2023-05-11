import React, { Component } from 'react'

class Box extends Component{
    render() {
        console.log("render");
        return (
            <div style={{width:"100px",height:'100px',overflow:"hidden",float:"left",border:this.props.current===this.props.index?"2px solid red":"1px solid gray",margin:"20px 5px"}}>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState) { 
        if (this.props.current === this.props.index ||nextProps.current === nextProps.index) {
            
            return true
        }
        
        return false
     }
}
export default class app extends Component {
    state = {
        list: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        current: 0
    }
    render() {
        return (
            <div>
                <input type="number" onChange={(evt) => {
                    console.log(evt.target.value);
                    this.setState({
                        current: Number(evt.target.value)
                    })
                }} value={this.state.current} />
                <div style={{ overflow: "hidden", }}>
                    {
                        this.state.list.map((item, index) =>
                            <Box key={item} current={this.state.current} index={index} />
                        )
                    }
                </div>
            </div>
        )
    }
}
