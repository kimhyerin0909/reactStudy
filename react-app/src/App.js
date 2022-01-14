import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
<<<<<<< HEAD
import UpdateContent from './components/UpdateContent';
=======
>>>>>>> 5a5b4fb0a4dd5c56c1cbe1d42932da0d0d25b9a8

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3; // UI에 영향을 주지 않는 정보이기 때문에 state에 넣지 않음
    this.state = {
      mode:'welcome',
      selected_content_id : 2,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
<<<<<<< HEAD

  getReadContent() {
    var i = 0;
    while(i < this.state.contents.length) {
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent() {
=======
  render() {
    console.log('App render');
>>>>>>> 5a5b4fb0a4dd5c56c1cbe1d42932da0d0d25b9a8
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
<<<<<<< HEAD
    } else if(this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id = this.max_content_id + 1;
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, desc:_desc})
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        })
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>
    } else if(this.state.mode === 'update') {
      var _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          var _contents = Array.from(this.state.contents); // 배열 복제
          var i = 0;
          while(i < _contents.length) {
            if(_contents[i].id === _id) {
              _contents[i] =  {id:_id, title:_title, desc:_desc};
              break;
            }
            i = i + 1;
          }
          this.setState({
            contents:_contents,
            mode:'read'
          })
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {
    console.log('App render');
=======
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read') {
      var i = 0;
      while( i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this. state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat(
          // 배열에 데이터를 추가하는 방법 1.push 2.concat
          // push는 원본 배열을 수정 -> 사용 X
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          contents:_contents
        })
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>
    }
>>>>>>> 5a5b4fb0a4dd5c56c1cbe1d42932da0d0d25b9a8
    console.log("render", this);
    return (
      <div className='App'>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode : 'welcome'});
          }.bind(this)}
        ></Subject>
        <TOC data={this.state.contents}
        onChangePage= {
          function(id) {
            this.setState({mode : 'read',
          selected_content_id:Number(id)});
          }.bind(this)
        }
        ></TOC>
        <Control onChangeMode={function(_mode){
<<<<<<< HEAD
          if(_mode === 'delete') {
            if(window.confirm('really?')) { // 확인을 누르면 true를 반환
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length) {
                if(_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i,1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('deleted!');
            }
          } else {
            this.setState({ 
              mode:_mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}
=======
          this.setState({ 
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
>>>>>>> 5a5b4fb0a4dd5c56c1cbe1d42932da0d0d25b9a8
      </div>
    )
  }
}

export default App;
