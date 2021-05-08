import React from 'react'
import './Feed.css'
import PropTypes from 'prop-types';

import Post from "./Post";

export default class FeedContainer extends React.Component {

    render() {
        return (
            <div className={'app-main-container'}>

                {this.props.posts.map(post =>
                    <div className={'feed-container-element'}>
                        <Post author={post.author} date={post.date} title={post.title} text={post.text} isEditable={post.isEditable}/>
                    </div>
                )}

            </div>
        );
    }
}

FeedContainer.propTypes = {
    posts: PropTypes.array,
}