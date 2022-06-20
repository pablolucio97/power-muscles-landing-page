import type { NextPage } from 'next'
import { useTheme } from 'styled-components'
import { RevealFade } from '../components/Animations/RevealFade'
import { PrimaryButton } from '../components/Elements/PrimaryButton'
import { GradientText } from '../components/Typography/GradientText'
import { Title } from '../components/Typography/Title'
import { BannerSection, BannerSectionContainer, Container } from '../styles'

const Home: NextPage = () => {

  const theme = useTheme()

  return (
    <Container>
      <BannerSection>
        <BannerSectionContainer>
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
            onClick={() => {}}
            title='Começar agora'
          />
        </BannerSectionContainer>
      </BannerSection>
    </Container>
  )
}

export default Home
