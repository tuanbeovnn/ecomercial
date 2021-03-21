import React, { Component } from 'react'

export default class ChatBoxPopup extends Component {
    state = {

    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            logged: true
        })
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
                    {!this.state.logged ?
                        <div className="chat-box" >
                            <div className="desc-text">
                                Please fill out the form below to start chatting with the next available agent.</div>
                            <form action="#" onSubmit={this.handleSubmit}>
                                <div className="field">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="field">
                                    <input type="email" placeholder="Email Address" required />
                                </div>
                                <div className="field textarea">
                                    {/* Due to more textarea fields I got an error so I've changed the textarea name into changeit..Change the tag name to use it */}
                                    {/* <changeit cols={30} rows={10} placeholder="Explain your queries.." required /> */}
                                </div>
                                <div className="field">
                                    <button type="submit">Start Chat</button>
                                </div>
                            </form>
                        </div>
                        : <div className="chat-box" style={{height:467, width:360}}></div>}
                </div>
            </div>


        )
    }
}
