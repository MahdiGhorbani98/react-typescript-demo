type PresonListProps = {
  name: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PresonListProps) => {
  return (
    <div>
      {props.name.map((name) => (
        <h3>
          {name.first} {name.last}
        </h3>
      ))}
    </div>
  );
};
