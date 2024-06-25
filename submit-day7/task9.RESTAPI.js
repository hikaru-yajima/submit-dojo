(() => {
    'use strict';
    // イベント→保存する時（登録、編集）
    kintone.events.on( 'app.record.create.submit', async (event) => {
        const newData = event.record.重複禁止項目.value;
        const query = `重複禁止項目 = "${newData}"`;
        console.log(query);
        console.log(newData);
        // 複数のレコードを取得する
        const resp = await kintone.api(kintone.api.url('/k/v1/records.json'),
        'GET', {
            app: 18,
            query: query
        });
        const records = resp.records;
        console.log(resp);
        // 配列の中に値（数値 record.length）があったら＝同じ文字列が含まれていたら
        if (records.length > 0) {
            const submitConfirmed = window.confirm('重複するレコードが存在します。保存しますか？');
            if (submitConfirmed) {
             console.log('OK');
             return event;
            } else {
            return false;
             };
        };
    });
    })();
    // asyncは関数の前に入れる