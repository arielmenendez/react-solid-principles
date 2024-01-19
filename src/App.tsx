// import OpenClosedPrinciple from './OpenClosedPrinciple/index';
// import { Button, RedButton } from './LiskovSubstitutionPrinciple/index';
// import { TitleWithButton } from './OpenClosedPrinciple/index';
// import SingleResponsabilityPrinciple from './SingleResponsabilityPrinciple/index';
// import Post from './InterfaceSegregationPrinciple/index';
import DependencyInversionPrinciple from './DependencyInversionPrinciple/index';

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
      {/* <Button size="xl" color="green">
        <span>Hi</span>
      </Button>
      <RedButton size="xl" color="red">
        <span>Hi</span>
      </RedButton> */}
      {/* <Post
        post={{
          title: 'Example Post',
          author: {
            name: 'Ariel',
            age: 33,
          },
          createdAt: new Date(),
        }}
      /> */}
      <DependencyInversionPrinciple />
    </>
  );
}

export default App;
