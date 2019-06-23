import React,{Component} from 'react';
import axios, {AxiosRequestConfig as res} from 'axios';


export default class GetAllMsg extends Component{
    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.state={
            msgs:[]
        }
    }

    handleClick = msgID => {
        const requestOptions = {
            method: 'DELETE'
        };

        fetch("http://localhost:4000/msg/delete/" + msgID, requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            console.log('Deleted')
            // do what you want with the response here
        });
        window.location.href = "/GetAllMsg";
    }

    componentDidMount() {
        axios.get('http://localhost:4000/msg/msgs')
            .then( res => {
                console.log(res.data.msg);
                this.setState({
                    msgs : res.data.msg
                });
            });
    }

    /*
    onDelete() {
        const obj = {
            _id : this.state._id,
            msg_title : this.state.msg_title,
            msg_description : this.state.msg_description
        }
        console.log(obj._id);
        axios.delete('http://localhost:4000/msg/delete/:id'+obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        window.location.href = "/GetAllMsg";
    }
*/

    render() {
        return(
            <div>
                <h1>All messages </h1>
                <table>
                    <thead>
                    <tr>
                        <th>Message title</th>
                        <th>Message</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.msgs.map((msgs,i) => {
                        return(
                            <tr key={msgs._id}>
                                <td>{msgs.msg_title}</td>
                                <td>{msgs.msg_description}</td>
                                <td><a href={"/updateMsg/"+msgs._id}><button>Edit</button></a>
                                    <button onClick={() => { this.handleClick(msgs._id) }} className="delete-btn">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>


                <a href="/AddNewMsg" ><button>Add Messages</button></a>
            </div>
        )
    }
}