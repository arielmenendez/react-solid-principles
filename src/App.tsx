// import OpenClosedPrinciple from './OpenClosedPrinciple/index';
import { TitleWithButton } from './OpenClosedPrinciple/index';
// import SingleResponsabilityPrinciple from './SingleResponsabilityPrinciple/index';

function App() {
  return (
    <>
      {/* <SingleResponsabilityPrinciple /> */}
      {/* <OpenClosedPrinciple
        title="Principios Solid React"
        type="withNormalButton"
        buttonText="Aloha"
        href="/"
      /> */}
      <TitleWithButton
        title="Principios Solid React"
        buttonText="Aloha"
        onClick={() => {}}
      />
    </>
  );
}

export default App;
