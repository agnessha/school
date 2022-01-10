import React from "react";
import s from './Profile.module.css';
import profileImg from '../../img/Landscape-Color.jpg'
import MyPosts from "./MyPosts/MyPosts";
import Profile__info from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {addUserDataAC} from "../../redux/profileReducer";
import {changeFetchingStatus} from "../../redux/usersReducer";
import {useParams} from "react-router-dom";



class ProfileAPI extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        GetUrl();
        const axios = require('axios').default;

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?count=4')
            .then(
                response => {
                    console.log(response.data.items)

                    // this.props.setUsersCount(response.data.totalCount)
                }
            );
    }
    render() {
        console.log(this.props.userData)
        return (

            <div className={s.content}>
                <div className={s.profile_infoImg}>
                    <img src={profileImg} alt=""/>
                </div>
                <div>
                    <Profile__info userData={this.props.userData}/>
                    <MyPostsContainer

                    />
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.profilePage.userData
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addUserData: (userData) => {
           dispatch(addUserDataAC(userData))
        },
        changeFetchingStatus: (status) => {
            dispatch(changeFetchingStatus(status))
        }
    }
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPI)

export default ProfileContainer;

function GetUrl()  {
    let {userId} = useParams()
    const axios = require('axios').default;
    axios
        .get('https://social-network.samuraijs.com/api/1.0/profile/'+ userId)
        .then(
            response => {

                this.props.changeFetchingStatus(false)
                this.props.addUserData(response.data)
                // this.props.setUsersCount(response.data.totalCount)
            }
        );
}