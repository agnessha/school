import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';
import {EditIcon, CheckIcon} from "@chakra-ui/icons";
import { Input } from '@chakra-ui/react'
import {profileAPI} from "../../../api/api";



const Profile__info = (props) => {

    const [isEdit, setEdit] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    })
    return (
        <div className={s.profile_info}>
            <div className={s.ava}>
                <img src={
                    props.userData !== null && props.userData.photos.small ?
                        props.userData.photos.small :
                        "https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"} alt=""/>
            </div>
            <div className={s.description}>
                <div>
                    {props.userData !== null ? props.userData.fullName : ''}
                </div>
                <div className={s.profile_status}>
                    {isEdit ?
                        <div>
                        <Input width='auto' value={status} onChange={(event) => {
                        setStatus(event.target.value)
                            props.getStatus(event.target.value)
                        }}/>
                        <CheckIcon display='inline-block' onClick={() => {
                            setEdit(false)
                            props.updateStatus(status)
                        }
                        }/>
                    </div>: <div>
                            {props.status === null ? 'no status' : props.status}
                            <EditIcon ml='5px' cursor='pointer' w={4} h={4} onClick={() => {
                                setEdit(() => {
                                    if (isEdit === true) {
                                        return false
                                    } else {
                                        return true
                                    }
                                })
                            }}/>
                    </div>}

                </div>
            </div>
        </div>
    );
}


export default Profile__info;