import React, {Component} from 'react';
import axios from 'axios';
//import { input, form } from 'reactstrap';

//import 'bootstrap/dist/css/bootstrap.min.css';


export default class AddNewMsg extends Component{
    constructor(props){
        super(props);
        //this.onChangeLecturer_name = this.onChangeLecturer_name.bind(this);
        this.onChangeMsg_title = this.onChangeMsg_title.bind(this);
        this.onChangeMsg_description = this.onChangeMsg_description.bind(this);


        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            msg_title:'',
            msg_description:'',
            lecturer_name:''
        }
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
   /* onChangeLecturer_name(e){
        this.setState({
            lecturer_name : e.target.value
        });
    }
    */
    onSubmit(){
        const obj = {
            msg_title : this.state.msg_title,
            msg_description : this.state.msg_description,
            //lecturer_name : this.state.lecturer_name
        }
        axios.post('http://localhost:4000/msg/add',obj)
            .then(res => {console.log(res.data)});
    }

    render() {
        return(
            <div>
                <table>

                <form onSubmit={this.onSubmit}>
                    <th colSpan={2}>Add New Message</th>
                    <tr>
                    <td><label><b>Msg_title</b></label></td>
                    <td><input
                        type="text"
                        placeholder="Enter msg title"
                        value={this.state.msg_title}
                        onChange={this.onChangeMsg_title}
                        required
                    /></td>
                    </tr>

                    <tr>
                        <td><label><b>Message</b></label></td>
                        <td><input
                        type="text"
                        placeholder="Enter your message"
                        value={this.state.msg_description}
                        onChange={this.onChangeMsg_description}
                        required
                    /></td>
                    </tr>
                    <br/>

                    <tr><td><input type="submit" value="Add" onClick={this.onSubmit}/></td></tr>

                </form>
                </table>
            </div>
        )
    }
}