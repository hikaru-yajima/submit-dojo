(() => {
  "use strict";
  // イベント: app.record.create.change.提案プラン
  // ︎入力: ①提案プランの値　②今日の日付
  // ︎加工: 提案プランの値に合わせて条件分岐し日付を操作する
  // ︎出力： 結果を日付フィールドに挿入

  // task6 行を追加してテキストを指定したフィールドにいれるループをすればできそう
  kintone.events.on(
    ["app.record.create.show", "app.record.edit.show"],
    (event) => {
      console.log(event);

      const newRowActions = [
        "あくなき探求",
        "不屈の心体",
        "理想への共感",
        "心を動かす",
        "知識を増やす",
        "公明正大",
      ];

      const tableName = event.record.Table.value;

      const Actions = newRowActions.forEach((action) => {
        console.log(newRowActions);
        tableName.push({
          value: {
            Action5: {
              type: "DROP_DOWN",
              value: [action],
            },
            課題: {
              type: "MULTI_LINE_TEXT",
              value: "",
            },
            状況: {
              type: "CHECK_BOX",
              value: ["未振り返り"],
            },
          },
        });
      });
      tableName.shift();
      // ここに一個づついれて変数化する（const なんとか）     なんとかを配列に入れて、イベントの正しいオブジェクトの中に代入する(
      //    =>)
      //       最後にreturn eventってかくと追加される

      return event;
    }
  );
})();
// 一列作って、それを複製する
