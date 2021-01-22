import React, {useEffect, useState} from 'react';
import './style.css';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getInfoUser } from '../../store/reload/action';
import InputMask from 'react-input-mask';

const UserInfo = (props) => {

    const [massInfo, setMassInfo] = useState([]);

    useEffect(() => {
        let id_user = localStorage.getItem('id');
        props.getInfoUser(id_user);

    }, []);

    useEffect(() => {
        props.userInfoList ? setMassInfo(props.userInfoList) : setMassInfo([]);
    }, [props.userInfoList]);

    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-26">
                                User information
                            </span>
                            <span className="login100-form-title p-b-48">
                                <i className="zmdi zmdi-font"></i>
                            </span>

                            <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                                <input 
                                    className="input100" 
                                    type="text" 
                                    name="email" 
                                    placeholder="Email"
                                    value={massInfo.length > 0 ? massInfo.user.email : ''} />
                            </div>

                            <div className="wrap-input100 validate-input">
                                <InputMask
                                    mask="+99999999999"
                                    className="input100" 
                                    type="text" 
                                    name="phone" 
                                    placeholder="Phone"
                                    value={massInfo.length > 0 ? massInfo.phone : ''} />
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input 
                                    className="input100" 
                                    type="text" 
                                    placeholder="Invited by"
                                    name="invited_by"
                                    value={massInfo.length > 0 ? massInfo.invited_by : ''} />
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input 
                                    className="input100" 
                                    type="text" 
                                    name="user-name"
                                    placeholder="Name"
                                    value={massInfo.length > 0 ? massInfo.name : ''} />
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input 
                                    className="input100" 
                                    type="text" 
                                    name="user-surname"
                                    placeholder="Surname"
                                    value={massInfo.length > 0 ? massInfo.surname : ''} />
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn login100-form-bgbtn__our"></div>
                                    <NavLink
                                        className="login100-form-btn login100-form-btn_info login100-form-btn_first"
                                        to={massInfo.length > 0 ? "/" : "login"} >
                                            Login
                                    </NavLink>
                                    <NavLink
                                        className="login100-form-btn login100-form-btn_info"
                                        to={massInfo.length > 0 ? "/" : "signup"} >
                                            Sign Up
                                    </NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        <div id="dropDownSelect1"></div>
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userInfoList: state.information.userInfo
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        getInfoUser
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(UserInfo);