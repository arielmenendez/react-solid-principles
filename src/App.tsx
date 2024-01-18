// import OpenClosedPrinciple from './OpenClosedPrinciple/index';
import { Button, RedButton } from './LiskovSubstitutionPrinciple/index';
// import { TitleWithButton } from './OpenClosedPrinciple/index';
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
      {/* <TitleWithButton
        title="Principios Solid React"
        buttonText="Aloha"
        onClick={() => {}}
      /> */}
      <Button size="xl" color="green">
        <span>Hi</span>
      </Button>
      <RedButton size="xl" color="red">
        <span>Hi</span>
      </RedButton>
    </>
  );
}

export default App;
