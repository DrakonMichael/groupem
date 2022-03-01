import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faPlay } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import TableView from "./components/TableView";
import SettingsView from "./components/SettingsView"
import {useEffect, useState} from "react";

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const delay = (n) => new Promise( r => setTimeout(r, n));


function App() {
    const [isTableView, setIsTableView] = useState(true);
    const [groups, setGroups] = useState([]);
    const [groupCount, setGroupCount] = useState(1);
    const [studentList, setStudentList] = useState([]);
    let ShownView = (isTableView) ? TableView : SettingsView;

    const generateGroups = async () => {
        setGroups([]);
        let g = new Array(groupCount);
        let sList = [...studentList]; // shallow copy

        shuffle(sList);
        for(let i = 0; i < sList.length; i++) {
            if(!g[i % groupCount]) g[i % groupCount] = [];
            g[i % groupCount].push(sList[i]);

        }
        setGroups(g);

    }

    useEffect(() => {
        setStudentList(["Michael K", "Abhi R", "Rishab I", "Hewitt L"])
    }, [])

    useEffect(() => {
        console.log("students", studentList);
    }, [studentList])

  return (
    <div className={"app"}>
      <div className={"top-bar"}>
        <div className={"title-text"}>Group'em</div>
        <div className={"settings-button-container"} onClick={() => {setIsTableView(!isTableView)}}>
            <div className={"settings-button"} >
                <FontAwesomeIcon icon={faGear} /> Settings
            </div>
        </div>
      </div>
        <div className={"context-bar"}>
            <div className={"subtitle-text"}>Sample Set 1 : Group</div>
            <div className={"go-button-container"} onClick={() => {
                    generateGroups();
                }}>
                <div className={"go-button"} >
                    <FontAwesomeIcon icon={faPlay} /> GO
                </div>
            </div>
        </div>
        <ShownView data={{groups: groups, students: studentList}} studentCallback={setStudentList} groupSizeCallback={setGroupCount}/>


        <div className={"footer-bar"}>
            Michael Karpov, BHS Class of 2023 / Support me on <a href={"https://github.com/DrakonMichael"}>github</a>.
        </div>

    </div>
  );
}

export default App;
