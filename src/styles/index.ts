import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const BannerSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.black100};
  @media (max-width: 720px) {
    height: 40vh;
  }
`;

export const IntroductionSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 88vh;
  background-color: ${({ theme }) => theme.colors.black300};
`;

export const MetricsSection = styled.section`
  display: flex;
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.black400};
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const TestimonialsSection = styled.section`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.silver500};
  background-image: url('/carbon-fibre.png');
`;

export const FaqSection = styled.section`
  display: flex;
  width: 100%;
`;

export const PurchaseSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BannerSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1900px;
  background-image: url("gym_banner.png");
  background-repeat: no-repeat;
  background-size: 100%;

  & p {
    color: ${({ theme }) => theme.colors.primary};
    width: 64%;
    font-weight: 800;
    text-align: center;
    margin: 16% auto 24px;
    font-size: ${({ theme }) => theme.sizes.hero};
    @media (max-width: 1080px) {
      width: 64%;
      font-size: ${({ theme }) => theme.sizes.huge};
      margin: 40% auto 24px;
    }
    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.sizes.large};
      margin: 32% auto 24px;
    }
  }

  & button {
    width: 240px;
    @media (max-width: 1080px) {
      margin: 2% auto 24px;
    }
    @media (max-width: 720px) {
      margin: 0 auto 24px;
    }
  }
`;

export const IntroductionSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  width: 1900px;
  background-color: ${({ theme }) => theme.colors.black300};
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
export const IntroductionSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px;
  width: 50%;
  min-height: 56vh;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
export const IntroductionSectionImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 50%;
  @media (max-width: 720px) {
    width: 100%;
    margin-top: -40px;
  }
`;

export const MetricsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1900px;
  margin: 40px auto;
  
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const TestimonialsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1900px;
  margin: 40px auto;
  @media (max-width: 1440px) {
    width: 80%;
  }
  @media (max-width: 720px) {
    width: 80%;
  }

  & h1{
      margin: 0 auto 24px;
    @media (max-width: 720px){
        width: 100%;
        text-align: center;
    }
  }
`;

export const FaqSectionSectionContainer = styled.div`
  display: flex;
`;

export const PurchaseSectionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1900px;
  background-color: ${({ theme }) => theme.colors.black400};
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
