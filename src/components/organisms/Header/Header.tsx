import { 
  FlexBox, 
  Box, 
  Image, 
  Button, 
  Typography
} from "../../atoms";
import { SocialMediaIcons } from "../../molecules/SocialMediaIcons";

export const Header = () => {
  return (
    <FlexBox
      flexDirection='column'
      justifyContent="space-between"
      marginBottom={100}
    >

      <FlexBox flexDirection='row' justifyContent="space-between" flexWrap="wrap" zIndex={1} >

        <FlexBox flexDirection='row' flexWrap="wrap" marginBottom={50} >
          <Image src="/assets/slogan_trim_nosubtitle.png" height={60} marginY={'1rem'} />
          <Box alignSelf={"center"} height={20} >
            <Typography color="gray.600" fontFamily={"Baskerville"} >
              We sell only sweaters
            </Typography>
          </Box>
        </FlexBox>

        <FlexBox flexDirection='row' justifyContent="space-between" flexWrap="wrap" marginRight={15}>
          <Button variant="menu">About</Button>
          <Button variant="menu">Item</Button>
          <Button variant="menu">Shop</Button>
          <Button variant="menu">Info</Button>
          <Button variant="menu">Press</Button>
          <SocialMediaIcons />
        </FlexBox>

      </FlexBox>

      <FlexBox flex={'auto'} justifyContent="center" alignItems={"flex-end"} marginX={30} >
        {/*
          <Image src="/assets/slogan.png" size='37%' marginY={'-10rem'} style={{ zIndex:0, alignSelf:'flex-start', justifySelf:'center', height:360, position:'absolute' }} />
          <Image src="/assets/sweater1_overlay.png" minWidth={'0'} style={{ zIndex:1 }} />
          <Image src="/assets/sweater2.png" minWidth={'0'} style={{ zIndex:1 }} />
          <Image src="/assets/sweater3_overlay.png" minWidth={'0'} style={{ zIndex:1 }} />
        */}
        <Image src="/assets/sweater1_overlay.png" minWidth={'0'} />
        <Image src="/assets/sweater2_slogan.png" minWidth={'0'} />
        <Image src="/assets/sweater3_overlay.png" minWidth={'0'} />
      </FlexBox>      

      <Box backgroundColor='background.orange' color='white' textAlign="center" paddingY={10} >
        新規登録で１０％オフキャンペーン実施中！
      </Box>      

    </FlexBox>
  );
};