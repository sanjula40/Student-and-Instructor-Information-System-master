import React,{Component} from 'react';
import axios, {AxiosRequestConfig as res} from 'axios';

/*Name
lecturerID
subjectID
date
description
*/
export default class AllSubmission extends Component{
    constructor(props){
        super(props);
        //this.onDelete = this.onDelete.bind(this);
        this.state={
            submission:[]
        }
    }

    handleClick = submissionID => {
        const requestOptions = {
            method: 'DELETE'
        };

        fetch("http://localhost:4000/assignmentSubmission/delete/" + submissionID, requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            console.log('Deleted')
            // do what you want with the response here
        });
        window.location.href = "/AllSubmission";
    }

    componentDidMount() {
        axios.get('http://localhost:4000/assignmentSubmission/assignments')
            .then( res => {
                console.log(res.data.assignment);
                this.setState({
                    submission : res.data.assignment
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
                <h1>All Submissions </h1>
                <table>
                    <thead>
                    <tr>
                        <th>Submission title</th>
                        <th>lecturerID</th>
                        <th>subjectID</th>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.submission.map((submission,i) => {
                        return(
                            <tr key={submission._id}>
                                <td>{submission.Name}</td>
                                <td>{submission.lecturerID}</td>
                                <td>{submission.subjectID}</td>
                                <td>{submission.date}</td>
                                <td>{submission.description}</td>
                                <td><a href={"/UpdateSub/"+submission._id}><button>Edit</button></a>
                                    <button onClick={() => { this.handleClick(submission._id) }}  className="delete-btn">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>


                <a href="/AddSubmission" ><button>Add Submission</button></a>
            </div>
        )
    }
}