import React, { Component } from 'react'
import { createRoomRequest, getMessageRequest, sendMessageRequest } from '../../redux/actions';
import SocketManager from '../../utils/SocketManager';
import { connect } from 'react-redux';

class ChatBoxPopup extends Component {

    
    state = {
        //    roomId: "c14a89cd-d807-456e-a261-eeab902f70b3",
        messages: []
    }

    componentDidMount() {
        SocketManager.instance.connectSocket();
        const roomId = localStorage.getItem("roomChat");
        if (roomId) {
            this.setState({
                roomId: roomId,
            })
            SocketManager.instance.onChannel(roomId, (e => {
                console.log(e.data);
                this.state.messages.push(e.data);
                this.setState({
                    messages: [...this.state.messages]
                })
                this.scrollToBottom();
            }));
            this.props.getMessage(roomId, (data)=>{
               
                if (data && data.length) {
                    this.setState({
                        messages : data
                    })
                }
                this.scrollToBottom();
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.state.email;
        const name = this.state.name;
        this.props.createRoom({ email, name }, (data) => {
            if (data && data.success) {
                this.setState({
                    roomId: data.details.roomId,
                })
                SocketManager.instance.onChannel(data.details.roomId, (e => {// listening va save storage
                    console.log(e.data);
                    this.state.messages.push(e.data);
                    this.setState({
                        messages: [...this.state.messages]
                    })
                    this.scrollToBottom();
                }));
                localStorage.setItem("roomChat", data.details.roomId);
            }
        })

    }


    sendMessage = (e) => {
        e.preventDefault();
        const body = { content: this.state.message, roomNumber: this.state.roomId, idUser: 1 };
        this.props.sendMessage(body);
        this.setState({
            message: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    scrollToBottom = ()=>{
        this.setTimeOut = setTimeout(() => {
            document.getElementById('bottomMessage').scrollIntoView();
        }, 200);
        
    }
    componentWillUnmount() {
        clearTimeout(this.setTimeOut);
    }

    render() {
        
        return (
            <div className="chatbox">
                <input type="checkbox" id="click" />
                <label htmlFor="click">
                    <i className="chatbox-open icofont icofont-social-facebook-messenger" />
                    <i className="icofont chatbox-close icofont-close" />
                </label>
                <div className="wrapper">
                    <div className="head-text">
                        Let's chat? - Online</div>
                    {!this.state.roomId ?
                        <div className="chat-box" >
                            <div className="desc-text">
                                Please fill out the form below to start chatting with the next available agent.</div>
                            <form action="#" onSubmit={this.handleSubmit}>
                                <div className="field">
                                    <input type="text"
                                        placeholder="Your Name"
                                        name="name"
                                        onChange={this.handleChange}
                                        required />
                                </div>
                                <div className="field">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        onChange={this.handleChange}
                                        required />
                                </div>
                                <div className="field">
                                    <button type="submit">Start Chat</button>
                                </div>
                            </form>
                        </div>
                        : <div className="chat-box" style={{ height: 467, width: 360, position: 'relative', display: 'flex', flexDirection: 'column' }}>

                            <div className="position-relative" style={{ flex: 1, overflow: 'hidden' }}>
                                <div className="chat-messages p-4" style={{ height: '100%', overflowY: 'auto' }}>
                                    {this.state.messages.map((item, index) => {
                                        const time = new Date(item.createdDate);
                                        var h = time.getHours();
                                        var m = time.getMinutes();
                                        const h3 = (h<10 ? "0" : "") +h;
                                        const m3 = (m<10 ? "0" : "") +m;
                                        
                                        return (
                                            item.idUser ?
                                                <div key={index} className="chat-message-right pb-4" style={{ width: '100%', overflowX: 'hidden', display:'flex', flexDirection:'row-reverse' }}>
                                                    <div>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">{h3}:{m3}</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3" style={{ overflow: 'hidden', wordWrap: 'break-word' }}>
                                                        <div className="font-weight-bold mb-1">You</div>
                                                        {item.content}
                                                    </div>

                                                </div>
                                                :
                                                <div key={index} className="chat-message-left pb-4" style={{ width: '100%', overflowX: 'hidden',display:'flex' }}>
                                                    <div>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">{h3}:{m3}</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3" style={{ overflow: 'hidden', wordWrap: 'break-word' }}>

                                                        <div className="font-weight-bold mb-1">Admin</div>

                                                        {item.content}


                                                    </div>
                                                </div>
                                        )
                                    })}
                                    <div id = "bottomMessage">

                                    </div>
                                </div>
                            </div>
                            <form onSubmit={this.sendMessage} style={{ padding: 0, border: 0 }}>
                                <div className="flex-grow-0 py-3 border-top">
                                    <div className="input-group" style={{ height: 36 }}>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Type your message"
                                            name="message"
                                            onChange={this.handleChange}
                                            required
                                            style={{ padding: '0px 5px' }}
                                            value={this.state.message}
                                        />
                                        <button className="btn btn-primary">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>}
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        createRoom: (body, callback) => {
            dispatch(createRoomRequest(body, callback));
        },
        sendMessage: (body, callback) => {
            dispatch(sendMessageRequest(body, callback));
        },
        getMessage : (roomId, callback) =>{
            dispatch(getMessageRequest(roomId, callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatBoxPopup);

