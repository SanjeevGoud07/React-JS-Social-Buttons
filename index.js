const Button = (props) => {
  //  Write your code here.
  const { className, but } = props;
  return <button className={className}>{but}</button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div className="Con">
      <Button className="but1" but="Like" />
      <Button className="but2" but="Comment" />
      <Button className="but3" but="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
