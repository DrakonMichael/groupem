
export default function Table(props) {

    const {studentList, groupName} = props;


    return (<div className={"table-container"}>
        <div className={"table-header"}>{groupName}</div>
        <div className={"table-body"}>
            {studentList.map((student) => {
                return <div className={"table-student-label"} key={student}>{student}</div>;
            })}

        </div>
    </div>);
}