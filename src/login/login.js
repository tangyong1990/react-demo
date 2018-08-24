import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Icon } from 'antd-mobile';
import {  InputItem,Button,Toast } from 'antd-mobile';
import { IP, AjaxIp } from '../configIp';

class Login extends Component{
    handleClick = () => {
        this.inputRef.focus();
      }
    render(){
        return(
            <div>
                <header id='reg_header'>
                  <Link to='/found/music/musics'><Icon type='left' size='lg' color='white'/></Link>
                  <h3>手机号登录</h3>
                </header>
                <div className='reg_input'>
                  <img src={IP+'/img/a74.png'} alt=''/>
                  <InputItem ref='phone' maxLength='11' placeholder="手机号"></InputItem>
                </div>
                <div className='reg_input'>
                  <img src={IP+'/img/a76.png'} alt=''/>
                  <InputItem ref='pwd' type='password' placeholder="密码"></InputItem>
                </div>
                <p id='reg_btn'>
                  <Button onClick={this.reg.bind(this)}>登录</Button>
                </p>
                <p id='go_reg'>
                <Link to='/reg'>快速注册</Link>
                </p>
            </div>
        )
    }
    reg(){
        if(this.refs.phone.state.value&&this.refs.pwd.state.value){
            let param = {phone:this.refs.phone.state.value,pwd:this.refs.pwd.state.value}
            axios.post(AjaxIp+'/login',param).then(msg=>{
                if(msg.data){
                    Toast.success('登录成功,前往主页！', 1);
                    setTimeout(() => {
                        this.props.history.push('/found/music/musics')
                    }, 1500);
                }else{
                    Toast.fail('登录失败,请重新输入！', 2);
                    this.props.history.push('/')
                }
            })
        }
    }
}

export default Login;