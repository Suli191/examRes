import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

export const GetPost = () => {
  const [getData, setData] = useState();
  const [valueId, setValueId] = useState(0);

  const get = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/?userId=${valueId}`
    );
    const data = await response.json();
    setData(data);
    // console.log("data: ", data);
  };

  useEffect(() => {
    get();
  }, [valueId]);

  function changeHandler(e) {
    setValueId(e.target.value);
  }

  const setBgColor = id => {
    switch (id) {
      case 1:
        return "blue";
      case 2:
        return "red";
      case 3:
        return "yellow";
      case 4:
        return "pink";
      case 5:
        return "green";
      case 6:
        return "white";
      case 7:
        return "aquamarine";
      case 8:
        return "blueviolet";
      case 9:
        return "violet";
      case 10:
        return "red";

      default:
        return id;
    }
  };

  return (
    <div>
      <input type="number" value={valueId} onChange={changeHandler} />
      <div>
        {getData &&
          getData.map(el => (
            <Container
              key={el.id}
              backgroundColor={() => setBgColor(el.userId)}
            >
              <p>{el.title}</p>
            </Container>
          ))}
      </div>
    </div>
  );
};

const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  border: 3px solid;
  margin-bottom: 10px;
  /* color: whit */
`;
