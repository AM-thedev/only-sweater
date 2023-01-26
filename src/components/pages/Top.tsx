import { 
  Header, 
  Footer,
  ContactForm,
  Items,
  Info,
  About
} from '../organisms';
import { 
  FlexBox,
} from '../atoms';


const Top = () => {

  return (
    <div style={{backgroundColor:"white"}} >
      <Header />
      <FlexBox flexDirection='column' justifyContent="space-between" marginX={'15vw'} paddingX={'5vw'} >
        <About />
        <Items />
        <Info />
        <ContactForm />
      </FlexBox>
      <Footer />
    </div>
  )
}


export default Top;