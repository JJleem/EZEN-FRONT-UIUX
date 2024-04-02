import "./Body.css";

const Body = ({ name, age, location }) => {
  return (
    <div>
      <h1>
        Body
        <br />
        {name[0]} 의 나이는 {age[0]} 이며 {location[0]} 에 살고있습니다.
        <br />
        {name[1]} 의 나이는 {age[2]} 이며 {name[0]}과의 나이차이는
        <br /> {name.length - 1} 이며 {location[1]} 에 거주중입니다.
        <br />
      </h1>
    </div>
  );
};

Body.defaultProps = {
  location: ["##", "##"],
};

export default Body;
