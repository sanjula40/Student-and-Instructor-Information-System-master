import React, {Component} from 'react';
import axios from "axios";

export default class updateMsg extends Component{
    constructor(props){
        super(props);

        this.onChangeMsg_title = this.onChangeMsg_title.bind(this);
        this.onChangeMsg_description = this.onChangeMsg_description.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            _id:'',
            msg_title:'',
            msg_description:''
        };
    }
    onChangeMsg_title(e){
        this.setState({
            msg_title : e.target.value
        });
    }
    onChangeMsg_description(e){
        this.setState({
            msg_description : e.target.value
        });
    }

   componentDidMount() {

        console.log(this.props.match.params.id);
        axios.get('http://localhost:4000/msg/' + this.props.match.params.id )

            .then(res => {
                console.log(res.data.msg);
                this.setState({
                    _id: res.data.msg._id,
                    msg_title: res.data.msg.msg_title,
                    msg_description: res.data.msg.msg_description
                })
            });
    }


    onSubmit(){
        const obj = {
            msg_title : this.state.msg_title,
            msg_description : this.state.msg_description
        }
        axios.put('http://localhost:4000/msg/update/' + this.props.match.params.id ,obj)
            .then(res => window.location.href = "/GetAllMsg");

    }


    render() {
        return(
            <div>
                <table>

                <form >
                    <th colSpan={2}>Update Messages</th>
                    <tr>
                    <td><label>Message title</label></td>
                    <td><input
                        type="text"
                        value={this.state.msg_title}
                        onChange={this.onChangeMsg_title}

                    /></td>
                    </tr>

                    <tr>
                    <td><label>Message description</label></td>
                    <td><input
                        type="text"
                        value={this.state.msg_description}
                        onChange={this.onChangeMsg_description}
                    /></td>
                    </tr>
                    <br/>
                    <tr><td><input type="submit" value="Update" onClick={this.onSubmit}/></td>
                    </tr>
                </form>



                <br/>
                <a href="/AddNewMsg" ><button>Add Messages</button></a>
                <a href="/GetAllMsg" ><button>All Messages</button></a>
                </table>
            </div>
        )
    }
}
