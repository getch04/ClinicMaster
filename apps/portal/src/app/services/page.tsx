import { Container } from "@mantine/core";
import { PageInProgress } from "../components/page-in-progress";

function Service() {
  return (
    <>
      <Container className="h-screen  flex items-center justify-center">
        <PageInProgress pageName="Service" />
      </Container>
    </>
  );
}

export default Service;
