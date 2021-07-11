var express = require('express');
var router = express.Router();

var dball = require('../db/all.js');
var dbdo = require('../db/exec.js');

//カレンダー表示
router.get('/', async function(req, res) {
    const SQL = 
      "SELECT cal.do_date, exi.food_name, exi.image" 
      + " FROM foods_calendar AS cal"
      + " INNER JOIN foods_existing AS exi"
      + " ON cal.userid = exi.userid"
      + " WHERE cal.userid = " + req.query.user_id
      + " AND substr(cal.do_date,1,4) = " + date[0]
      + " AND substr(cal.do_date,6,2) = " + date[1]
      + " AND substr(cal.do_date,9,2) = " + date[2] + ";"
    let records = await dball.getAllRows(SQL);
  
    const obj = { food_on_date: {} }

    for(let i = 0; i < records.length; i++){
        if( !(records[0] in obj.food_on_date) ){
            obj.food_on_date[records[0]] = []
        }
       obj.food_on_date.records[i][0].push({food_name:records[i][1], image: records[i][2]});
    }
});

//ユーザ参照
router.get('/', async function(req, res) {
    const SQL = 
      "SELECT userid, name, email, password" 
      + " FROM users"
      + " WHERE userid = " + req.query.user_id + ";";
    let records = await dball.getAllRows(SQL);

    const obj = { user: {} }

    if( !(records[0] in obj.user) ){
        obj.user[records[0]] = []
    }
    obj.user.records[0].push({name:records[1],email:records[2],password:records[3]});
});

//ユーザ登録
router.get('/', async function(req, res) {
    const SQL = 
    "INSERT INTO users("
    + " --ユーザーIDはシーケンス番号のため不要"
    + " update_date,    --更新日時"
    + " reg_date,       --登録日時"
    + " name,           --名前"
    + " email,          --メールアドレス"
    + " password        --パスワード"
    + " )"
    + " VALUES("
    + " CURRENT_TIMESTAMP,"
    + " CURRENT_TIMESTAMP,"
    + req.query.user_name + ","
    + req.query.user_mailAdress + ","
    + req.query.user_password + ");"
    await dbdo.exec(SQL);
});

//ユーザ更新
router.get('/', async function(req, res) {
    const SQL = 
    "UPDATE users"
    + " SET"
    + " update_date = CURRENT_TIMESTAMP"
    + " name = " + req.query.user_name + ",--名前"
    + " email = " + req.query.user_email + ",--メールアドレス"
    + " password = " + req.query.user_password + "--パスワード"
    + " WHERE userid = "+ req.query.user_user_id + "; --ユーザID"
    await dbdo.exec(SQL);
});

//ユーザ削除
router.get('/', async function(req, res) {
    const SQL = 
    "DELETE users"
    + " WHERE userid = "+ req.query.user_user_id + ";"
    await dbdo.exec(SQL);
});

//カレンダー情報参照(食べ物)
router.get('/', async function(req, res) {
    const SQL = 
      "SELECT id, memo" 
      + " FROM foods_calendar"
      + " WHERE userid = " + req.query.user_id
      + " AND do_date = " + req.query.date + ";"
    let records = await dball.getAllRows(SQL);

    const obj = { food_calendar: {} }

    for(let i = 0; i < records.length; i++){
        if( !(records[0] in obj.food_calendar) ){
            obj.food_calendar[records[0]] = []
        }
       obj.food_calendar.records[i][0].push({memo:records[i][1]});
    }
});

//カレンダー情報登録(食べ物)
router.get('/', async function(req, res) {
    const SQL = 
    "INSERT INTO foods_calendar("
    + " --固有IDはシーケンス番号のため不要"
    + " userid,         --ユーザーID"
    + " update_date,    --更新日時"
    + " reg_date,       --登録日時"
    + " do_date,        --実施日"
    + " memo            --メモ"
    + " )"
    + " VALUES("
    + req.query.user_user_id + ","
    + " date(CURRENT_TIMESTAMP),"
    + " date(CURRENT_TIMESTAMP),"
    + " req.query.date,"
    + req.query.calendar_memo + ");"
    await dbdo.exec(SQL);
});

//カレンダー情報更新(食べ物)
router.get('/', async function(req, res) {
    const SQL = 
    "UPDATE foods_calendar"
    + " SET"
    + " update_date = date(CURRENT_TIMESTAMP)"
    + " password = " + req.query.foods_calender_memo + "--パスワード"
    + " WHERE id = "+ req.query.foods_calendar_id + "; --固有ID"
    await dbdo.exec(SQL);
});

//カレンダー情報削除(食べ物)
router.get('/', async function(req, res) {
    const SQL = 
    "DELETE foods_calendar"
    + " WHERE id = "+ req.query.foods_calendar_id + "; --固有ID"
    await dbdo.exec(SQL);
});

