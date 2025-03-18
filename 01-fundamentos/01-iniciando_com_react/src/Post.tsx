export function Post(props) {
  console.log(props)
  return (
    <>
      <h3>{props.author}</h3>
      <p>{props.content}</p>
    </>
  );
}
