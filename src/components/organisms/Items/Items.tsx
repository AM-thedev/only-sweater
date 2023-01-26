import { theme } from '../../../utils';
import { Button, FlexBox, H1 } from '../../atoms';
import { Carousel, ItemCard } from '../../molecules';

export const Items = () => {

  let colors = [
    theme.colors.clothes['white'],
    theme.colors.clothes['gray'],
    theme.colors.clothes['oxford'],
    theme.colors.clothes['orange'],
    theme.colors.clothes['blue']
  ]

  return (
    <FlexBox flexDirection="column" marginY={'5vw'} alignItems="stretch"  >

      <FlexBox alignSelf="center" marginBottom={"1.5rem"} >
        <H1 fontFamily={"Baskerville"} fontWeight={400} textAlign="left" >
          Items
        </H1>
      </FlexBox>

      <Carousel
        items={[
          <ItemCard image="/assets/sweater1_headless.png" colors={colors} title="ゆったりしたセーター" price="10,000" />,
          <ItemCard image="/assets/sweater1_headless.png" colors={colors} title="ゆったりしたセーター" price="10,000" />,
          <ItemCard image="/assets/sweater1_headless.png" colors={colors} title="ゆったりしたセーター" price="10,000" />,

          <ItemCard image="/assets/sweater1_headless.png" colors={colors} title="ゆったりしたセーター" price="10,000" />,
          <ItemCard image="/assets/sweater1_headless.png" colors={colors} title="ゆったりしたセーター" price="10,000" />,
          <ItemCard image="/assets/sweater1_headless.png" colors={colors} title="ゆったりしたセーター" price="10,000" />,

          <ItemCard image="/assets/sweater1_headless.png" colors={colors} title="ゆったりしたセーター" price="10,000" />,
          <ItemCard image="/assets/sweater1_headless.png" colors={colors} title="ゆったりしたセーター" price="10,000" />,
          <ItemCard image="/assets/sweater1_headless.png" colors={colors} title="ゆったりしたセーター" price="10,000" />,
        ]}
      />

      <FlexBox alignSelf="center" >
        <Button variant='redirect' maxWidth={150}>
          View more→
        </Button>
      </FlexBox>
    </FlexBox>
  )
}