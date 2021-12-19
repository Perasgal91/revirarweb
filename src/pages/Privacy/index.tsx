import { lazy } from "react";
import PrivacyBlockContent from "../../content/PrivacyBlockContent.json";

const PageBlock = lazy(() => import("../../components/PageBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Privacy = () => {
  return (
    <Container>
      <ScrollToTop />
      <PageBlock
        title={PrivacyBlockContent.title}
        content={PrivacyBlockContent.text}
        button={PrivacyBlockContent.button}
      />
    </Container>
  );
};

export default Privacy;
