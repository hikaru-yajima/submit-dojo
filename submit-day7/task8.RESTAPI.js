(() => {
    "use strict";
//     // イベント: app.record.create.change.提案プラン
    // ︎入力: ①提案プランの値　②今日の日付
    // ︎加工: 提案プランの値に合わせて条件分岐し日付を操作する
    // ︎出力： 結果を日付フィールドに挿入

    kintone.events.on(
      ["app.record.create.show", "app.record.edit.show"],
      async (event) => {

      const body = {
        app: kintone.app.getId()
      };

      const resp = await kintone.api(kintone.api.url('/k/v1/form.json', true), 'GET', body);
      // console.log(resp);

      const newRowActions = resp.properties[0].fields[0].options
      const tableName = event.record.Table.value;

      const Actions = newRowActions.forEach((actions) => {
        // console.log(newRowActions);
        tableName.push({
          value: {
            Action5: {
              type: "DROP_DOWN",
              value: [actions],
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
        return event;
    })
  })();