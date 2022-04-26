import { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";
import Iframe from "react-iframe";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { CSVLink } from "react-csv";
import { HeadCell, Row, Rows, Table } from "./components/cell/Cell";
import ReactTagsComponent from "./components/tags";
import { current } from "immer";

const csvDataState = atom({
  key: "csvDataState",
  default: []
});

const csvDataReaderState = selector({
  key: "csvDataReader",
  get: ({ get }) => {
    const data = get(csvDataState);
    return data;
  },
});

// 현재 Url을 저장하는 atom
const currentItemState = atom({
  key: "currentItemState",
  default: {
    next: "",
    before: "",
    current: "",
    back: "",
    front: "",
    history: [],
  },
})

//Recoil의 Setter의 역활은 데이터를 세팅하는 것에서 멈춘다. 단일 책임 에러는 에초에 상위 로직에서 처리해야한다.
const currentItemReaderState = selector({
  key: "currentUrlStateReader",
  get: ({ get }) => {
    const data = get(currentItemState);
    return data;
  },
  set: ({set}, newValue) => set(currentItemState, newValue),
  // 데이터의 위치를 배열에 저장

});


// const tempCelsius = selector({
//   key: 'tempCelsius',
//   get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,
//   set: ({set}, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),
// });

// const currentUrlReaderState = selector({
//   key: "currentUrlReader",
//   get: ({ get }) => {
//     const data = get(currentUrlState);
//     return data;
//   },
// });

// const [currentUrl, setCurrentUrlState] = useRecoilState(currentUrlState)
// const currentFullUrl = useRecoilValue(currentUrlReaderState)

function CsvReader() {
  const [csvData, setCsvData] = useRecoilState(csvDataState);
 
  return (
    <CSVReader
      parserOptions={{ header: false }}
      onFileLoaded={(data, fileInfo) => setCsvData(data)}
    />
  );
}


function CsvDownloading() {
  const csvData = useRecoilValue(csvDataReaderState);
  return (
    <div className="csv-data">
      <CSVLink data={csvData}>Download me</CSVLink>
    </div>
  );
}

function CsvShowing() {
  const csvData = useRecoilValue(csvDataReaderState);
  console.log(csvData[0]);

  return (
    <div className="csv-data">
      <Row data={csvData[0]} idx={0} type={"header"} />
      <Rows data={csvData} type={"body"} />
    </div>
  );
}

function Header() {
  return <div className="app-header">Header</div>;
}

function Pagenation() {
  return <div className="pagenagtion">1,2,3,,,,10</div>;
}

function ContentButtons(){

  function NextUrl(NextUrl){
    if ( NextUrl !== "" ){
      // Set Current url to next url set
      // Set  Url to 
      // Set Current url to back url set
      // Set BackUrl to CurrentUrl
    } else {
      // Pop up Not
    }
  }
  function BeforeUrl(BeforeUrl){
    if ( BeforeUrl !== "" ){
      // SetCurrent url to back url set
      // SetCurrent url to Next url set
      // Set BackUrl from urls
      // Set FrontURL from urls
    } else {
      // Pop up Not
    }
  }
  function BackUrl(BeforeUrl){
    if ( BeforeUrl !== "" ){
      // SetCurrent url to back url set
      // SetCurrent url to Next url set
      // Set BackUrl from urls
      // Set FrontURL from urls
    } else {
      // Pop up Not
    }
  }
  function FrontUrl(BeforeUrl){
    if ( BeforeUrl !== "" ){
      // SetCurrent url to back url set
      // SetCurrent url to Next url set
      // Set BackUrl from urls
      // Set FrontURL from urls
    } else {
      // Pop up Not
    }
  }


  return(
    <div className="grid grid-cols-4 grid-flow-rows gap-4 ">
      <button className="p-3 bg-slate-300">
        Before
      </button>
      <button className="p-3 bg-blue-200"> 
        Next
      </button>
      <button className="p-3 bg-slate-300">
        Back
      </button>
      <button className="p-3 bg-slate-300">
        Front
      </button>
    </div>
  )
}




function Main() {
  
  const urls = [
    "https://gall.dcinside.com/board/view/?id=webtoon&no=1411040",
    "https://gall.dcinside.com/board/view/?id=webtoon&no=1411041",
    "https://gall.dcinside.com/board/view/?id=webtoon&no=1411042",
    "https://gall.dcinside.com/board/view/?id=webtoon&no=1411043",
  ]
  const [currentItem, setCurrentItemState] = useRecoilState(currentItemState)
  // useEffect(() => {
    
  //   setCurrentUrlState({...currentUrl, current: urls[0]})
  // })
  return (
    <div className="App">
      <Header className="App-header" />
      Tagging Tools
      <div className="main-tools-container flex">
        <div className="csv  w-3/6">
          <CsvReader />
          <CsvShowing />
          <Pagenation />
          <Table />
        </div>
        <div className="left-container  w-3/6">
          <div className="article-container">Article</div>
          <Iframe
            url={currentItem.current}
            width="100%"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
          <ContentButtons/>

          <div className="tagging">
            <ReactTagsComponent></ReactTagsComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </div>
  );
}
export default App;
