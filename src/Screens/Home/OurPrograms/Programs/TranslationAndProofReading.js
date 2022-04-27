import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  BannerBackground,
  ContainerStyled,
  H4,
  LiStyled,
  LiStyledArrow,
  ProgramDescription,
  RowContainer,
  ULStyled
} from '../ProgramDetail/ProgramDetail.styled';
import WhyChooseUsContainer from '../../WhyChooseUs/WhyChooseUs.container';
import TestimonialsComponentContainer from '../../TestimonialsComponent/TestimonialsComponent.container';
import OurClientsContainer from '../../OurClients/OurClients.container';
import ContactContainer from '../../Contact/Contact.container';
import MobileBanner from '../../../../Assets/Images/new-banner/TRANSLATION-PROOFREADING-SERVICES/INGGO_translation_n_proofreading_services_biru_mobile_english.png';
import DesktopBanner from '../../../../Assets/Images/new-banner/TRANSLATION-PROOFREADING-SERVICES/INGGO_translation_n_proofreading_services_biru.png';
import FlowChartEn from '../../../../Assets/Images/new-banner/en_flowchart.png';
import FlowChartId from '../../../../Assets/Images/new-banner/id_flowchart.png';

const BannerImage = styled.img`
  border-radius: 20px;
  height: 400px;
`;

