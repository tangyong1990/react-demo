import React, { Component } from 'react';
import {SearchBar} from 'antd-mobile';
import { HashRouter as Router, Route } from 'react-router-dom';
import Music from './music.js';
import Video from './video.js';
import { connect } from "react-redux";
import { IP } from '../configIp.js';

class Found extends Component {
    render(){
        return (
            <div>
              <header id='foundHead'>
                <img src={IP+'/img/agh.png'} alt=''/>
                <SearchBar 
                onFocus={this.search.bind(this)}
                 placeholder="Search" maxLength={8} width='70%' style={{width:'80%',backgroundColor:'red',margin:'0 auto'}}/>
                <img src={IP+'/img/oi.png'} alt=''/>
              </header>
              <nav id='foundNav'>
                  <span className='red' ref='music' onClick={this.clickM.bind(this)}>音乐</span>
                  <span ref='vedio' onClick={this.clickV.bind(this)}>视频</span>
                  <span ref='fm' onClick={this.clickF.bind(this)}>电台</span>
              </nav>
              <Router>
                <div>
                  <Route path='/found/music/musics' component={Music}/>
                  <Route path='/found/music/video' component={Video}/>
                </div>
              </Router>
            </div> 
        )
    }
    componentDidMount(){
        this.refs.music.className='red'
    }
    search(){
      this.props.history.push('/found/search')
    }
    clickM(){
            this.refs.music.className='red'
            this.refs.vedio.className=''
            this.refs.fm.className=''
        this.props.history.push('/found/music/musics')
    }
    clickV(){
        this.refs.music.className=''
            this.refs.vedio.className='red'
            this.refs.fm.className=''
        this.props.history.push('/found/music/video')
    }
    clickF(){
        this.refs.music.className=''
            this.refs.vedio.className=''
            this.refs.fm.className='red'
        this.props.history.push('/found/music/musics')
    }
}

export default connect()(Found);