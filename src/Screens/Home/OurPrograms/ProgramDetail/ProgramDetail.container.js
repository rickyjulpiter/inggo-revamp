import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import BusinessEnglishDetail from '../../../../Assets/Images/business_english_detail.png';
import {
  ContainerStyled,
  ImgStyled,
  LiStyled,
  ProgramDescription,
  ProgramTitle,
  ULStyled
} from './ProgramDetail.styled';
import { FloatingImage } from '../../Home.styled';
import Playfull3 from '../../../../Assets/Images/playfull/playfull3.png';
import Playfull2 from '../../../../Assets/Images/playfull/playfull2.png';
import Playfull1 from '../../../../Assets/Images/playfull/playfull1.png';

const ProgramDetailContainer = () => {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <div className="t_four p_absoulte">
        <FloatingImage
          className="layer layer2"
          data-depth="0.30"
          src={Playfull3}
          alt=""
        />
      </div>
      <div className="t_two p_absoulte">
        <FloatingImage
          className="layer layer2"
          data-depth="0.30"
          src={Playfull2}
          alt=""
        />
      </div>
      <div className="t_first p_absoulte">
        <FloatingImage
          className="layer layer2"
          data-depth="0.30"
          src={Playfull1}
          alt=""
        />
      </div>
      <Row>
        <Col xl={4} md={4} sm={0} className="mb-3">
          <ImgStyled src={BusinessEnglishDetail} className="img-fluid" alt="img" />
        </Col>
        <Col xl={8} md={8} sm={12}>
          <ProgramTitle>{t('businessEnglish')}</ProgramTitle>
          <ProgramDescription>{t('businessEnglishDescription')}</ProgramDescription>
          <ULStyled>
            <LiStyled>{t('BAFirstList')}</LiStyled>
            <LiStyled>{t('BASecondList')}</LiStyled>
            <LiStyled>{t('BAThirdList')}</LiStyled>
            <LiStyled>{t('BAFourthList')}</LiStyled>
            <LiStyled>{t('BAFifthList')}</LiStyled>
            <LiStyled>{t('BASixthList')}</LiStyled>
          </ULStyled>
        </Col>
      </Row>
    </ContainerStyled>
  );
};

export default ProgramDetailContainer;
