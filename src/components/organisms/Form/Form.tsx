import { 
  FlexBox,
  H1,
  Button,
  TextField,
  TextArea
} from '../../atoms';

export const ContactForm = () => {

  return (
    <FlexBox flexDirection="column" marginX={'5vw'} marginY={'5vw'} alignItems="center" >
      <H1 fontFamily={"Baskerville"} fontWeight={400} textAlign="center" >
        Contact
      </H1>

      <FlexBox flexDirection="column" alignItems="center" width={'700px'} >
        <FlexBox flexDirection="row" flexWrap="nowrap" marginX={'-1rem'} width={'730px'} >
          <TextField 
            label="姓"
            name="familyName"
            margin="1rem" 
            placeholder='例）太郎'
            fullwidth
          />
          <TextField 
            label="姓"
            name="givenName"
            margin="1rem" 
            placeholder='例）太郎'
            fullwidth
          />
        </FlexBox>

        <TextField 
          label="メールアドレス"
          name="email"
          margin="1rem" 
          placeholder='例）yamada@email.com'
          fullwidth
        />

        <TextArea 
          label="お問合せ内容"
          name="content"
          margin="1rem" 
          fullwidth
        />

      </FlexBox>

      <Button variant="form" maxWidth="200px" >
        送信する
      </Button>
    </FlexBox>
  )
}