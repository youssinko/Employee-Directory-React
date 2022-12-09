//template of list items after iterating over each data
export default function Employee(props) {
  return (
    <div className="class-body">
      <img src={props.img} />

      <h3 className="name">{props.name}</h3>
      <p className="title">{props.title}</p>
    </div>
  );
}