//食べ物情報参照(日付別)
router.get('/', async function(req, res) {
    const SQL = 
    "SELECT id, food_name, detail, calorie, image, flag_favorite" 
    + " FROM foods_existing"
    + " WHERE foods_calendar_id in (;"
    + " SELECT id FROM foods_calendar"
    + " WHERE userid = " + req.query.user_id
    + " AND do_date = " + req.query.date + ";"
    let record = await dball.getAllRows(SQL);

    const obj = { food_calendar_part: {} }

    for(let i = 0; i < records.length; i++){
        if( !(records[0] in obj.food_calendar_part) ){
            obj.food_calendar_part[records[0]] = []
        }
       obj.food_calendar_part.records[i][0].push({food_name:records[i][1],detail:records[i][2],calorie:records[i][3],image:records[i][4],flag_existing:records[i][5]});
    }
});

//食べ物情報参照(一括)
router.get('/', async function(req, res) {
    const SQL = 
    "SELECT id, food_name, detail, calorie, image, flag_favorite" 
    + " FROM foods_existing"
    + " WHERE foods_calendar_id in (;"
    + " SELECT id FROM foods_calendar"
    + " WHERE userid = " + req.query.user_id + ";"
    let records = await dball.getAllRows(SQL);

    const obj = { food_calendar_all: {} }

    for(let i = 0; i < records.length; i++){
        if( !(records[0] in obj.food_calendar_all) ){
            obj.food_calendar_all[records[0]] = []
        }
       obj.food_calendar_all.records[i][0].push({food_name:records[i][1],detail:records[i][2],calorie:records[i][3],image:records[i][4],flag_existing:records[i][5]});
    }
});

//食べ物情報登録
router.get('/', async function(req, res) {
    const getIdSQL = 
    "SELECT id FROM foods_calendar"
    + " WHERE userid = " + req.query.user_id
    + " AND do_date = " + req.query.date + ";"
    let foodsCalendarId = await dball.getAllRows(getIdSQL);

    const SQL = 
    "INSERT INTO foods_existing("
    + " --固有IDはシーケンス番号のため不要"
    + " foods_calendar_id,  --食べ物カレンダーID"
    + " update_date,        --更新日時"
    + " reg_date,           --登録日時"
    + " food_name,          --食べ物名"
    + " detail,             --詳細"
    + " calorie,            --カロリー"
    + " image,              --写真"
    + " flag_favorite       --お気に入りフラグ"
    + " )"
    + " VALUES("
    + foodsCalendarId + ","
    + " date(CURRENT_TIMESTAMP),"
    + " date(CURRENT_TIMESTAMP),"
    + req.query.food_name + ","
    + req.query.detail + ","
    + req.query.calorie + ","
    + req.query.image + ","
    + req.query.flag_favorite + ");"
    await dbdo.exec(SQL);
});

//食べ物情報更新
router.get('/', async function(req, res) {
    const SQL = 
    "UPDATE foods_existing"
    + " SET"
    + " update_date = date(CURRENT_TIMESTAMP)"
    + " food_name = " + req.query.food_name + ",--パスワード"
    + " detail = " + req.query.detail + ",--詳細"
    + " calorie = " + req.query.calorie + ",--カロリー"
    + " image = " + req.query.image + ",--写真"
    + " flag_favorite = " + req.query.flag_favorite + "--お気に入りフラグ"
    + " WHERE id = "+ req.query.food_id + "; --固有ID"
    await dbdo.exec(SQL);
});

//食べ物情報削除
router.get('/', async function(req, res) {
    const SQL = 
    "DELETE foods_existing"
    + " WHERE id = "+ req.query.foods_calendar_id + "; --固有ID"
    await dbdo.exec(SQL);
});

//お気に入りに登録
router.get('/', async function(req, res) {
    const SQL = 
    "UPDATE foods_existing"
    + " SET"
    + " flag_favorite = 1"
    + " WHERE id = "+ req.query.id + "; --固有ID"
    await dbdo.exec(SQL);
});

//お気に入り登録解除
router.get('/', async function(req, res) {
    const SQL = 
    "UPDATE foods_existing"
    + " SET"
    + " flag_favorite = 0"
    + " WHERE id = "+ req.query.id + "; --固有ID"
    await dbdo.exec(SQL);
});

//カレンダー情報参照(運動)
router.get('/', async function(req, res) {
    const SQL = 
      "SELECT id, memo" 
      + " FROM exercises_calendar"
      + " WHERE userid = " + req.query.user_id
      + " AND do_date = " + req.query.date + ";"
    let records = await dball.getAllRows(SQL);

    const obj = { exercise_calendar: {} }

    for(let i = 0; i < records.length; i++){
        if( !(records[0] in obj.exercise_calendar) ){
            obj.exercise_calendar[records[0]] = []
        }
       obj.exercise_calendar.records[i][0].push({memo:records[i][1]});
    }
});

