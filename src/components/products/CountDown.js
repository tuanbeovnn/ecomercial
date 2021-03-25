import React, { Component } from 'react'
import { connect } from 'react-redux';
import { clearInterval } from 'stompjs';
import { fetchTimeEndRequest } from '../../redux/actions';

class CountDown extends Component {
    state = {
        d: 0,
        h: 0,
        m: 0,
        s: 0
    }
    componentDidMount() {
    
        this.props.timeEnd((data) => {
            let tomorrow = new Date(data && data.timeEnd*1000);
            // if (data.timeEnd)  {
            //     tomorrow = new Date(data.timeEnd*1000);
            // } else {
            //     tomorrow.setDate(tomorrow.getDate() + 1);
            // }
            this.inter = setInterval(() => {// vong lap vo han
                const currentDate = new Date();
                const date = Math.abs(currentDate - tomorrow);

                // console.log(time);
               
                if (date>=0) {
                    this.setState({
                        d: Math.floor(date / 1000 / 3600 / 24),
                        h: Math.floor(date / 1000 / 3600 % 24),
                        m: Math.floor(date / 1000 / 60 % 60),
                        s: Math.floor(date / 1000 % 60)
                    })
                }else {
                    clearInterval(this.inter);
                }
                
            }, 1000);
        });

    }
    componentWillUnmount() {
        clearInterval(this.inter);
    }
    render() {
        const { d, h, m, s } = this.state


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

const mapStateToProps = (state) => {
    return {
        time: state.Ecomercial.timeEnd
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        timeEnd: (callback) => {
            dispatch(fetchTimeEndRequest(callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountDown);