'use strict';
const response = axios.get('https://oykh3vmu623yt5rufrstzlyxyi0kitod.lambda-url.ap-northeast-1.on.aws/', {
  params: {
    id: 'dojo',
  }
}).then((response) => {
// console.log(response);
  const tableidran = document.getElementById('tableid');
  const data = response.data;
  // console.log(data);
  Object.keys(data).forEach((val) => {
    // trつくる
    const tr = document.createElement('tr');
    // tr.setAttribute('id', 'trid');
    // td,td,td,,,,つくる
    const tdday = document.createElement('td');
    // td.setAttribute('id', 'tdid');
    const tdctgr = document.createElement('td');
    // tdb.setAttribute('id', 'tdbid');
    // tdにデータたちを反映させる
    const tdcont = document.createElement('td');
    // tdc.setAttribute('id', 'tdcid');
    tdday.textContent = data[val].day.value;
    tdctgr.textContent = data[val].category.value;
    tdcont.textContent = data[val].content.value;
    switch (tdctgr.textContent) {
      case 'IR 情報':
        tdctgr.classList.add('highlightred');
        break;
      case '製品':
        tdctgr.classList.add('highlightgreen');
        break;
      case '企業情報':
        tdctgr.classList.add('highlightblue');
        break;
    }
    tr.appendChild(tdday);
    tr.appendChild(tdctgr);
    tr.appendChild(tdcont);
    // table.append
    tableidran.appendChild(tr);
    // if文でurl遷移の条件分岐
    const tdtgt = data[val].target.value;
    const tdurl = data[val].url.value;

      // if (tdtgt === '_self') {
      //   window.location.href = tdurl;
      // } else {
      //   window.open(tdurl, '_blank');
      // }

      const link = document.createElement('a');
      link.href = tdurl
      link.target = tdtgt
      link.textContent = tdcont.textContent
     tdcont.appendChild(link);
  });
  return;
});