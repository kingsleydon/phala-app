'use client'
import Footer from '@/components/Footer'
import HomeDemo from '@/components/HomeDemo'
import {typeformAtom} from '@/store/core'
import {SerializedStyles} from '@emotion/react'
import {
  Box,
  Button,
  Container,
  GlobalStyles,
  Stack,
  Theme,
  Typography,
  alpha,
  css,
  darken,
  keyframes,
  lighten,
} from '@mui/material'
import {useAtom} from 'jotai'
import {NextPage} from 'next'
import {LITEPAPER_URL} from '../constants'
import HomeBar from './home-bar'

const background = (theme: Theme): SerializedStyles => {
  const defaultBackground = theme.palette.background.default
  const line = alpha(theme.palette.action.disabled, 0.15)
  const verticalGap = 80
  const horizontalGap = 120
  return css`
    body {
      overflow-x: hidden;
      background: linear-gradient(
          to bottom,
          ${alpha(defaultBackground, 1)},
          ${alpha(defaultBackground, 1)} 300px,
          ${alpha(defaultBackground, 0)}
        ),
        repeating-linear-gradient(
          to top,
          transparent,
          transparent ${verticalGap - 1}px,
          ${line} ${verticalGap - 1}px,
          ${line} ${verticalGap}px
        ),
        repeating-linear-gradient(
          to left,
          transparent,
          transparent ${horizontalGap - 1}px,
          ${line} ${horizontalGap - 1}px,
          ${line} ${horizontalGap}px
        ),
        ${defaultBackground};

      ${theme.breakpoints.up('md')} {
        overflow: hidden;
        height: 100vh;
        background: linear-gradient(
            to right,
            ${alpha(defaultBackground, 1)},
            ${alpha(defaultBackground, 1)} 30%,
            ${alpha(defaultBackground, 0)}
          ),
          repeating-linear-gradient(
            to bottom,
            transparent,
            transparent ${verticalGap - 1}px,
            ${line} ${verticalGap - 1}px,
            ${line} ${verticalGap}px
          ),
          repeating-linear-gradient(
            to left,
            transparent,
            transparent ${horizontalGap - 1}px,
            ${line} ${horizontalGap - 1}px,
            ${line} ${horizontalGap}px
          ),
          ${theme.palette.mode === 'dark'
            ? lighten(defaultBackground, 0.08)
            : darken(defaultBackground, 0.08)};
      }
    }
  `
}

const textOpen = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 160px;
  }
`

const Page: NextPage = () => {
  const [typeform] = useAtom(typeformAtom)
  return (
    <Stack height={[, , 1]}>
      <GlobalStyles styles={(theme) => [background(theme)]} />
      <HomeBar />
      <Container
        maxWidth="xl"
        sx={{
          mt: 3,
          mb: [3, 3, 8],
          flex: [, , 1],
          maxHeight: [, , 900],
          minHeight: 700,
        }}
      >
        <Stack
          component="main"
          direction={['column', 'column', 'row']}
          justifyContent={[, , 'space-between']}
          height={[, , 1]}
        >
          <Stack
            alignItems="flex-start"
            maxWidth={420}
            ml={[1, 1, 1, 8]}
            mb={[12, 12, 0]}
          >
            <Typography variant="h3" component="h1" mt={[4, 4, 12, 18]}>
              Cross-Chain
              <Box
                sx={(theme) => ({
                  ml: -1,
                  my: 1,
                  width: '0px',
                  animation: `${textOpen} 0.5s ease-in-out forwards`,
                  animationDelay: '1s',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  background:
                    theme.palette.mode === 'dark' ? '#7ca920' : '#d1ff7b',
                })}
              >
                <Box sx={{ml: 1}}>Intent</Box>
              </Box>
              Infrastructure
            </Typography>
            <Typography variant="body1" mt={5}>
              Seeking out the best trading prices across liquidity pools on
              multiple chains, ensuring MEV protection, and preserving user
              privacy.
            </Typography>
            <Stack direction="row" spacing={3} mt={8}>
              <Button
                onClick={() => {
                  typeform.waitlist.open()
                }}
                variant="contained"
                size="large"
              >
                Join Waitlist
              </Button>
              <Button size="large" href={LITEPAPER_URL} target="_blank">
                Read the Litepaper
              </Button>
            </Stack>
            <Footer mt={[16, 16, 'auto']} />
          </Stack>
          <Box
            maxWidth={750}
            ml={[0, 0, 8, 8]}
            mr={[0, 0, 0, 4]}
            flex={['none', 'none', 1]}
            height={[700, 700, 1]}
            borderRadius={3}
            p={[0, 0, 2]}
            sx={(theme) => ({
              backdropFilter: 'blur(2px)',
              background: alpha(
                theme.palette.background.paper,
                theme.palette.mode === 'dark' ? 0.5 : 0.3,
              ),
            })}
          >
            <Box
              height={1}
              p={[2, 2, 3]}
              borderRadius={2}
              sx={(theme) => ({
                background: theme.palette.background.paper,
              })}
            >
              <HomeDemo />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Page
