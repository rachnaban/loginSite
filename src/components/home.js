import React, { Component } from 'react';

class Home extends Component {

    logOut()  {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                Successfully Logged In !
                <div>
                    <button type="button" onClick={this.logOut}>LogOut</button>
                </div>
            </div>
        )
    }
}

export default Home;