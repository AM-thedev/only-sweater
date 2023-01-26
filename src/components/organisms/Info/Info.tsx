import { 
  FlexBox,
  H1,
  Button,
} from '../../atoms';
import { InfoCard } from '../../molecules';

export const Info = () => {

  return (
    <FlexBox flexDirection="column" marginY={'5vw'} alignItems="stretch"  >
      <FlexBox alignSelf="flex-start" >
        <H1 fontFamily={"Baskerville"} fontWeight={400} textAlign="left" >
          Info
        </H1>
      </FlexBox>
      
      <InfoCard title='2022ウィンターコレクション発表のお知らせ' date='2022/10/01' />
      <InfoCard title='2022ウィンターコレクション発表のお知らせ' date='2022/10/01' />
      <InfoCard title='2022ウィンターコレクション発表のお知らせ' date='2022/10/01' />

      <FlexBox alignSelf="center" >
        <Button variant='redirect' maxWidth={150}>
          View more→
        </Button>
      </FlexBox>
    </FlexBox>
  )
}