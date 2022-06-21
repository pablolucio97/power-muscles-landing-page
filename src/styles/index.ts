import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black300};

  &.lightTitle {
    color: ${({ theme }) => theme.colors.white100};
  }
  &.lightText {
    color: ${({ theme }) => theme.colors.silver100};
  }

  &.testimonialCard {
    background-color: ${({ theme }) => theme.colors.black100};
    color: ${({ theme }) => theme.colors.white100};
  }

  &.metricIcon {
    color: ${({ theme }) => theme.colors.secondary_light};
    width: 32px;
    height: 32px;
  }

  &.countUp {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 800;
    font-size: ${({ theme }) => theme.sizes.xxhuge};
    @media (max-width: 1080px) {
      font-size: ${({ theme }) => theme.sizes.xhuge};
    }
    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.sizes.huge};
    }
  }

  &.collapsibleContent {
    padding: 14px;
    color: ${({ theme }) => theme.colors.secondary_light};
    font-size: ${({ theme }) => theme.sizes.medium};
  }

  &.collapsibleContainer {
    color: ${({ theme }) => theme.colors.primary_light};
    font-weight: 800;
  }
  &.openedCollapsibleContainer {
    color: ${({ theme }) => theme.colors.primary_light};
    font-weight: 500;
    padding: 14px 32px 0;
  }
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

  & h1{
    color:  ${({ theme }) => theme.colors.white100};
  }
`;

export const MetricsSection = styled.section`
  display: flex;
  width: 100%;
  height: 80vh;
  background: -webkit-linear-gradient(
    -137deg,
    rgb(31, 31, 31),
    rgb(18, 18, 18)
  );
  background: linear-gradient(-137deg, rgb(31, 31, 31), rgb(18, 18, 18));
  & h1{
    color:  ${({ theme }) => theme.colors.white100};
  }
`;

export const TestimonialsSection = styled.section`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.silver500};
  background-image: url("/carbon-fibre.png");
  & h1{
    color:  ${({ theme }) => theme.colors.white100};
  }
`;

export const FaqSection = styled.section`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black400};
  & h1{
    color:  ${({ theme }) => theme.colors.white100};
  }
`;

export const PurchaseSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  & h1{
    color:  ${({ theme }) => theme.colors.white100};
  }
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

  & h1 {
    margin: 0 auto 24px;
    @media (max-width: 720px) {
      width: 100%;
      text-align: center;
    }
  }
`;

export const FaqSectionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1900px;
  padding: 40px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.black400};

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const PurchaseSectionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1900px;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  padding: 40px;
  @media (max-width: 720px) {
    flex-direction: column;
  }

  & p {
    width: 80%;
    text-align: center;
    margin: 24px auto 0;
  }
`;

export const CountUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const FaqSectionCollapsableContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.black300};
  padding: 24px;
  margin: 40px auto 0;
  width: 100%;
`;
