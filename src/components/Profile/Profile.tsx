import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


function Profile() {
    return (
        <div>
            <div>
                <img className={classes.img}
                    src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2147483647&v=beta&t=MpzHeo7wdMoePy-CjWNPwwMbgDU3ydtdqIXGYFtSisg"
                    alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;