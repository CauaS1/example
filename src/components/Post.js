import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './post.css';
import User from '../icon/user.svg';

import * as postAction from '../actions/index';

import { FaHeart, FaRetweet } from 'react-icons/fa';

function Post(props) {
  const [inputText, setInputText] = useState("");
  function handleOnChange(e) {
    setInputText(e.target.value);
  }

  function handleAddPost(e) {
    e.preventDefault()
    const text = inputText;
    props.addPost(text);
    setInputText('')
  }

  function handleRetweet(id) {
    props.retweet(id);
  }


  // function handleLikeColor() {
  //   // setLike
  // }

  return (
    <div className="container">
      <form className="input-container">
        <input type="text"
          placeholder="Write what are you thinking"
          onChange={handleOnChange}
          value={inputText}
        />
        <button onClick={handleAddPost} type="submit">
          Post
        </button>
      </form>

      <div className="posts-container">
        {props.post.postReducer.map(post => {
          return (
            <div className="post" key={post.id}>
              {console.log(post)}
              <div className="top-content">
                <div className="photo-container">
                  <div className="img">
                    <img src={User} alt="img" />
                  </div>
                </div>

                <div className="info-container">
                  <div className="name-container">
                    <h4>CauaS1</h4>
                  </div>
                  <p>{post.text}</p>
                </div>
              </div>

              <div className="bottom-content">
                <div onClick={() => handleRetweet(post.id)} >
                  <FaRetweet size={20} style={{ color: post.retweet ? "#35e95f" : "#ccc" }} />
                </div>

                <div onClick={() => { }} >
                  <FaHeart size={17} style={{ color: post.like ? "#ff304f" : "#ccc" }} />
                </div>

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

