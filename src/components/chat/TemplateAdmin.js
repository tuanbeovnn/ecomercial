import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getMessageRequest, sendMessageRequest } from '../../redux/actions';
import { addNewRoomRequest, fetchRoomRequest, getUserFromStorageRequest } from '../../redux/actions/AdminActions';
import SocketManager from '../../utils/SocketManager';

class TemplateAdmin extends Component {
    state = {
        messages: [],
    }
    
    componentDidMount() {
        this.props.getUserFromToken();
        SocketManager.instance.connectSocket();
        

        this.props.fetchRoomMessage((rooms) => {
            console.log(rooms);
            if (rooms && rooms.length) {
                // console.log(rooms.find(room=>room.roomId = ))
                rooms.map((item, index) => {
                    console.log(item.roomId);
                    // const socket = new SocketManager();
                    // socket.instance
                    SocketManager.instance.onChannel(item.roomId, (message => {

                        const messages = this.state.messages;
                        const currentIndex = this.state.messages.findIndex(room => room.roomId === item.roomId);// search message is exist or not

                        if (currentIndex !== -1) {
                            messages[currentIndex].data.push(message.data);
                            // messages[currentIndex].data = [...messages[currentIndex].data];// copy shallow for changing address

                            if (item.roomId !== this.state.selected) {
                                messages[currentIndex].newMessage += 1;
                            }
                            // messages[currentIndex] = { ...messages[currentIndex] };
                            this.setState({
                                messages: [...messages]
                            })
                        } else {
                            messages.push({ ...item, data: [message.data], newMessage: item.roomId === (this.state.selected || rooms[0].roomId) ? 0 : 1 });
                            // push room is item, create data and push message.data

                            this.setState({
                                messages: [...messages]// copy shallow
                            })
                        }
                        this.scrollToBottom();
                    }));
                })
                // console.log(rooms[0]);
                this.props.getMessage(rooms[0].roomId, (data) => {

                    if (data) {

                        this.state.messages.push({ ...rooms[0], data, newMessage: 0 });// message la data  
                        // console.log(messages);
                        this.setState({
                            messages: [...this.state.messages],
                            selected: rooms[0].roomId
                        })

                    }
                    this.scrollToBottom();
                })
            }
            SocketManager.instance.onChannel("0000", e => {
                if (e && e.data) {
                    this.props.getNewRoom(e.data);
                }
                SocketManager.instance.onChannel(e.data.roomId, (message => {

                    const messages = this.state.messages;
                    const currentIndex = this.state.messages.findIndex(room => room.roomId === e.data.roomId);// search message is exist or not
                    
                    if (currentIndex !== -1) {
                        
                        messages[currentIndex].data.push(message.data);
                        // messages[currentIndex].data = [...messages[currentIndex].data];// copy shallow for changing address

                        if (e.data.roomId !== this.state.selected) {
                            messages[currentIndex].newMessage += 1;
                        }
                        // messages[currentIndex] = { ...messages[currentIndex] };
                        this.setState({
                            messages: [...messages]
                        })
                    } else {
                        
                        messages.push({ ...e.data, data: [message.data], newMessage: e.data.roomId === (this.state.selected || rooms[0].roomId) ? 0 : 1 });
                        // push room is item, create data and push message.data

                        this.setState({
                            messages: [...messages]// copy shallow
                        })
                    }
                    this.scrollToBottom();
                }));
                
            })
        });


    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    sendMessage = (e) => {
        e.preventDefault();
        const body = { content: this.state.message, roomNumber: this.state.selected };
        this.props.sendMessage(body);
        this.setState({
            message: ""
        })
    }

    handleSelect = (e, room) => {
        e.preventDefault();
        const currentRoom = this.state.messages.find(r => r.roomId === room.roomId);
        if (currentRoom) {
            currentRoom.newMessage = 0;
            this.setState({
                selected: room.roomId,
                messages: [...this.state.messages]
            })

        } else {
            this.props.getMessage(room.roomId, (data) => {

                if (data) {
                    this.state.messages.push({ ...room, data, newMessage: 0 });// message la data  
                    // console.log(messages);
                    this.setState({
                        messages: [...this.state.messages],// change address arrays
                        selected: room.roomId,

                    })
                    this.scrollToBottom();
                }
            })
        }
    }

    scrollToBottom = () => {
        this.setTimeOut = setTimeout(() => {
            document.getElementById('bottomMessage').scrollIntoView();
        }, 200);

    }
    componentWillUnmount() {
        clearTimeout(this.setTimeOut);
    }

    render() {
        const { rooms } = this.props;
        
        const { messages, selected } = this.state;


        const currentRoom = messages.find(room => room.roomId === selected);
        const currentMessage = currentRoom && currentRoom.data || [];


        return (
            <div className="admin-box" style={{ height: '100%', overflow: 'hidden', marginTop: 20 }}>
                <main className="content" style={{ height: '100%' }}>
                    <div className="container p-0" style={{ height: '100%' }}>
                        <h1 className="h3 mb-3">Messages</h1>
                        <div className="card" style={{ height: 'calc(100% - 70px)' }}>
                            <div className="row g-0" style={{ height: '100%' }}>
                                <div className="col-12 col-lg-5 col-xl-3 border-right" style={{ height: '100%', overflowX: 'hidden', position: 'relative', overflowY: 'auto' }}>
                                    <div className="px-4 d-none d-md-block" style={{ position: 'sticky', zIndex: 1000, backgroundColor: 'white', borderBottom: '.5px solid #eee', top: 0 }}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <input type="text" className="form-control my-3" placeholder="Search..." />
                                            </div>
                                        </div>
                                    </div>
                                    {rooms.map((item, index) => {
                                        let clientInfo = {};
                                        try {
                                            clientInfo = JSON.parse(item.clientInfo);
                                        } catch { }

                                        const currentMessages = messages.find(r => r.roomId === item.roomId);

                                        const newMessages = currentMessages && currentMessages.newMessage;
                                        return (
                                            <a style={{ backgroundColor: item.roomId === this.state.selected ? 'rgb(216 231 247)' : '#fff' }} onClick={(e) => this.handleSelect(e, item)} href="#" className="list-group-item list-group-item-action border-0">
                                                {newMessages ? <div className="badge bg-success float-right">{newMessages}</div> : ""}
                                                <div className="d-flex align-items-start">
                                                    <img src={`https://bootdey.com/img/Content/avatar/avatar${index % 8 + 1}.png`} className="rounded-circle mr-1" alt="Vanessa Tucker" width={40} height={40} />
                                                    <div className="flex-grow-1 ml-3">
                                                        {clientInfo.name}
                                                        {/* <div className="small"><span className="fas fa-circle chat-online" /> Online</div> */}
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    })}

                                    <hr className="d-block d-lg-none mt-1 mb-0" />
                                </div>
                                <div className="col-12 col-lg-7 col-xl-9" style={{ height: '100%' }}>
                                    {/* <div className="py-2 px-4 border-bottom d-none d-lg-block">
                                        <div className="d-flex align-items-center py-1">
                                            <div className="position-relative">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
                                            </div>
                                            <div className="flex-grow-1 pl-3">
                                                <strong>Sharon Lessman</strong>
                                                <div className="text-muted small"><em>Typing...</em></div>
                                            </div>
                                            <div>
                                                <button className="btn btn-primary btn-lg mr-1 px-3"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone feather-lg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></button>
                                                <button className="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-video feather-lg"><polygon points="23 7 16 12 23 17 23 7" /><rect x={1} y={5} width={15} height={14} rx={2} ry={2} /></svg></button>
                                                <button className="btn btn-light border btn-lg px-3"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal feather-lg"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></button>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="position-relative" style={{ height: 'calc(100% - 90px)' }}>
                                        <div className="chat-messages p-4" style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
                                            {currentMessage.map((item, index) => {
                                                const time = new Date(item.createdDate);
                                                var h = time.getHours();
                                                var m = time.getMinutes();
                                                const h3 = (h < 10 ? "0" : "") + h;
                                                const m3 = (m < 10 ? "0" : "") + m;

                                                return (
                                                    !item.idUser ?
                                                        <div key={index} className="chat-message-right pb-4">
                                                            <div>
                                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width={40} height={40} />
                                                                <div className="text-muted small text-nowrap mt-2">{h3}:{m3}</div>
                                                            </div>
                                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3" >
                                                                <div className="font-weight-bold mb-1">You</div>
                                                                {item.content}
                                                            </div>

                                                        </div>
                                                        :
                                                        <div key={index} className="chat-message-left pb-4" >
                                                            <div>
                                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
                                                                <div className="text-muted small text-nowrap mt-2">{h3}:{m3}</div>
                                                            </div>
                                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                                <div className="font-weight-bold mb-1">Sharon Lessman</div>
                                                                {item.content}
                                                            </div>
                                                        </div>
                                                )
                                            })}

                                            <div id="bottomMessage">

                                            </div>

                                        </div>
                                    </div>
                                    <div style={{ position: 'sticky', zIndex: 1000, bottom: 0 }} className="flex-grow-0 py-3 px-4 border-top">
                                        <form onSubmit={this.sendMessage} style={{ padding: 0, border: 0 }}>
                                            <div className="input-group">
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
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.AdminReducer.getRoomMessage
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchRoomMessage: (callback) => {
            dispatch(fetchRoomRequest(callback));
        },
        getMessage: (roomId, callback) => {
            dispatch(getMessageRequest(roomId, callback));
        },
        sendMessage: (body, callback) => {
            dispatch(sendMessageRequest(body, callback));
        },
        getUserFromToken: () => {
            dispatch(getUserFromStorageRequest());
        },
        getNewRoom : (room)=>{
            dispatch(addNewRoomRequest(room));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TemplateAdmin);
