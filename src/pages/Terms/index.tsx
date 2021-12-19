import { lazy } from "react";
import TermsBlockContent from "../../content/TermsContent.json";

const PageBlock = lazy(() => import("../../components/PageBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Terms = () => {
  return (
    <Container>
      <ScrollToTop />
      <PageBlock
        title={TermsBlockContent.title}
        content={TermsBlockContent.text}
        button={TermsBlockContent.button}
      />
    </Container>
  );
};

export default Terms;
