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
  min-height: 88vh;
  background-color: ${({ theme }) => theme.colors.black100};
`;

export const IntroductionSection = styled.section`
  display: flex;
  width: 100%;
`;

export const MetricsSection = styled.section`
  display: flex;
  width: 100%;
`;

export const TestimonialsSection = styled.section`
  display: flex;
  width: 100%;
`;

export const FaqSection = styled.section`
  display: flex;
  width: 100%;
`;

export const PurchaseSection = styled.section`
  display: flex;
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
      margin: 2% auto 24px;
    }
    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.sizes.large};
      margin: -40% auto 24px;
    }
  }

  & button {
    width: 240px;
    @media (max-width: 1080px) {
      margin: 2% auto 24px;
    }
    @media (max-width: 720px) {
      margin: -20% auto 24px;
    }
  }
`;

export const IntroductionSectionContainer = styled.div`
  display: flex;
`;

export const MetricsSectionContainer = styled.div`
  display: flex;
`;

export const TestimonialSectionContainer = styled.div`
  display: flex;
`;

export const FaqSectionSectionContainer = styled.div`
  display: flex;
`;

export const PurchaseSectionSectionContainer = styled.div`
  display: flex;
`;
