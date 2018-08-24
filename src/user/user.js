import React, { Component } from 'react';
import { IP } from '../configIp.js';
import { List } from 'antd-mobile';
import { connect } from 'react-redux';

const Item = List.Item;

class User extends Component{
    constructor(p){
        super(p)
        this.state={
            userImg:'aln.png'
        }
    }
    render(){
        return(
            <div id='user_main'>
                <header id='user_header'>
                    <div>
                        <img  src={IP+'/img/'+this.state.userImg} alt=''/>
                        <div>
                            <p>{}</p>
                            <p>Lv.8</p>
                        </div>
                    </div>
                    <p>签到</p>
                    <ul id='user_info'>
                        <li>
                            <p>动态</p>
                            <p>1</p>
                        </li>
                        <li>
                            <p>关注</p>
                            <p>1</p>
                        </li>
                        <li>
                            <p>粉丝</p>
                            <p>1</p>
                        </li>
                        <li>
                            <p>动态</p>
                            <p>我的资料</p>
                        </li>
                    </ul>
                </header>
                <div id='user_setting'>
                <Item className='my_msg' arrow="horizontal" ><img src={IP+'/img/ak2.png'} alt=''/> 我的消息</Item>
                <Item  arrow="horizontal" ><img src={IP+'/img/aka.png'} alt=''/> 会员中心</Item>
                <Item  arrow="horizontal" ><img src={IP+'/img/ak8.png'} alt=''/> 商城</Item>
                <Item  arrow="horizontal" ><img src={IP+'/img/ajx.png'} alt=''/> 在线听歌免流量</Item>
                </div>
            </div>
        )
    }
}

export default User;