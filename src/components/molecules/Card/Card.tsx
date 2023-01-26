import { FlexBox, Divider, Typography, Image, Dot, Box } from "../../atoms";
import { theme } from "../../../utils/index";

interface InfoProps {
  title?: string;
  date?: string;
}

export const InfoCard: React.FC<InfoProps> = ({
  title,
  date
}: InfoProps) => {

  return (
    <FlexBox flexDirection='column' alignSelf="left"  flexWrap="nowrap" marginTop={50} >
      <FlexBox flexDirection="row" justifyContent='space-between' alignItems='center' >
        
        <FlexBox flexDirection="column" flexWrap="nowrap">
          <Typography fontWeight={400} fontSize={18} color={theme.colors.text.muted} >
            {title}
          </Typography>
          <Typography marginY={'1rem'} fontSize={12} color={theme.colors.text.hint} >
            {date}
          </Typography>
        </FlexBox>

        <Image src="/assets/arrow-circle.svg" />
      
      </FlexBox>
      
      <Divider />
    </FlexBox>
  )
}

interface ItemProps {
  image?: string;
  title?: string;
  price?: string;
  colors: Array<string>;
}

export const ItemCard: React.FC<ItemProps> = ({
  image,
  title,
  price,
  colors
}: ItemProps) => {
  return (
    <FlexBox flexDirection="column" maxWidth={"20vw"} marginX={10} >

      <Image src={image} maxHeight={"auto"} />

      <Box marginY={2} >
        {colors.map(function (color) {
          return (<Dot color={color} marginRight={"0.25rem"} />)
        })}
      </Box>  

      <Typography fontWeight={400} fontSize={16} marginBottom={3} >
        {title}
      </Typography>

      <Typography fontWeight={700} fontSize={16} textAlign="right" paddingRight="1rem" >
        ¥ {price}
      </Typography>

    </FlexBox>
  )
}
