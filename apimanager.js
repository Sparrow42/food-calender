//ホーム画面（カレンダー）起動時　＆　日付選択時

//・リクエスト
//方式：get
//url -> /api/food/detail?user_id=*?date=*
//?dateの例 -> 2021-03-05 (0埋めあり)

// ↓のコードは一旦なし。
// const obj = { food_on_date: {} }

// for(let i=0; i<records.length; i++){
//     if( !(records[0] in obj.food_on_date) ){
//         obj.food_on_date[records[i][0]] = []
//     }
//     obj.food_on_date.records[i][0].push({food_name: records[i][1], image: records[i][2]})
// }

//・レスポンス
const res = {
    food_list: [
      {
        id: 1,
        food_name: 'プリン',
        image: '/img/food_pudding.png'
      },
      {
        id: 2,
        food_name: 'ラーメン',
        img: '/img/food_ramen.png'
      }
      //....
    ]
}

// 食べ物実績の新規登録
// 方式：post
// url      -> /api/food/register
// req.body -> date, food_name(*), detail, calorie, image, flag_favorite(boolean)
// res      -> なし？

// 食べ物実績の更新
// 方式：post
// url      -> /api/food/:foodId?edit=1
// req.body -> food_name(*), detail, calorie, image, flag_favorite(boolean)
// res      -> なし？

// 食べ物実績の削除
// 方式：get
// url -> /api/food/:foodId?delete=1
// res -> なし？

// 食べ物実績の新規登録
// 方式：post
// url      -> /api/food/register
// req.body -> food_name(*), detail, calorie, image, flag_favorite(boolean)
// res      -> なし？

// My食べ物実績のリスト参照
// 方式：get
// url -> /api/myfood/list

// ユーザー登録
// 方式：post
// /api/user/register
// 

// ユーザー編集
// 方式：post
// /api/user/:userId?edit=1

// ログイン
// 方式：
// /api/user/login

// ログアウト
// /api/user/logout