import { CustomButton } from "./components/html/Button";

function App() {
  return (
    <CustomButton
      variant="primary"
      onClick={() => {
        console.log("clicked");
      }}
    >
      Primary Button
    </CustomButton>
  );
}

export default App;
