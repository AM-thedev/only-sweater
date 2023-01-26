import { 
    FlexBox,
    H1,
    Button,
    Image,
    Typography,
  } from '../../atoms';
  
  export const About = () => {
  
    return (
      <FlexBox flexDirection="row" flexWrap="nowrap" marginY={'5vw'} >
        <Image src="/assets/sweater3.png" minWidth={0} size="50%" />
        <FlexBox paddingLeft={20} >
          
          <Image src="/assets/dotted-circle-lg.svg" size="31vw" style={{ zIndex:0, position:'absolute' }} />
          
          <FlexBox paddingLeft={40} marginTop={70} flexDirection="column" alignItems="center" alignContent="center" zIndex={1} >
            
            <H1 fontFamily={"Baskerville"} fontWeight={400} marginBottom={30} >
              About
            </H1>
            
            <Typography maxWidth={"32vw"} >
              着るだけで心が満たされていくそんなセーターを作るために
              セーターだけを販売するOnly Sweaterを立ち上げました。
              <br/><br/>
              冬の季節にしか着ないセーターだけれど、
              少しこだわるだけで今年の冬を特別なものにしてもらえるように
              細部までこだわって作りました。
              <br/><br/>
              あなたの冬が特別なものになりますように...
            </Typography>

            <FlexBox alignSelf="flex-start" marginTop={10} >
              <Button variant='redirect' maxWidth={150}>
                View more→
              </Button>
            </FlexBox>

          </FlexBox>
        </FlexBox>
      </FlexBox>
    )
  }