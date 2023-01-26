const gray = {
    900: "#2B3445", // Main Text
    800: "#373F50", // Paragraph
    700: "#4B566B",
    600: "#7D879C", // Low Priority form Title/Text
    520: "#686975",
    510: "#A1A0A6",
    500: "#AEB4BE",
    400: "#DAE1E7", // Border
    300: "#E3E9EF",
    200: "#F3F5F9", // Line Stroke
    100: "#F6F6F6",
    white: "#FFFFFF",
};
  
const textColor = {
    primary: gray[900],
    secondary: gray[800],
    hint: gray[600],
    muted: gray[700],
    disabled: gray[400],
};
  
const bodyColor = {
    text: textColor.primary,
    default: gray[100],
    paper: gray["white"],
};

const backgroundColor = {
    orange: "#F5B05F"
}

const clothesColor = {
    white: "#FFFFFF",
    gray: "#D9D9D9",
    oxford: "#B8B8B8",
    orange: "#F5B05F",
    blue: "#B5D3F7"
}
  
const primaryColor = {
    light: "#DFF8FF",
    main: "#3ECDF8",
    dark: "#626578",
    text: "#ffffff",
};
  
const secondaryColor = {
    light: "rgba(15, 52, 96, 0.2)",
    main: "#14171A",
    dark: "#303A47",
    text: "#ffffff",
    900: "#041533",
    100: "#F3F6F9",
};
  
const warningColor = {
    main: "#FF9F4A",
    light: "#FFF4EB",
    text: textColor.primary,
};

const errorColor = {
    main: "#FF0000",
    light: "#FFECEC",
    text: textColor.primary,
};

const successColor = {
    main: "#28C775",
    light: "#E9F9EF",
    text: textColor.primary,
};

const defaultColor = {
    light: textColor.secondary,
    main: textColor.primary,
    dark: textColor.primary,
    text: textColor.primary,
};
  
export const colors = {
    default: defaultColor,
    primary: primaryColor,
    secondary: secondaryColor,
    warning: warningColor,
    error: errorColor,
    success: successColor,
    text: textColor,
    body: bodyColor,
    background: backgroundColor,
    clothes: clothesColor,
    gray,
};