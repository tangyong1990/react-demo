import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Icon } from 'antd-mobile';
import {  InputItem,Button,Toast } from 'antd-mobile';
import { IP, AjaxIp } from '../configIp';

class Reg extends Component{
    handleClick = () => {
        this.inputRef.focus();
      }
    render(){
        return(
            <div>
                <header id='reg_header'>
                  <Link to='/'><Icon type='left' size='lg' color='white'/></Link>
                  <h3>手机号注册</h3>
                </header>
                <div className='reg_input'>
                  <img src={IP+'/img/a74.png'} alt=''/>
                  <span>+86</span>
                  <InputItem ref='phone' maxLength='11' placeholder="输入手机号"></InputItem>
                </div>
                <div className='reg_input'>
                  <img src={IP+'/img/a76.png'} alt=''/>
                  <InputItem ref='pwd' style={{width:'20rem'}} type='password' placeholder="设置登录密码，不少于6位"></InputItem>
                </div>
                <p id='reg_btn'>
                  <Button onClick={this.reg.bind(this)}>注册</Button>
                </p>
            </div>
        )
    }
    reg(){
        if(this.refs.phone.state.value&&this.refs.pwd.state.value){
            Toast.success('注册成功,前往登录！', 1);
            let param = {phone:this.refs.phone.state.value,pwd:this.refs.pwd.state.value}
            axios.post(AjaxIp+'/reg',param).then(msg=>{
                setTimeout(() => {
                    this.props.history.push('/login')
                }, 1500);
            })
        }
    }
}

export default Reg;