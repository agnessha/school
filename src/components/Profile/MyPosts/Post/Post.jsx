import React from "react";
import s from './Post.module.css';
import like from "../../../../img/like.png"


const Post = (props) => {

    return (
        <div className={s.post}>
            <img src="https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large" alt=""/>
            <div className={s.post_text}>
                {props.text}
            </div>
            <div className={s.like}>
                <img src={like} alt=""/>
                {props.like}
            </div>
        </div>
    )
}

export default Post ;