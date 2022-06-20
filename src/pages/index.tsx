import type { NextPage } from 'next'
import { useTheme } from 'styled-components'
import { RevealFade } from '../components/Animations/RevealFade'
import { PrimaryButton } from '../components/Elements/PrimaryButton'
import { GradientText } from '../components/Typography/GradientText'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import { PricingCard } from '../components/Cards/PricingCard'
import {
  BannerSection,
  BannerSectionContainer,
  Container,
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  IntroductionSectionImageContainer,
  MetricsSection,
  MetricsSectionContainer,
  PurchaseSection,
  PurchaseSectionSectionContainer,
  TestimonialsSection,
  TestimonialsSectionContainer
} from '../styles'
import { NextImage } from '../components/Next/NextImage'
import { RevealZoom } from '../components/Animations/RevealZoom'
import { CardSlider } from '../components/Elements/CardSlider'
import { testimonials } from '../data/data'
import { TestimonialCard } from '../components/Cards/TestimonialCard'

const Home: NextPage = () => {

  const theme = useTheme()

  return (
    <Container>
      <BannerSection>
        <BannerSectionContainer id='banner'>
          <RevealFade
            bottom
          >
            <GradientText
              content='Ganhe  até 10kg de massa muscular em apenas 3 meses'
              initialColor={theme.colors.primary}
              finalColor={theme.colors.secondary}
              direction='left-to-right'
            />
          </RevealFade>
          <PrimaryButton
            onClick={() => { }}
            title='Começar agora'
          />
        </BannerSectionContainer>
      </BannerSection>
      <IntroductionSection id='introduction'>
        <IntroductionSectionContainer>
          <IntroductionSectionContentContainer>
            <RevealFade>
              <Title
                content='Seja bem-vindo!'
                className='lightTitle'
              />
            </RevealFade>
            <RevealFade>

              <Text
                content='Para quem não me conhece, meu nome é Bruno Fernandes, serei seu instrutor no programa MusclePowers. Sou formado em Educação Fisica e pós-graduado em Fisiologia do Exercício.'
                className='lightText'
              />
            </RevealFade>
            <RevealFade>
              <Text
                content='Possuo 7 anos atuando como Personal Trainer e há 3 anos com o atendimento online. Preparei o melhor do meu método de treinamento (o mesmo que utilizo diariamente com as minhas alunas presenciais) para ajudar você finalmente alcançar a tão sonhada massa magra. Aqui você irá ganhar massa magra de uma vez por todas!'
                className='lightText'
              />
            </RevealFade>

          </IntroductionSectionContentContainer>
          <IntroductionSectionImageContainer>
            <RevealZoom>
              <NextImage
                height={400}
                width={400}
                imgUrl='/gym3.jpg'
              />
            </RevealZoom>
          </IntroductionSectionImageContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <TestimonialsSection>
        <TestimonialsSectionContainer>
          <RevealFade>
            <Title
              content='Veja o que nossos alunos dizem'
              className='lightTitle'
            />
          </RevealFade>
          <CardSlider
            slidesToScroll={3}
            slidesToShow={3}
            showArrows
            infiniteLoop
          >
            {testimonials.map(person => (
              <TestimonialCard
                key={person.name}
                personName={person.name}
                testimonial={person.testimonial}
                ratings={person.ratings}
                personPhotoUrl={person.url}
                cardClassName='testimonialCard'
                testimonialClassName='lightText'
                titleClassName='lightText'

              />
            ))}
          </CardSlider>
        </TestimonialsSectionContainer>
      </TestimonialsSection>
    </Container>
  )
}

export default Home
