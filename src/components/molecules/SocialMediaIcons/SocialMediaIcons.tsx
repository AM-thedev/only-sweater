import { FlexBox } from "../../atoms";
import { theme } from "../../../utils/index";
import { 
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

export const SocialMediaIcons = () => {

  return (
    <FlexBox alignSelf={"center"} flexWrap="nowrap" style={{gap:8}} >
      <FaInstagram color={theme.colors.gray[700]} size={24} />
      <FaFacebook color={theme.colors.gray[700]} size={24} />
    </FlexBox>
  )
}