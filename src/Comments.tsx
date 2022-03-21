import React from "react";
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";
import axios from "axios";
import { fakeData } from "./Model/FakeData";


interface CommentInfo {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    text: string;
}
export default function Comments() {
    const cache = React.useRef(
        new CellMeasurerCache({
            fixedWidth: true,
            defaultHeight: 100,
        })
    );
    const [comments, setComments] = React.useState<CommentInfo[]>([]);


    React.useEffect(() => {
        let comments = fakeData;
        console.log(comments.length)
        setComments(
            comments
        );
    }, []);

    return (
        <div className="Comments" >
            <h1>Comments</h1>
            <div style={{ width: "100%", height: "100vh" }}>
                <AutoSizer>
                    {({ width, height }) => (
                        <List
                            width={width}
                            height={height}
                            rowHeight={cache.current.rowHeight}
                            deferredMeasurementCache={cache.current}
                            rowCount={comments.length}
                            rowRenderer={({ key, index, style, parent }) => {
                                const comment = comments[index];

                                return (
                                    <CellMeasurer
                                        key={key}
                                        cache={cache.current}
                                        parent={parent}
                                        columnIndex={0}
                                        rowIndex={index}
                                    >
                                        <div className="comment mt-4 text-justify float-left">
                                            <h4>{comment.first_name}</h4> <span>{comment.email}</span> <br />
                                            <p>Comment: {comment.text}</p>
                                        </div>
                                    </CellMeasurer>
                                );
                            }}
                        />
                    )}
                </AutoSizer>
            </div>

            {/* <ul>
        {people.map((person) => (
          <li key={person.id}>
            <h2>{person.name}</h2>
          </li>
        ))}
      </ul> */}
        </div >
    );
}