const TranslationAndProofReading = ({ lang }) => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerStyled>
        <Row>
          <Col xl={12} md={12} sm={12}>
            <BannerBackground
              language={lang}
              mobileBanner={MobileBanner}
              desktopBanner={DesktopBanner}
            />
          </Col>
          <Col xl={12} md={12} sm={12}>
            <RowContainer>
              <Col xl={12} md={12} sm={12}>
                <ProgramDescription>{t('translationServicesDescription')}</ProgramDescription>
                <ProgramDescription>{t('translationServicesDescriptionSecond')}</ProgramDescription>
              </Col>
              <Col xl={12} md={12} sm={12}>
                {lang === 'id' ? (
                  <Row>
                    <Col xl={8} md={8} sm={8}>
                      <ULStyled>
                        <LiStyled>
                          <b>Sumber teknis</b> (manual, panduan pengguna, buku pegangan, dan jenis
                          teks teknis lainnya)
                        </LiStyled>
                        <LiStyled>
                          <b>Laporan tahunan perusahaan</b> (informasi umum perusahaan, laporan tata
                          kelola perusahaan, kebijakan perusahaan, laporan keuangan, dan jenis
                          laporan tahunan lainnya)
                        </LiStyled>
                        <LiStyled>
                          <b>Materi pelatihan</b> (pengembangan pribadi, hubungan masyarakat,
                          kepemimpinan, soft skill, dan jenis materi pelatihan lainnya)
                        </LiStyled>
                        <LiStyled>
                          <b>Teks akademik</b> (artikel untuk publikasi internasional, disertasi,
                          bahan akademik dan penelitian, abstrak untuk penelitian dan tesis, dan
                          jenis teks akademik lainnya)
                        </LiStyled>
                        <LiStyled>
                          <b>Website</b>
                        </LiStyled>
                        <LiStyled>
                          <b>Kategori lainnya</b>
                        </LiStyled>
                      </ULStyled>

                      <H4>Syarat dan Ketentuan</H4>
                      <ULStyled>
                        <LiStyledArrow>
                          Harga akan dihitung berdasarkan jumlah kata dalam dokumen sumber.
                        </LiStyledArrow>
                        <LiStyledArrow>
                          Tarif tergantung pada tingkat kesulitan dan seberapa banyak dokumen
                          sumber.
                        </LiStyledArrow>
                        <LiStyledArrow>
                          Setelah dokumen diserahkan oleh klien, kami akan memberikan penawaran
                          harga dan jangka waktu penyelesaian untuk disetujui oleh klien sebelum
                          melanjutkan layanan.
                        </LiStyledArrow>
                        <LiStyledArrow>
                          Deposit 50% diperlukan di awal sebelum kami melanjutkan layanan.
                        </LiStyledArrow>
                        <LiStyledArrow>
                          Dalam hal pembatalan setelah menerima deposit 50%, deposit akan dianggap
                          sebagai kompensasi atas pembatalan dan oleh karena itu tidak dapat
                          dikembalikan kepada klien.
                        </LiStyledArrow>
                        <LiStyledArrow>
                          Kami akan menjaga kerahasiaan dan memastikan keamanan dokumen klien. kami
                          tidak akan informasi apa pun dalam dokumen sumber klien atau terjemahannya
                          tanpa seizin klien. Kami akan menandatangani perjanjian Non-Disclosure
                          (NDA).
                        </LiStyledArrow>
                        <LiStyledArrow>
                          Untuk informasi lebih lanjut mengenai harga, silahkan hubungi kami melalui
                          Whatsapp atau email.
                        </LiStyledArrow>
                      </ULStyled>
                    </Col>
                    <Col>
                      <H4>Bagaimana prosedurnya?</H4>
                      <BannerImage src={FlowChartId} className="img-fluid" alt="banner" />
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col xl={8} md={8} sm={8}>
                      <ULStyled>
                        <LiStyled>
                          <b>Highly technical sources</b> (manuals, user guides, handbooks, and
                          other types of technical texts)
                        </LiStyled>
                        <LiStyled>
                          <b>Company annual reports</b> (general corporate information, corporate
                          governance reports, corporate policies, financial statements, and other
                          types of annual reports)
                        </LiStyled>
                        <LiStyled>
                          <b>Training materials</b> (personal development, public relation,
                          leadership, soft skills, and other types of training materials)
                        </LiStyled>
                        <LiStyled>
                          <b>Academic texts</b> (articles for international publication,
                          dissertations, academic and research materials, abstracts for research and
                          thesis, and other types of academic texts)
                        </LiStyled>
                        <LiStyled>
                          <b>Website</b>
                        </LiStyled>
                        <LiStyled>
                          <b>Other categories</b>
                        </LiStyled>
                      </ULStyled>

                      <H4>Terms and Conditions</H4>
                      <ULStyled>
                        <LiStyledArrow>
                          Prices will be quoted based on the number of words in the source
                          documents.
                        </LiStyledArrow>
                        <LiStyledArrow>
                          Rates are subject to the level of difficulty and the volume of the source
                          documents.
                        </LiStyledArrow>
                        <LiStyledArrow>
                          Once documents have been submitted by clients, INGGO will provide
                          quotations for the price and the time frame for completion to be approved
                          by clients before proceeding with the service.
                        </LiStyledArrow>
                        <LiStyledArrow>
                          A 50% deposit is required in advance before INGGO proceeds with the
                          service.
                        </LiStyledArrow>
                        <LiStyledArrow>
                          In the event of cancellation following the receipt of the 50% deposit, the
                          deposit shall be deemed as compensation for the cancellation and therefore
                          cannot be refunded to clients.
                        </LiStyledArrow>
                        <LiStyledArrow>
                          INGGO shall maintain confidentiality and ensure the safekeeping of
                          clients’ documents. INGGO shall exercise due discretion in respect of
                          disclosure of any information contained in clients’ source documents or
                          the translations thereof without clients’ permission. A Non-Disclosure
                          Agreement (NDA) would be required.
                        </LiStyledArrow>
                        <LiStyledArrow>
                          For more information on pricing, please contact us through Whatsapp or
                          email.{' '}
                        </LiStyledArrow>
                      </ULStyled>
                    </Col>
                    <Col>
                      <H4>How does it work?</H4>
                      <BannerImage src={FlowChartEn} className="img-fluid" alt="banner" />
                    </Col>
                  </Row>
                )}
              </Col>
            </RowContainer>
          </Col>
        </Row>
      </ContainerStyled>
      <WhyChooseUsContainer />
      <TestimonialsComponentContainer />
      <OurClientsContainer />
      <ContactContainer />
    </>
  );
};

TranslationAndProofReading.propTypes = {
  lang: PropTypes.string
};

export default TranslationAndProofReading;
