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
    componentDidMount() {
        axios.get('http://localhost:4000/msg/msgs')
            .then( res => {
                console.log(res.data.msg);
                this.setState({
                    msgs : res.data.msg
                });
            });
    }

    onDelete(e) {

        axios.delete(`http://localhost:4000/msg/delete/${e.target.value}`)
            .then(res => {
                console.log(res.data.msg._id);
            });
        window.location.reload();
    }


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
                                    <button type="submit" onClick={this.onDelete} value={msgs._id}>Delete</button>
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