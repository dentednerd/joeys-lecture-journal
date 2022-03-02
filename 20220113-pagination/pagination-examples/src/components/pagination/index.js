import Container from '../container';
import NextPrevButton from './02-next-prev-buttons';

function Pagination() {
  return (
    <>
      <h2>Pagination</h2>
      <Container title="Next and Previous Buttons">
        <NextPrevButton />
      </Container>
    </>
  );
}

export default Pagination;
