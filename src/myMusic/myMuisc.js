import React, { Component } from 'react';
import { IP } from '../configIp.js';
import { Icon } from 'antd-mobile';

class My extends Component{
    render(){
        return(
            <div>
                <header id='myMusic_header'>
                    <span>
                        更多
                    </span>
                    <h4>
                        我的音乐
                    </h4>
                    <img src={IP+'/img/oi.png'} alt=''/>
                </header>
                <div>
                    <ul id='myMusic_content'>
                        <li>
                            <p>
                                <img src={IP+'/img/a0n.png'} alt=''/>
                                <span>本地音乐</span>
                            </p>
                            <p>
                                <span>10</span>
                                <Icon type='right' size='lg' color='gainsboro'/>
                            </p>
                        </li>
                        <li>
                            <p>
                                <img src={IP+'/img/a0e.png'} alt=''/>
                                <span>最近播放</span>
                            </p>
                            <p>
                                <span>10</span>
                                <Icon type='right' size='lg' color='gainsboro'/>
                            </p>
                        </li>
                        <li>
                            <p>
                                <img src={IP+'/img/a0q.png'} alt=''/>
                                <span>我的电台</span>
                            </p>
                            <p>
                                <span>10</span>
                                <Icon type='right' size='lg' color='gainsboro'/>
                            </p>
                        </li>
                        <li>
                            <p>
                                <img src={IP+'/img/a0_.png'} alt=''/>
                                <span>我的收藏</span>
                            </p>
                            <p>
                                <span>10</span>
                                <Icon type='right' size='lg' color='gainsboro'/>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default My;