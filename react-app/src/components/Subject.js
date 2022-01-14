import React, { Component } from 'react';

class Subject extends Component {
    render() {
        console.log('Subject render');
        return(
        <header>
            <h1><a href='/' onClick={function(e) {
                e.preventDefault(); // 태그의 기본적인 동작을 하지 못 하게 함
                this.props.onChangePage();
            }.bind(this)}
          >{this.props.title}</a></h1>
            {this.props.sub}
            </header>
            );
        }
    }

export default Subject;