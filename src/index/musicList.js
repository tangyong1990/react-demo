import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd-mobile';
import axios from 'axios';
import { IP,AjaxIp } from '../configIp.js';
import { connect } from "react-redux";
import { init } from '../store/actions.js';
import { song } from '../store/actions.js';
class MusicList extends Component{
    constructor(p){
        super(p)
        this.state={
            musicList:'',
            total:0,
            musics:[]
        }
    }
    render(){
        return (
            <div>
                <header id='music_list_head'>
                    <Link to='/found/music/musics'><Icon type='left' size='lg' color='white'/></Link>
                    <h3>歌单</h3>
                    <p>
                        <img src={IP+'/img/oi.png'} alt=''/>
                    </p>
                </header>
                <div id='list_info'>
                  <img src={`${AjaxIp}/images/${this.state.musicList.img}`} alt=''/>
                  <div>
                    <p>{this.state.musicList.title}</p>
                    <p id='musicList_name'>
                      <img src={`${AjaxIp}/images/${this.state.musicList.head}`} alt=''/>
                      <span>{this.state.musicList.name}</span>
                      <Icon type='right' color='white'/>
                    </p>
                   </div>
                   <ul id='list_menu'>
                       <li>
                       <img src={IP+'/img/a2j.png'} alt=''/>
                       <p>{this.state.musicList.collect}</p>
                       </li>
                       <li>
                       <img src={IP+'/img/a2h.png'} alt=''/>
                       <p>{this.state.musicList.collect}</p>
                       </li>
                       <li>
                       <img src={IP+'/img/a2m.png'} alt=''/>
                       <p>{this.state.musicList.collect}</p>
                       </li>
                       <li>
                       <img src={IP+'/img/a2i.png'} alt=''/>
                       <p>下载</p>
                       </li>
                   </ul>
                </div>
                <div id='list_play'>
                    <p>
                        <img src={IP+'/img/ah8.png'} alt=''/>
                        <span>播放全部</span>
                        <span>(共{this.state.total}首)</span>
                    </p>
                    <p></p>
                </div>
                <ul id='song_list'>
                    {this.state.musics.map((item,index)=>(
                        <li onClick={this.click.bind(this,index)} key={item._id}>
                          <div>
                            <span>{index+1}</span>
                            <p id='songs_item'>
                                <span>
                                    {item.name}
                                </span>
                                <span>{item.singer}-{item.album}</span>
                            </p>
                          </div>
                          <p></p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    componentWillMount(){
        let param = {_id:this.props.location.search.slice(1,)}
        axios.post(AjaxIp+'/getList',param).then(msg=>{
            this.props.dispatch(init(msg.data.musics))
            this.setState({
                musicList:msg.data,
                total:msg.data.musics.length,
                musics:msg.data.musics
            })
        })
    }
    click(index){
        this.props.dispatch(song(index))
        this.props.history.push("/play")
    }
}

export default connect()(MusicList);