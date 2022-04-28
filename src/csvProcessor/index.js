import { index } from "d3";

function rowSelectorOf2DArrayCSV(key, header) {
  console.log(key, header);
  const index = header.findIndex((e) => e === key);
  return index;
}

// header가 포함된 csv를 넘겨주면 작업
export function CSVToJson(data) {
  const headers = [...data[0]];
  const newData = [];
  const tempData = data.slice(1);
  let shot = [];
  for (shot in data) {
    let snippet = {};
    headers.map((e, i) => {
      snippet[e] = shot[i];
    });
    console.log(snippet);
    newData.push(snippet);
  }
  console.log("LLL:");
  console.log(newData);
  return newData;
}
// csv파일을 받아서 url과 나머지 데이터를 분리하고 dict 형식으로 만들어내는것
export function dettach2DArrayCSV(key, data) {
  const keyIndex = rowSelectorOf2DArrayCSV(key, data[0]);
  const sideData = [];
  const newData = [];

  data.map((e, i) => {
    newData.push(e.filter((el, i) => keyIndex !== i));
    sideData.push(e[keyIndex]);
  });
  return {
    sideData,
    newData,
  };
}

// csv파일을 받아서 url과 나머지 데이터를 분리하고 dict 형식으로 만들어내는것
export function autoProcessingCSV(key, rawData) {
  let data = dettach2DArrayCSV(key, rawData);
  let sd = CSVToJson(data.sideData);
  let nd = CSVToJson(data.newData);
  const result = {
    sideData: sd,
    newData: nd,
  };

  return result;
}

// // 이상한 데이터 정제 할려고 했으나 이건 파이썬에서 처리를 해주어야한다. 그게 맞음, condition /mga
// export function deleteRowByCondition(condition, keyIndex, data) {
//   const newData = [];
//   const sideData = [];
//   const re = new RegExp(condition);

//   data.map((e, i) => {
//     const result = re.text(e[keyIndex]);
//     if (!result) sideData.push(e[keyIndex]);
//     return result;
//   });

//   return {
//     sideData,
//     newData,
//   };
// }
