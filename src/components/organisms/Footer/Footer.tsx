import { 
  FlexBox, 
  Box, 
  Image, 
  Button, 
  Divider,
  Typography 
} from "../../atoms";
import { SocialMediaIcons } from "../../molecules/SocialMediaIcons";

export const Footer = () => {
  return (
    <FlexBox
      flexDirection='column'
      justifyContent="space-between"
      marginTop={'5vw'}
    >
      <FlexBox justifyContent="center">
        <Image src="/assets/slogan.png" style={{ justifySelf:'center', height:360, opacity:0.5, position:'absolute', zIndex:2 }} />
        <Image src="/assets/row.png" style={{ opacity:0.5, zIndex:1 }} />
      </FlexBox>

      <FlexBox flexDirection='row' justifyContent="space-between" flexWrap="wrap" padding={100} >

        <FlexBox flexDirection="column" flexWrap="nowrap">
          
          <FlexBox flexDirection='row' flexWrap="wrap" marginBottom={'5rem'} >
            <Image src="/assets/slogan_trim.png" height={60} marginY={'1rem'} />
            <Box alignSelf={"center"} height={20} >
              <Typography color="gray.600" fontFamily={"Baskerville"} >
                We sell only sweaters
              </Typography>
            </Box>
          </FlexBox>

          <FlexBox flexDirection="column" flexWrap="nowrap">
            <Typography color="gray.600" fontFamily={"Baskerville"} >
              Tel: 0312345678
            </Typography>
            <Typography color="gray.600" fontFamily={"Baskerville"} >
              Email: onlysweater@jp.com
            </Typography>
          </FlexBox>
        </FlexBox>
        
        <FlexBox flexDirection='row' justifyContent="space-between" flexWrap="wrap">
          <Button variant="menu">About</Button>
          <Button variant="menu">Item</Button>
          <Button variant="menu">Shop</Button>
          <Button variant="menu">Info</Button>
          <Button variant="menu">Press</Button>
          <SocialMediaIcons />
        </FlexBox>

      </FlexBox>
      
      <Box marginX={100}>
        <Divider />
      </Box>
      
      <Box alignSelf={"center"}marginY={20}>
        <Typography color="gray.600" fontFamily={"Baskerville"} >
          2022@only sweater
        </Typography>
      </Box>
      
    </FlexBox>
  );
};