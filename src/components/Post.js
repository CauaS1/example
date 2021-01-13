import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as postAction from '../actions/index';

function Post(props) {
  const [inputText, setInputText] = useState("")
  console.log(props);

  function handleOnChange(e) {
    setInputText(e.target.value);
  } 

  function handleAddPost() {
    const text = inputText;
    console.log(text)

    props.addPost(text);
  }


  return (
    <div>
      {/* {props.post.postReducer.map(posts => {
        return <h1 key={posts.id} >{posts.text}</h1>
      })} */}

      <h2>{inputText}</h2>
      <input type="text"
        placeholder="Write what are you thinking" 
        onChange={handleOnChange}
        value={inputText}
      />
      <button onClick={handleAddPost}>Click here</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    post: state
  }
}

const mapDispatchToProps = dispatch => {
  bindActionCreators(postAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

