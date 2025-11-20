import { useEffect } from "react";
import { useState } from "react";
import { FixedSizeList as List } from "react-window";
// const items = Array.from({ length: 1000 }, (_, i) => `Task #${i + 1}`);

const VirtualizedList = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setInfo(data.users));
  }, []);
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      {info[index]?.firstName} {info[index]?.lastName}
      {/* Item #{index} */}
    </div>
  );

  return (
    <div style={{ height: "300px", width: "300px" }}>
      <List
        height={300} // height of the list viewport
        itemCount={info.length}
        itemSize={50} // height of each item
        width={400} // width of the list
      >
        {Row}
        {/* <Row style={{ height: "300px", width: "300px" }} /> */}
      </List>
    </div>
  );
};

export default VirtualizedList;
