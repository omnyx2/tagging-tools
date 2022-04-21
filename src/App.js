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
const csvDataState = atom({
  key: "csvDataState",
  default: [],
});

function CsvReader() {
  const [csvData, setCsvData] = useRecoilState(csvDataState);

  return (
    <CSVReader
      parserOptions={{ header: false }}
      onFileLoaded={(data, fileInfo) => setCsvData(data)}
    />
  );
}

const csvDataReaderState = selector({
  key: "csvDataReader",
  get: ({ get }) => {
    const data = get(csvDataState);
    return data;
  },
});
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
    <div className="csv-data  w-3/6">
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

function Main() {
  return (
    <div className="App">
      <Header className="App-header" />
      Tagging Tools
      <div className="main-tools-container flex">
        <div className="csv">
          <CsvReader />
          <CsvShowing />
          <Pagenation />
          <Table />
        </div>
        <div className="left-container">
          <div className="article-container">Article</div>
          <Iframe
            url="http://www.youtube.com/embed/xDMP3i36naA"
            width="450px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />

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
