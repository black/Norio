import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '# Hello World'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    hljs.highlightBlock(document.querySelector('code.language-markdown'));
  }

  componentDidUpdate() {
    hljs.highlightBlock(document.querySelector('code.language-markdown'));
  }

  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <ReactMarkdown source={this.state.value} renderers={{ code: (props) => <code className={`language-markdown`} {...props} /> }} />
      </div>
    );
  }
}

export default Editor;