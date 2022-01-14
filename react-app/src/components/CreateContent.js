import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        console.log('CreateContent render');
        return (
            <article>
                <h2>Create</h2>
                {/* action : 데이터를 어디로 전송할 것인지 */}
                {/* 사용자가 데이터를 추가, 수정, 삭제할 때는 method를 post로 */}
                <form action='/create_process' method='post' onSubmit={function(e) {
                    e.preventDefault(); // form은 action이 가르키는 페이지로 이동함 -> 지금은 리액트니까 X
                    this.props.onSubmit(
                        //e.target은 input, textarea 태그를 포함한 form 태그를 가리킴
                        e.target.title.value, 
                        e.target.desc.value
                    ); // App 컴포넌트에 onSubmit props로 값들이 전달됨
                    alert("Submit!");
                }.bind(this)}
                >
                    <p><input type="text" name="title" placeholder='title'></input></p>
                    <p>
                        <textarea name='desc' placeholder='description'></textarea>
                    </p>
                    <p>
                        <input type='submit'></input>
                    </p>
                </form>
            </article>
        )
    }
}

export default CreateContent;