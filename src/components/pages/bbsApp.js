import React from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';
import request from 'superagent'
import { BBSForm } from './bbsForm';

// メインコンポーネントを定義 --- (*3)
export class BBSApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }
  // コンポーネントがマウントされたらログを読み込む
  componentWillMount () {
    this.loadLogs()
  }
  // APIにアクセスして掲示板のログ一覧を取得 --- (*4)
  loadLogs () {
    request
      .get('/api/getItems')
      .end((err, data) => {
        if (err) {
          console.error(err)
          return
        }
        this.setState({items: data.body.logs})
      })
  }
  render () {
    // 発言ログの一つずつを生成する ---- (*5)
    const itemsHtml = this.state.items.map(e => (
      <li key={e._id}>{e.name} - {e.body}</li>
    ))
    return (
      <>
        <div>
          <BBSForm onPost={e => this.loadLogs()} />
          <p style={styles.right}>
            <button onClick={e => this.loadLogs()}>
            再読込</button></p>
          <ul>{itemsHtml}</ul>
        </div>
      </>
    )
  }
}

//<Header styles={styles} />
        

const styles = { // スタイルを定義
  h1: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 24,
    padding: 12
  },
  form: {
    padding: 12,
    border: '1px solid silver',
    backgroundColor: '#F0F0F0'
  },
  right: {
    textAlign: 'right'
  }
}
