(() => {
  "use strict";
  // イベント: "app.record.create.show", "app.record.create.change.日付, サイボウズ製品, 管理番号", "app.record.edit.change.日付, サイボウズ製品, 管理番号"
  // ︎入力: ①今日の日付  サイボウズ製品  管理番号の値（文字列結合）
  // ︎加工: 結合文字列の値に合わせて条件分岐（一致していたらエラー出す）
  // ︎出力： 結果を日付フィールドに挿入

  // kintoneの設定の中のJSファイルのリンクに [datafns cdn]とネットで検索した時に一番最初にでてくるやつのリンクをはる（一番最初に読み込むために一番最初におく）
  kintone.events.on(
    ["app.record.create.show","app.record.edit.show", "app.record.create.change.日付", "app.record.create.change.サイボウズ製品", "app.record.create.change.管理番号"],
    (event) => {
      console.log(event);
// 文字列結合に使う日付フォーマット（これはdnsを使う   日付から値を持ってきてそれのフォーマットを変えたものを変数に）とサイボウズ製品（選択肢と対応させて略称という変数を作る）
      const formatDate = dateFns.format(event.record['日付'].value, 'yyyyMMdd');
      console.log(formatDate);
      const products = event.record['サイボウズ製品'].value
      console.log(products);
      let ryakusyou;
      switch(products) {
        case 'kintone':
          ryakusyou = 'KN';
          break;
        case 'Garoon':
          ryakusyou = 'GR';
          break;
        case 'サイボウズ Office':
            ryakusyou = 'OF';
            break;
        case 'Mailwise':
            ryakusyou = 'MW';
            break;
     }
      const kanrinumber = event.record['管理番号'].value
      console.log(kanrinumber);
// // // 文字列結合をevent.record.重複禁止項目_文字列.valueに代入する処理
      const ketugoumoji = [formatDate,ryakusyou,kanrinumber];
      console.log(ketugoumoji);
      event.record['重複禁止項目_文字列'].value = ketugoumoji.join('-');
      event.record['重複禁止項目_文字列'].disabled = true;
//     return event;
//   }
      return event;
  });
})();

// datefnsが認識されない、他のレコードの文字列結合と同じものがあったらをrestAPIを使わずにやる方法がわからない
