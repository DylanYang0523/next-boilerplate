import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getCommentStart } from '@actions/comment';
import { setSubtitle } from '@actions/video';

const mapStateToProps = state => ({
  video: state.video,
  comment: state.comment,
});

const mapDispatchToProps = dispatch => ({
  getCommentStart: () => dispatch(getCommentStart()),
  setSubtitle: subtitle => dispatch(setSubtitle(subtitle)),
});

@connect(mapStateToProps, mapDispatchToProps)
class Video extends React.Component {
  static async getInitialProps({ store }) {
    store.dispatch(getCommentStart());
    return {};
  }
  constructor() {
    super();
    this.changeVideoSubtitle = this.changeVideoSubtitle.bind(this);
  }
  changeVideoSubtitle() {
    const { setSubtitle } = this.props;
    const value = this.subtitleInput && this.subtitleInput.value.trim();
    if (value) setSubtitle(value);
  }
  render() {
    const { video, getCommentStart } = this.props;
    return (
      <div>
        <Link href="/about">
          <a>Go to About Page.</a>
        </Link>
        <h1>This is Video Page.</h1>
        <h3>{video.subtitle}</h3>
        <input 
          placeholder="subtitle..." 
          ref={ref => this.subtitleInput = ref} 
        /> &nbsp;
        <button onClick={this.changeVideoSubtitle}>Change Subtitle With Redux.</button>
        <hr />
        <h3>Async Comment Data:</h3>
        { this.renderComment() }
        <button onClick={getCommentStart}>
          Async Get Comment.
        </button>
      </div>
    );
  }
  renderComment() {
    const { comment } = this.props;
    return (
      <div>
        {
          comment.data.map((item) => {
            return (
              <p key={item.id}>
                { item.body }
              </p>
            );
          })
        }
      </div>
    )
  }
}

export default Video;