//カレンダー情報登録(運動)
router.get('/', async function(req, res) {
    const SQL = 
    "INSERT INTO exercises_calendar("
    + " --固有IDはシーケンス番号のため不要"
    + " exercises_calendar_id,         --ID"
    + " update_date,    --更新日時"
    + " reg_date,       --登録日時"
    + " do_date,        --実施日"
    + " memo            --メモ"
    + " )"
    + "VALUES("
    + req.query.user_id + ","
    + " date(CURRENT_TIMESTAMP),"
    + " date(CURRENT_TIMESTAMP),"
    + " req.query.date,"
    + req.query.calendar_memo + ");"
    await dbdo.exec(SQL);
});

//カレンダー情報更新(運動)
router.get('/', async function(req, res) {
    const SQL = 
    "UPDATE exercises_calendar"
    + " SET"
    + " update_date = date(CURRENT_TIMESTAMP)"
    + " , password = " + req.query.foods_calender_memo + "--パスワード"
    + " WHERE id = "+ req.query.foods_calendar_id + "; --固有ID"
    await dbdo.exec(SQL);
});

//カレンダー情報削除(運動)
router.get('/', async function(req, res) {
    const SQL = 
    "DELETE exercises_calendar"
    + " WHERE id = "+ req.query.foods_calendar_id + "; --固有ID"
    await dbdo.exec(SQL);
});

//運動情報参照(日付別)
router.get('/', async function(req, res) {
    const SQL = 
    "SELECT id, exercises_name, detail, image" 
    + " FROM exercises_existing"
    + " WHERE exercises_calendar_id in (;"
    + " SELECT id FROM exercises_calendar"
    + " WHERE userid = " + req.query.user_id
    + " AND do_date = " + req.query.date + ";"
    let record = await dball.getAllRows(SQL);

    const obj = { food_calendar_part: {} }

    for(let i = 0; i < records.length; i++){
        if( !(records[0] in obj.food_calendar_part) ){
            obj.food_calendar_part[records[0]] = []
        }
       obj.food_calendar_part.records[i][0].push({food_name:records[i][1],detail:records[i][2],calorie:records[i][3],image:records[i][4],flag_existing:records[i][5]});
    }
});

//運動情報参照(一括)
router.get('/', async function(req, res) {
    const SQL = 
    "SELECT id, exercises_name, detail, image" 
    + " FROM exercises_existing"
    + " WHERE exercises_calendar_id in (;"
    + " SELECT id FROM foods_calendar"
    + " WHERE userid = " + req.query.user_id + ";"
    let records = await dball.getAllRows(SQL);

    const obj = { food_calendar_all: {} }

    for(let i = 0; i < records.length; i++){
        if( !(records[0] in obj.food_calendar_all) ){
            obj.food_calendar_all[records[0]] = []
        }
       obj.food_calendar_all.records[i][0].push({food_name:records[i][1],detail:records[i][2],calorie:records[i][3],image:records[i][4],flag_existing:records[i][5]});
    }
});

//運動情報登録
router.get('/', async function(req, res) {
    const getIdSQL = 
    "SELECT id FROM exercises_calendar"
    + " WHERE userid = " + req.query.user_id
    + " AND do_date = " + req.query.date + ";"
    let exerciseCalendarId = await dball.getAllRows(getIdSQL);

    const SQL = 
    "INSERT INTO exercises_existing("
    + " --固有IDはシーケンス番号のため不要"
    + " exercises_calendar_id,  --ID"
    + " update_date,        --更新日時"
    + " reg_date,           --登録日時"
    + " exercises_name,     --運動名"
    + " detail,             --詳細"
    + " image               --写真"
    + " )"
    + " VALUES("
    + exerciseCalendarId + ","
    + " date(CURRENT_TIMESTAMP),"
    + " date(CURRENT_TIMESTAMP),"
    + req.query.exercises_name + ","
    + req.query.detail + ","
    + req.query.image + ");"
    await dbdo.exec(SQL);
});

//運動情報更新
router.get('/', async function(req, res) {
    const SQL = 
    "UPDATE exercises_existing"
    + " SET"
    + " update_date = date(CURRENT_TIMESTAMP),"
    + " exercises_name = " + req.query.food_name + ",--パスワード"
    + " detail = " + req.query.detail + ",--詳細"
    + " image = " + req.query.image + "--写真"
    + " WHERE id = "+ req.query.food_id + "; --固有ID"
    await dbdo.exec(SQL);
});

//運動情報削除
router.get('/', async function(req, res) {
    const SQL = 
    "DELETE exercises_existing"
    + " WHERE id = "+ req.query.exercises_calendar_id + "; --固有ID"
    await dbdo.exec(SQL);
});
