function Box(props) {
  const { text, backgroundColor } = props;
  return (
    <div className={backgroundColor}>
      <p>{text}</p>
    </div>
  );
}

const element = (
  <div className="box-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="Small" backgroundColor="box small-box" />
      <Box text="Medium" backgroundColor="box medium-box" />
      <Box text="Large" backgroundColor="box large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
