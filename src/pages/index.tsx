import type { NextPage } from 'next'
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

import { useTheme } from 'styled-components'
import { RevealFade } from '../components/Animations/RevealFade'
import { PrimaryButton } from '../components/Elements/PrimaryButton'
import { GradientText } from '../components/Typography/GradientText'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
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
import { faqData, testimonials } from '../data/data'
import { TestimonialCard } from '../components/Cards/TestimonialCard'
import { MdAccessibilityNew, MdOutlineHourglassBottom, MdOutlinePlayLesson } from 'react-icons/md'
import dynamic from 'next/dynamic';
import { CollapsibleInfo } from '../components/Elements/CollapsibleInfo';
import { RevealFlip } from '../components/Animations/RevealFlip';
import Head from 'next/head';

const Home: NextPage = () => {

  const theme = useTheme()

  return (
    <Container>
      <Head>
        <title>PowerMuscles | PabloSilvaDev</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão" />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages " />
        <meta name='author' content='Pablo Silva' />
        <meta name="theme-color" content="#000000" />
        <link rel="preload" as="font"></link>

      </Head>
      <BannerSection id='banner'>
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
            ariaLabel='Começar curso'
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
      <MetricsSection id='metrics'>
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
                className='lightText'
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
                cardStyle={{ backgroundColor: theme.colors.black100 }}
                testimonialTextStyle={{ color: theme.colors.white300 }}
                titleStyle={{ color: theme.colors.secondary }}
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
            {faqData.map(question => (
              <CollapsibleInfo
                key={question.title}
                title={question.title}
                content={question.content}
                contentContainerClassName='collapsibleContent'
                titleClassName='collapsibleContainer'
                openedTitleClassName='openedCollapsibleContainer'
                contentClassName='collapsibleContent'
                contentStyle={{
                  padding: 14,
                  color: theme.colors.secondary_light,
                  fontSize: theme.sizes.medium
                }}

              />
            ))}
          </FaqSectionCollapsableContainer>
        </FaqSectionSectionContainer>
      </FaqSection>
      <PurchaseSection id='purchase'>
        <PurchaseSectionSectionContainer>
          <RevealFade>
            <Title
              content='Satisfação garantida'
            />
          </RevealFade>
          <Text
            content='Você tem 7 dias úteis para avaliar se o treinamento faz sentido para você, caso contrário, devolvemos seu dinheiro.'
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
            ariaLabel='Começar curso'
          />
        </PurchaseSectionSectionContainer>

      </PurchaseSection>
    </Container>
  )
}

export default Home
