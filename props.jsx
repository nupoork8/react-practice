// props = pass data

// parent
<User name="nupoor" />;

// child
function User(props) {
  return <h1>{props.name}</h1>;
}
