import React, { Component } from 'react';
import {SearchBar} from 'antd-mobile';
import { connect } from "react-redux";
import axios from 'axios';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { init } from '../store/actions.js';
import { song } from '../store/actions.js';
import { IP,AjaxIp } from '../configIp.js';

function renderTabBar(props) {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }
  const tabs = [
    { title: '单曲' },
    { title: '歌手' },
    { title: '专辑' },
  ];
class Search extends Component{
    constructor(p){
        super(p)
        this.state={
            value:'',
            musics:[]
        }
    }
    render(){
        return(
            <div>
                <header id='foundHead'>
                <SearchBar 
                onChange={this.onChange.bind(this)}
                onSubmit={this.search.bind(this)}
                 placeholder="Search" maxLength={8} width='70%' style={{width:'80%',backgroundColor:'red',margin:'0 auto'}}/>
                </header>
                <div>
    <WhiteSpace />
    <StickyContainer>
      <Tabs tabs={tabs}
        initalPage={'t2'}
        renderTabBar={renderTabBar}
        tabBarUnderlineStyle={{borderColor:'red'}}
        tabBarActiveTextColor='red'
      >
        <div>
        <ul id='song_list'>
                    {this.state.musics.map((item,index)=>(
                        <li id='search_item' onClick={this.click.bind(this,index)} key={item._id}>
                          <div>
                          <span>{index+1}</span>
                            <p id='songs_item'>
                                <span>
                                    {item.name}
                                </span>
                                <span>{item.singer}-{item.album}</span>
                            </p>
                          </div>
                          <p><img src={IP+'/img/a3a.png'} alt=''/></p>
                        </li>
                    ))}
                </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of third tab
        </div>
      </Tabs>
    </StickyContainer>
    <WhiteSpace />
  </div>
            </div>
        )
    }
    onChange= (value) => {
        this.setState({ value });
      }
      click(index){
        this.props.dispatch(song(index))
        this.props.history.push("/play")
    }
    search(){
        if(this.state.value)
        axios.get(AjaxIp+'/search',{params:{name:this.state.value}}).then(res=>{
            this.props.dispatch(init(res.data))
            this.setState({
                musics:res.data
            })
        })
    }
}
function filter (state){
    return {
        state
    }
}
export default connect(filter)(Search);