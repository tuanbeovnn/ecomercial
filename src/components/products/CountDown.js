import React, { Component } from 'react'

export default class CountDown extends Component {
    state = {
        d:0,
        h:0,
        m:0,
        s:0
    }
    componentDidMount() {
        const tomorrowDate = new Date();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        this.inter = setInterval(() => {
            const currentDate = new Date();
            const date = Math.abs(currentDate - tomorrowDate);
            this.setState({
                d: Math.floor(date/1000/3600/24),
                h :Math.floor(date/1000/3600%24),
                m :Math.floor(date/1000/60%60),
                s :Math.floor(date/1000%60)
            })
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.inter);
    }
    render() {
        const {d,h,m,s}= this.state
        return (

            <div className="countdown">
                <span className="cdown day">
                    <span className="time-count">{d}</span>
                    <p>Days</p></span>
                <span className="cdown hour">
                    <span className="time-count">{h}</span>
                    <p>Hours</p>
                </span>
                <span className="cdown minutes">
                    <span className="time-count">{m}</span>
                    <p>Minute</p>
                </span>
                <span className="cdown second">
                    <span className="time-count">{s}</span>
                    <p>Second</p>
                </span>
            </div>

        )
    }
}
