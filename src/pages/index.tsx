import type { NextPage } from 'next'
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

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
  CountUpContainer,
  FaqSection,
  FaqSectionCollapsableContainer,
  FaqSectionSectionContainer,
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
import { MdAccessibilityNew, MdOutlineHourglassBottom, MdOutlinePlayLesson } from 'react-icons/md'
import dynamic from 'next/dynamic';
import { SubTitle } from '../components/Typography/SubTitle';
import { CollapsibleInfo } from '../components/Elements/CollapsibleInfo';
import { RevealFlip } from '../components/Animations/RevealFlip';

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
                width={320}
                imgUrl='/professor.png'
              />
            </RevealZoom>
          </IntroductionSectionImageContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <MetricsSection>
        <MetricsSectionContainer>
          <Title
            content='Números que falam por si só'
            className='lightTitle'
          />
          <RevealZoom>
            <CountUpContainer>
              <CountUp
                start={0}
                end={97}
                duration={4}
                className='countUp'
              />
              <Text
                content='Horas de conteúdo'
                className='lightTitle'
              />
              <MdOutlineHourglassBottom
                className='metricIcon'

              />
            </CountUpContainer>
          </RevealZoom>
          <RevealZoom>
            <CountUp
              start={12}
              end={182}
              duration={3}
              className='countUp'
            />
            <Text
              content='Video aulas'
              className='lightText'
            />
            <MdOutlinePlayLesson
              className='metricIcon'
            />
          </RevealZoom>
          <RevealZoom>
            <CountUp
              start={12}
              end={455}
              duration={4}
              className='countUp'
              prefix='+ de '
            />
            <Text
              content='Alunos impactados'
              className='lightText'
            />
            <MdAccessibilityNew
              className='metricIcon'
            />
          </RevealZoom>
        </MetricsSectionContainer>
      </MetricsSection>
      <TestimonialsSection id='testimonials'>
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
      <FaqSection id='faq'>
        <FaqSectionSectionContainer>
          <RevealFade>
          <Title
            content='Perguntas frequentes'
            className='lightTitle'
          />
          </RevealFade>
          <FaqSectionCollapsableContainer>
            <CollapsibleInfo
              title='O acesso é vitalício?'
              content='Sim. O acesso ao treinamento é vitalício.'
              contentContainerClassName='collapsibleContent'
              titleClassName='collapsibleContainer'
              openedTitleClassName='openedCollapsibleContainer'
              contentClassName='collapsibleContent'
            />
            <CollapsibleInfo
              title='De onde posso acessar o treinamento?'
              content='Você pode acessar o treinamento de qualquer dispositivo com conexão com a internet.'
              contentContainerClassName='collapsibleContent'
              titleClassName='collapsibleContainer'
              openedTitleClassName='openedCollapsibleContainer'
              contentClassName='collapsibleContent'

            />
            <CollapsibleInfo
              title='Vou ter suporte para dúvidas?'
              content='Sim. Você tera direito a suporte de segunda à sexta, exceto feriados.'
              contentContainerClassName='collapsibleContent'
              titleClassName='collapsibleContainer'
              openedTitleClassName='openedCollapsibleContainer'
              contentClassName='collapsibleContent'

            />
            <CollapsibleInfo
              title='Existe um grupo de apoio?'
              content='Sim. Ao adquirir o treinamento, você terá livre acesso ao nosso grupo do Whatsapp.'
              contentContainerClassName='collapsibleContent'
              titleClassName='collapsibleContainer'
              openedTitleClassName='openedCollapsibleContainer'
              contentClassName='collapsibleContent'

            />
            <CollapsibleInfo
              title='Posso pedir reembolso?'
              content='Sim. Caso você não goste do treinamento por qualquer motivo, você tem 7 dias úteis para pedir reembolso.'
              contentContainerClassName='collapsibleContent'
              titleClassName='collapsibleContainer'
              openedTitleClassName='openedCollapsibleContainer'
              contentClassName='collapsibleContent'
            />
          </FaqSectionCollapsableContainer>
        </FaqSectionSectionContainer>
      </FaqSection>
      <PurchaseSection id='purchase'>
        <PurchaseSectionSectionContainer>
          <RevealFade>
            <Title
              content='Satisfação garantida'
              className='lightTitle'
            />
          </RevealFade>
          <Text
            content='Você tem 7 dias úteis para avaliar se o treinamento faz sentido para você, caso contrário, devolvemos seu dinheiro.'
            className='lightText'
          />
          <RevealFlip>
            <NextImage
              width={240}
              height={240}
              imgUrl='/image_seeds/warrant_seal3.png'
              className='nextImage'
              style={{ margin: 'auto' }}
            />
          </RevealFlip>
          <PrimaryButton
            title='Quero mais músculos'
            onClick={() => { }}
            size='large'
          />
        </PurchaseSectionSectionContainer>

      </PurchaseSection>

    </Container>
  )
}

export default Home
