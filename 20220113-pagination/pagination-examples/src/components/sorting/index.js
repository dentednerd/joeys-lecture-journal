import Container from '../container';
import ListWithMutation from './01-mutate-state';
import ListWithTwoSourcesOfTruth from './02-two-sources-of-truth';
import ListWithSingleSourceOfTruth from './03-single-source-of-truth';
import ListWithApiCalls from './04-with-api';

function Sorting() {
  return (
    <>
      <h1>Sorting</h1>

      <Container title="Mutating State">
        <ListWithMutation />
      </Container>

      <Container title="Two Sources of Truth">
        <ListWithTwoSourcesOfTruth />
      </Container>

      <Container title="A Single Source of Truth">
        <ListWithSingleSourceOfTruth />
      </Container>
      <Container title="With API Calls">
        <ListWithApiCalls />
      </Container>
    </>
  );
}

export default Sorting;
