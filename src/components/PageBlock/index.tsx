import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { useHistory } from "react-router-dom";

interface PageBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const PageBlock = ({ title, content, button, t }: PageBlockProps) => {

  let history = useHistory();
  const returnToHomePage = () => {
    history.push("/");
  };
  return (
    <MiddleBlockSection>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{content}</Content>
              {button && (
                <Button name="submit" onClick={() => returnToHomePage()}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(PageBlock);
