function doSomething(event) {
    console.log("Button clicked!");
    setTimeout(() => {
        console.log(event.type);
    }, 2000);
}
function handleHover(event) {
    console.log("Paragraph Hovered!");
    console.log(event.type);
}
function handleDblClick(event) {
    console.log("Paragraph double Clicked!");
    console.log(event.type);
}
export default function Button() {
  return (
    <div>
        <button onClick={doSomething} > Click Me! </button>
        <p onMouseOver={handleHover}>I am a Paragraph - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, blanditiis. Nostrum corrupti soluta deleniti quo libero necessitatibus, obcaecati nisi nobis, incidunt sit aliquam ratione delectus quisquam, numquam inventore repellendus dolore!</p>
        <button onDoubleClick={handleDblClick}>Double Click Me</button>
    </div>
  );
}