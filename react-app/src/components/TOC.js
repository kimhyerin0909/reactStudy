import React, { Component } from 'react';

class TOC extends Component {
<<<<<<< HEAD
    shouldComponentUpdate(newProps, newState) { // 어떠한 컴포넌트의 render함수가 실행돼야 하는지, 실행되지 않아야 하는지를 리액트 개발자가 결정할 수 있는 특수한 함수
        console.log("===>TOC render shouldComponentUpdate",
        newProps.data, // 바뀐 값
        this.props.data // 현재 값
        );
        if(this.props.data === newProps.data) {
            return false;
        }
        return true;
        // false : shouldComponentUpdate는 호출되지만 render 함수는 호출 안 됨
    }
    // -> 이 함수는 newProps, newState라는 두 개의 매개변수를 가짐
    // newProps : TOC 컴포넌트의 props가 바뀌었을 때 바뀐 값 / newState : state가 바뀌었을 때 바뀐 값

    render() {
        console.log("===>TOC render");
=======
    render() {
>>>>>>> 5a5b4fb0a4dd5c56c1cbe1d42932da0d0d25b9a8
        console.log('TOC render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length) {
            lists.push(<li key={data[i].id}>
                <a href={"/content/" + data[i].id}
                data-id = {data[i].id} // data-id라는 속성을 추가 후 id 값을 할당
                onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id);
                    // e.target : 이벤트가 발생한 태그를 가리킴 (여기선 a 태그)
                }.bind(this)}>
                    {data[i].title}</a>
                </li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}

export default TOC;