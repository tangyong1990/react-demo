import React, { Component } from 'react';
import { HashRouter as Router, Route,Link } from 'react-router-dom';
import Found from '../index/found.js';
import MusicList from '../index/musicList.js';
import My from '../myMusic/myMuisc.js';
import User from '../user/user.js';
import Search from '../search/search.js';
import { IP } from '../configIp.js';

class Main extends Component{
    constructor(p){
        super(p);
        this.state={
            foundImg:'/img/findMusic.png',
            myMusicImg:'/img/myMusic.png',
            friendsImg:'/img/friends.png',
            userImg:'/img/user.png'
        }
    }
    render (){
        return (
            <div id='main'>
              <Router>
                  <div id='content'>
                      <Route path='/found/music' component={Found}/>
                      <Route path='/found/musicList' component={MusicList}/>
                      <Route path='/found/my' component={My}/>
                      <Route path='/found/user' component={User}/>
                      <Route path='/found/search' component={Search}/>
                  </div>
              </Router>
              <footer>
                  <div id='mainMenu'>
                  <Link to='/found/music/musics'>
                  <p>
                  <img src={IP+this.state.foundImg} alt=''/><span>发现音乐</span>
                  </p>
                  </Link>
                  <Link to='/found/my'>
                  <p>
                  <img src={IP+this.state.myMusicImg} alt=''/><span>我的音乐</span>
                  </p>
                  </Link>
                  <Link to='/found/music/musics'>
                  <p>
                  <img src={IP+this.state.friendsImg} alt=''/><span>朋友</span>
                  </p>
                  </Link>
                  <Link to='/found/user'>
                  <p>
                  <img src={IP+this.state.userImg} alt=''/><span>账号</span>
                  </p>
                  </Link>
                  </div>
              </footer>
            </div>
        )
    }
}

export default Main;