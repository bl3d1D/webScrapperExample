import React from 'react';
import {Switch , Route} from 'react-router-dom';


import LandingPage from './landingpage';
import MyNotifications from './UserComponents/MyNotifications';
import Profile from './UserComponents/Profile';
import CategoryComponent from './NotificationsComponents/CategoryComponent';
import SubCategoryComponent from './NotificationsComponents/SubCategoryComponent';
import NotificationSub from './NotificationsComponents/NotificationFromSub';
import Notifications from './NotificationsComponents/Notifications';
import SubDetails from './NotificationsComponents/SubDetails';
import Details from './NotificationsComponents/Details';
import Login from './AuthComponents/LoginComponent';
import Logout from './AuthComponents/LogoutComponent';
import Register from './AuthComponents/RegisterComponent';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/categories" component={CategoryComponent} />
    <Route path="/subcategories/:id" component={SubCategoryComponent} />
    <Route path="/mynotifications" component={MyNotifications} />
    <Route path="/notificationSub/:id" component={NotificationSub} />
    <Route path="/notification/:id" component={Notifications} />
    <Route path="/details/:id" component={Details} />
    <Route path="/subdetails/:id" component={SubDetails} />
    <Route path="/login" component={Login} />
    <Route path="/login" component={Logout} />
    <Route path="/register" component={Register} />
    <Route path="/myprofile" component={Profile} />
  </Switch>

)


export default Main;
