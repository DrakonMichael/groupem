import Table from "./Table";

export default function TableView(props) {

    const {groups, students} = props.data;

    let rows = 1;

    if(groups.length > 3) {
        rows = Math.floor(groups.length/3) + 1;
    }

    return (
        <div className={"table-view"}>

            {[...Array(rows)].map((_, j) => {
                return(<div className={"table-row"} key={j}>
                    {groups.slice(j*3, j*3 + 3).map((g, i) => {
                        return <Table groupName={"Group " + (i+1 + (j*3))} key={i} studentList={g}/>
                    })}
                </div>);

            })}


        </div>
    );
}

/*
                <div className={"table-row"}>
                    {groups.map((g, i) => {
                        return <Table groupName={"Group " + (i+1)} studentList={g}/>
                    })}
                </div>
 */