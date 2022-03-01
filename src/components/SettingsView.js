import Table from "./Table";

export default function SettingsView(props) {

    const {groups, students} = props.data;


    return (
        <div className={"table-view"}>
            <div className={"set-row"}>
                <div className={"set-col"}>
                    <div className={"settings-title"}>General</div>
                </div>
                <div className={"set-col"}>
                    <div className={"settings-title"}>Students</div>
                    <div className={"set-row"} style={{height: "95%"}}>
                        <div className={"student-list"}>
                            {students.map((s, ind) => {
                                return <div className={"settings-student-label-container"}><div className={"student-label-remove"} onClick={() => {
                                    let ss = [...students];
                                    ss.splice(ind, 1);
                                    props.studentCallback(ss);
                                }}>X</div><input onInput={(e) => {
                                    let ss = [...students];
                                    ss[ind] = e.target.value;
                                    props.studentCallback(ss);
                                }
                                } key={ind} className={"settings-student-label"} value={s}/></div>
                            })}
                            <div className={"student-label-add"} onClick={() => {
                                let ss = [...students];
                                ss.push("New Student")
                                props.studentCallback(ss);
                            }}>+ ADD STUDENT</div>
                        </div>
                        <div className={"settings-subcol"}>
                            <div className={"settings-title"}>Class Presets</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}