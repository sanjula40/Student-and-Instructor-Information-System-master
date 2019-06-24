import React, {Component} from 'react';
import axios from 'axios';
//import { input, form } from 'reactstrap';

//import 'bootstrap/dist/css/bootstrap.min.css';
/*Name
lecturerID
subjectID
date
description
*/
export default class AddSubmission extends Component{
    constructor(props){
        super(props);
        //this.onChangeLecturer_name = this.onChangeLecturer_name.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLecturerID = this.onChangeLecturerID.bind(this);
        this.onChangeSubjectID = this.onChangeSubjectID.bind(this);
        this.onChangeDate= this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);


        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Name:'',
            lecturerID:'',
            subjectID:'',
            date:'',
            description:''
        }
    }
    onChangeName(e){
        this.setState({
            Name : e.target.value
        });
    }
    onChangeLecturerID(e){
        this.setState({
            lecturerID : e.target.value
        });
    }

    onChangeSubjectID(e){
        this.setState({
            subjectID : e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            date : e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description : e.target.value
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
            Name : this.state.Name,
            lecturerID : this.state.lecturerID,
            subjectID : this.state.subjectID,
            date : this.state.date,
            description : this.state.description

        }
        axios.post('http://localhost:4000/assignmentSubmission/add',obj)
            .then(res => {console.log(res.data)});
    }

    render() {
        return(
            <div>
                <table>

                    <form onSubmit={this.onSubmit}>
                        <th colSpan={2}>Add New Assignment Submissions</th>
                        <tr>
                            <td><label><b>Enter Assignment Name</b></label></td>
                            <td><input
                                type="text"
                                placeholder="Enter Name"
                                value={this.state.Name}
                                onChange={this.onChangeName}
                                required
                            /></td>
                        </tr>

                        <tr>
                            <td><label><b>Enter Subject ID</b></label></td>
                            <td><input
                                type="text"
                                placeholder="Enter Subject ID"
                                value={this.state.subjectID}
                                onChange={this.onChangeSubjectID}
                                required
                            /></td>
                        </tr>


                        <tr>
                            <td><label><b>Enter Lecturer ID</b></label></td>
                            <td><input
                                type="text"
                                placeholder="Enter Lecturer ID"
                                value={this.state.lecturerID}
                                onChange={this.onChangeLecturerID}
                                required
                            /></td>
                        </tr>

                        <tr>
                            <td><label><b>Select Submission date</b></label></td>
                            <td><input
                                type="date"
                                placeholder="Submission date"
                                value={this.state.date}
                                onChange={this.onChangeDate}
                                required
                            /></td>
                        </tr>

                        <tr>
                            <td><label><b>Assignment Description</b></label></td>
                            <td><textarea
                                type="date"
                                placeholder="Description"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                required
                            /></td>
                        </tr>
                        <br/>
                        <tr><td><input type="submit" value="Add" onClick={this.onSubmit}/></td></tr>

                    </form>
                    <a href="/AllSubmission" ><button>All Submissions</button></a>
                </table>
            </div>
        )
    }
}