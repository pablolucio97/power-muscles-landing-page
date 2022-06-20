import type { NextPage } from 'next'
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
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  IntroductionSectionImageContainer
} from '../styles'
import { NextImage } from '../components/Next/NextImage'

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
            <Title
              content='Seja bem-vindo!'
              className='lightTitle'
            />
            <Text
              content='Para quem não me conhece, meu nome é Bruno Fernandes, serei seu instrutor no programa MusclePowers. Sou formado em Educação Fisica e pós-graduado em Fisiologia do Exercício.'
              className='lightText'
            />
            <Text
              content='Possuo 7 anos atuando como Personal Trainer e há 3 anos com o atendimento online. Preparei o melhor do meu método de treinamento (o mesmo que utilizo diariamente com as minhas alunas presenciais) para ajudar você finalmente alcançar a tão sonhada massa magra. Aqui você irá ganhar massa magra de uma vez por todas!'
              className='lightText'
            />
          </IntroductionSectionContentContainer>
          <IntroductionSectionImageContainer>
            <NextImage
              height={400}
              width={400}
              imgUrl='/gym3.jpg'
            />
          </IntroductionSectionImageContainer>

        </IntroductionSectionContainer>
      </IntroductionSection>
    </Container>
  )
}

export default Home
