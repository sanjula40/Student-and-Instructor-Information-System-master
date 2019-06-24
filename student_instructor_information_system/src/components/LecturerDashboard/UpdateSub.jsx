import React, {Component} from 'react';
import axios from "axios";

export default class UpdateSub extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLecturerID = this.onChangeLecturerID.bind(this);
        this.onChangeSubjectID = this.onChangeSubjectID.bind(this);
        this.onChangeDate= this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);


        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            _id:'',
            Name:'',
            lecturerID:'',
            subjectID:'',
            date:'',
            description:''
        };
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

    componentDidMount() {

        console.log(this.props.match.params.id);
        axios.get('http://localhost:4000/assignmentSubmission/' + this.props.match.params.id )

            .then(res => {
                console.log(res.data.assignment);
                this.setState({
                    _id: res.data.assignment._id,
                    Name: res.data.assignment.Name,
                    lecturerID: res.data.assignment.lecturerID,
                    subjectID: res.data.assignment.subjectID,
                    date: res.data.assignment.date,
                    description: res.data.assignment.description
                })
            });
    }


    onSubmit(){
        const obj = {
            Name : this.state.Name,
            lecturerID : this.state.lecturerID,
            subjectID : this.state.subjectID,
            date : this.state.date,
            description : this.state.description
        }
        axios.put('http://localhost:4000/assignmentSubmission/update/' + this.props.match.params.id ,obj)
            .then(res => window.location.href = "/AllSubmission");

    }


    render() {
        return(
            <div>
                <table>

                    <form >
                        <th colSpan={2}>Update Assignment Submissions</th>
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
                                type="text"
                                placeholder="Description"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                required
                            /></td>
                        </tr>
                        <br/>
                        <tr><td><input type="submit" value="Update" onClick={this.onSubmit}/></td>
                        </tr>
                    </form>



                    <br/>
                    <a href="/AddSubmission" ><button>Add New One</button></a>
                    <a href="/AllSubmission" ><button>All Assignments</button></a>
                </table>
            </div>
        )
    }
}
