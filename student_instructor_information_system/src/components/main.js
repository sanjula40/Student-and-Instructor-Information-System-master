import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/HomeHandler';
import LoginPage from './LoginPage/LoginPageHandler';
import StudentPage from './StudentDashboard/StudentDashboardHandler';
import AdminPage from './AdminDashboard/AdminDashboardHandler';
import AddAssignment from './LecturerDashboard/AddAssignment';
import AddMaterial from './LecturerDashboard/AddMaterial';
import AddNewMsg from './LecturerDashboard/AddNewMsg';
import GetAllMsg from './LecturerDashboard/GetAllMsg';
import updateMsg from './LecturerDashboard/updateMsg';
import AddSubmission from './LecturerDashboard/AddSubmission';
import AllSubmission from './LecturerDashboard/AllSubmission';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/HomePage" component={HomePage} />
        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/StudentPage" component={StudentPage} />
        <Route path="/AdminPage" component={AdminPage} />
        <Route path="/AddAssignment" component={AddAssignment} />
        <Route path="/AddMaterial" component={AddMaterial} />
        <Route path="/AddNewMsg" component={AddNewMsg} />
        <Route path="/GetAllMsg" component={GetAllMsg} />
        <Route path="/updateMsg/:id" component={updateMsg} />
        <Route path="/AddSubmission" component={AddSubmission} />
        <Route path="/AllSubmission" component={AllSubmission} />
    </Switch>
)

export default Main;

