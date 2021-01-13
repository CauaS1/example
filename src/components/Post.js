import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './post.css';
import User from '../icon/user.svg';

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
    setInputText('')
  }


  return (
    <div className="container">
      <div className="input-container">
        <input type="text"
          placeholder="Write what are you thinking"
          onChange={handleOnChange}
          value={inputText}
          required
        />
        <button onClick={handleAddPost} type="submit">
          Post
        </button>
      </div>

      <div className="posts-container">
        {props.post.postReducer.map(post => {
          return (
            <div className="post">
              <div className="photo-container">
                <div className="img">
                  <img src={User} alt="img"/>
                </div>
              </div>

              <div className="info-container">
                <div className="name-container">
                  <h4>CauaS1</h4>
                </div>
                <p key={post.id}>{post.text}</p>
              </div>
            </div>
          )
        })}
      </div>

    </div >
  )
}

const mapStateToProps = state => {
  return {
    post: state
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(postAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

