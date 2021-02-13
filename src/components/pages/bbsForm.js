import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'

// 書き込みフォームのコンポーネントを定義 --- (*1)
export class BBSForm extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        name: '',
        body: ''
      }
    }
    // テキストボックスの値が変化した時の処理
    nameChanged (e) {
      this.setState({name: e.target.value})
    }
    bodyChanged (e) {
      this.setState({body: e.target.value})
    }
    // Webサーバに対して書き込みを投稿する --- (*2)
    post (e) {
      request
        .get('/api/write')
        .query({
          name: this.state.name,
          body: this.state.body
        })
        .end((err, data) => {
          if (err) {
            console.error(err)
          }
          this.setState({body: ''})
          if (this.props.onPost) {
            this.props.onPost()
          }
        })
    }
    render () {
      return (
        <div style={styles.form}>
          名前:<br />
          <input type='text' value={this.state.name}
            onChange={e => this.nameChanged(e)} /><br />
          本文:<br />
          <input type='text' value={this.state.body} size='60'
            onChange={e => this.bodyChanged(e)} /><br />
          <button onClick={e => this.post()}>発言</button>
        </div>
      )
    }
  }

const styles = { // スタイルを定義
    form: {
        padding: 12,
        border: '1px solid silver',
        backgroundColor: '#F0F0F0'
    }
}

/* 

export class BBSForm extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        name: '',
        body: ''
      }
    }
    // テキストボックスの値が変化した時の処理
    nameChanged (e) {
      this.setState({name: e.target.value})
    }
    bodyChanged (e) {
      this.setState({body: e.target.value})
    }
    // Webサーバに対して書き込みを投稿する --- (*2)
    post (e) {
      request
        .get('/api/write')
        .query({
          name: this.state.name,
          body: this.state.body
        })
        .end((err, data) => {
          if (err) {
            console.error(err)
          }
          this.setState({body: ''})
          if (this.props.onPost) {
            this.props.onPost()
          }
        })
    }
    render () {
      return (
        <div style={styles.form}>
          名前:<br />
          <input type='text' value={this.state.name}
            onChange={e => this.nameChanged(e)} /><br />
          本文:<br />
          <input type='text' value={this.state.body} size='60'
            onChange={e => this.bodyChanged(e)} /><br />
          <button onClick={e => this.post()}>発言</button>
        </div>
      )
    }
  }

const styles = { // スタイルを定義
    form: {
        padding: 12,
        border: '1px solid silver',
        backgroundColor: '#F0F0F0'
    }
}

*/