import './App.css'
import Button from "./Components/Button/Button.tsx";
import Counter from "./Components/Counter/Counter.tsx";

function App() {
  return (
    <>
      <Button.Root style="primary">
        <Button.Ripple />
        <Button.ContentWithCounter
          counter={
            <Counter.Root quantly="5" pulse>
              <Counter.Pulse />
              <Counter.Badge />
            </Counter.Root>
          }
        >
          кнопка 1.1
        </Button.ContentWithCounter>
        <Button.Loader />
      </Button.Root>
    </>
  )
}

export default App
