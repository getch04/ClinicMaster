import { Container } from "@mantine/core";
import { PageInProgress } from "@repo/core";

function Service() {
  return (
    <>
      <Container className="h-screen  flex items-center justify-center">
        <PageInProgress pageName="testing" />
      </Container>
    </>
  );
}

export default Service;
