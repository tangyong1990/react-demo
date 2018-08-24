import React, { Component } from 'react';
import { IP,AjaxIp } from '../configIp.js';
import { Icon } from 'antd-mobile';
import { Progress } from 'antd-mobile';
import {connect} from 'react-redux';
import { song } from '../store/actions.js';
import { pass } from '../store/actions.js';

var progress;
var imgRotate;
var num = 0;
var rotate = 0;
class Play extends Component {
    constructor(){
        super();
        this.state={
            song_index:0,
            song:'',
            isRandom:false,
            randomImg:'/img/tb.png',
            playImg:'/img/a_f.png',
            percent:0
        }
    }
    render(){
        return(
            <div id='song_main' style={{backgroundImage:`url(${AjaxIp}/musics/${this.props.musics[this.props.index].bgi})`}}>
              <header>
              <Icon onClick={this.song_back.bind(this)} type='left' color='white' size='lg'/>
              <p>
                  <span>{this.props.musics[this.props.index].name}</span>
                  <span>{this.props.musics[this.props.index].singer}</span>
              </p>
              <img src={IP+'/img/a2m.png'} alt=''/>
              </header>
              <div id='song_rotate'>
                  <img src={IP+'/img/needle-ip6.png'} alt=''/>
              </div>
              <div id='song_img'>
                  <img ref='img_rotate' src={AjaxIp+'/musics/'+this.props.musics[this.props.index].cover_img} alt=''/>
              </div>
              <div>
                  <p id='song_msg'>
                      <img src={IP+'/img/note_btn_love_white.png'} alt=''/>
                      <img src={IP+'/img/px.png'} alt=''/>
                      <img src={IP+'/img/a2h.png'} alt=''/>
                      <img src={IP+'/img/a3a.png'} alt=''/>
                  </p>
              </div>
              <div id='song_control'>
              <div>
              <span>00:00</span>
              <Progress percent={this.props.percent} position='normal' style={{width:'18rem',height:'.25rem'}}/>
              <span>{this.props.musics[this.props.index].time}</span>
              </div>
                <audio  id='song_play' src={AjaxIp+'/musics/'+this.props.musics[this.props.index].name+'.mp3'}/>
                <ul id='play_control'>
                    <li>
                        <img onClick={this.random.bind(this)} src={IP+this.state.randomImg} alt=''/>
                    </li>
                    <li>
                        <img onClick={this.pre.bind(this)} src={IP+'/img/akr.png'} alt=''/>
                    </li>
                    <li>
                        <img onClick={this.play.bind(this)} src={IP+this.state.playImg} alt=''/>
                    </li>
                    <li>
                        <img onClick={this.next.bind(this)} src={IP+'/img/akk.png'} alt=''/>
                    </li>
                    <li>
                        <img src={IP+'/img/a3a.png'} alt=''/>
                    </li>
                </ul>
              </div>
            </div>
        )
    }
    song_back(){
        clearInterval(progress)
        clearInterval(imgRotate)
        this.props.history.goBack();
    }
    play(){
        var song_play = document.getElementById('song_play');
        let time = '';
        var min = this.props.musics[this.props.index].time.split(':')[0];
        var sec = this.props.musics[this.props.index].time.split(':')[1];
        time = Number(min*60) + Number(sec);
        let percent = this.props.percent;
        if(song_play.paused){
            song_play.play(); 
             progress = setInterval(()=>{
                num+=0.5;
                if(num>time){
                    clearInterval(progress)
                }else{
                    percent = num/time*200
                    this.props.dispatch(pass(percent))
                } 
            },1000)
            imgRotate = setInterval(()=>{
                rotate+=0.3
                this.refs.img_rotate.style.transform = `rotate(${rotate}deg)`
            },20)
            this.setState({
                playImg:'/img/a_c.png'
            })
        } else{
            clearInterval(progress)
            clearInterval(imgRotate)
           song_play.pause();
           this.setState({
            playImg:'/img/a_f.png'
         })
        } 
    }
    pre(){
        this.setState({
            playImg:'/img/a_f.png'
        })
        num = 0;
        rotate = 0;
        this.refs.img_rotate.style.transform = `rotate(0deg)`
        clearInterval(progress)
        clearInterval(imgRotate)
        this.props.dispatch(pass(0))
        if(this.state.isRandom){
            this.props.dispatch(song(parseInt(Math.random()*this.props.musics.length,10)))
        }else{
            let num = this.props.index;
            if(num>0){
                num--;
                this.props.dispatch(song(num))
            }else{
                this.props.dispatch(song(this.props.musics.length-1))
            }
        }   
    }
    next(){
        this.setState({
            playImg:'/img/a_f.png'
        })
        num = 0;
        rotate = 0;
        this.refs.img_rotate.style.transform = `rotate(0deg)`
        clearInterval(progress)
        clearInterval(imgRotate)
        this.props.dispatch(pass(0))
        if(this.state.isRandom){
            this.props.dispatch(song(parseInt(Math.random()*this.props.musics.length,10)))
        }else{
            let index = this.props.index;
            index++
            if(index>this.props.musics.length-1){
                index=0;
                this.props.dispatch(song(index))
            }else{
                this.props.dispatch(song(index))
            }
        }  
    }
    random(){
        if(this.state.isRandom){
            this.setState({
                isRandom:false,
                randomImg:'/img/tb.png'
            })    
        }else{
            this.setState({
                isRandom:true,
                randomImg:'/img/a_l.png'
            })
        }
    }
}
function filter(state){
    return {
        index:state.songIndex,
        musics:state.initData,
        percent:state.percent,
    }
}
export default connect(filter)(Play);