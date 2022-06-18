type GreetProps = {
  name: string;
  age?: number;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      Hello {props.name}, You are {props.age}
    </div>
  );
};

export default Greet;
