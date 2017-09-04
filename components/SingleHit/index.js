import {
  Circle,
  Box,
  BackgroundImage,
  Divider,
  Text,
  Flex,
  NavLink
} from 'rebass'
import Router from 'next/router'
import { Component } from 'react'
import { ChevronLeft } from 'react-feather'

import ProgressBar from 'components/ProgressBar'

import MeasureText from 'components/MeasureText'
import getFormatDate from 'util/get-format-date'
import SmallCaps from 'components/SmallCaps'
import getImageUrl from 'util/get-image-url'
import HitDetails from './Details'
import Badge from 'components/Badge'

const CARD_HEIGHT = '292px'

const BackgroundImageGradient = BackgroundImage.extend`
  background: ${props =>
    `linear-gradient(rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.7) 100%), url("${props.src}") center center / cover no-repeat`};
  padding-bottom: ${CARD_HEIGHT};
`

const SingleHit = class extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  componentWillUnmount () {
    window.sessionStorage.removeItem('hit')
  }
  render () {
    const { hit } = this.props
    const {
      price,
      title,
      provider,
      updatedAt,
      priceScore,
      brand,
      year,
      condition,
      description
    } = hit

    return (
      <div>
        <BackgroundImageGradient src={getImageUrl(hit)}>
          <Flex
            direction='column'
            justify='space-between'
            p={3}
            style={{ height: CARD_HEIGHT }}
          >
            <Flex align='center' justify='space-between' color='white90'>
              <NavLink
                pl={0}
                onClick={e => {
                  const hasPreviousLink = window.sessionStorage.getItem('hits')
                  return hasPreviousLink
                    ? window.history.back()
                    : Router.push('/')
                }}
              >
                <Circle bg='black80' color='white90' ml={0} p={2}>
                  <ChevronLeft />
                </Circle>
              </NavLink>
              <Badge
                bg='white'
                f={2}
                px={'22px'}
                py={'6px'}
                ml={0}
                color='black'
                caps
              >
                €{price}
              </Badge>
            </Flex>
            <Box>
              <Flex direction='column' align='flex-start'>
                <MeasureText is='h2' mb={2} color='white'>
                  {title}
                </MeasureText>
                <Text f={1} color='white60'>
                  {getFormatDate(updatedAt)} by {provider}
                </Text>
              </Flex>
            </Box>
          </Flex>
        </BackgroundImageGradient>
        <Box>
          <Box px={3} pt={3}>
            <ProgressBar value={priceScore} mb={3} />
          </Box>
          <Flex align='center' justify='space-around' pb={3}>
            <Flex align='center' direction='column'>
              <Text f={4} bold>
                {brand || 'N/A'}
              </Text>
              <SmallCaps color='gray' f={0} m={0} p={0}>
                brand
              </SmallCaps>
            </Flex>
            <Flex align='center' direction='column'>
              <Text f={4} bold>
                {year || 'N/A'}
              </Text>
              <SmallCaps color='gray' f={0} m={0} p={0}>
                year
              </SmallCaps>
            </Flex>
            <Flex align='center' direction='column'>
              <Text f={4} bold>
                {condition || 'N/A'}
              </Text>
              <SmallCaps color='gray' f={0} m={0} p={0}>
                condition
              </SmallCaps>
            </Flex>
          </Flex>
          {description &&
            <Box>
              <Box mx={3}>
                <Divider w={1} color='gray0' />
              </Box>
              <Text f={2} px={3} py={2}>
                {description}
              </Text>
            </Box>}
          <Box mx={3}>
            <Divider w={1} color='gray0' />
          </Box>
          <HitDetails hit={hit} />
        </Box>
      </div>
    )
  }
}

export default ({ hit, ...props }) => <SingleHit hit={hit} />