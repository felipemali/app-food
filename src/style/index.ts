type Color = {
  primary: string;
  secondary: string;
  tertiary: string;
};
type PropsStyle = {
  border: {
    b: string;
  };
  dimensions: {
    width_sx: number;
    width_md: number;
    width_lg: number;
    heigth_sx: number;
    heigth_md: number;
    heigth_lg: number;
    borderRadius: string;
  };
  spaccing: {
    padding_sx: number;
    padding_md: number;
    padding_lg: number;
    padding_xl: number;
    m_sx: number;
    m_md: number;
    m_lg: number;
    center: string;
  };
  fonts: {
    sx: number;
    md: number;
    lg: number;
    xl: number;
    fontweight: number;
  };
  pallete: Color;
};

export const style: PropsStyle = {
  border: {
    b: "none",
  },
  dimensions: {
    width_sx: 50,
    width_md: 100,
    width_lg: 500,
    heigth_sx: 20,
    heigth_md: 100,
    heigth_lg: 300,
    borderRadius: "50%",
  },
  spaccing: {
    padding_sx: 0,
    padding_md: 5,
    padding_lg: 10,
    padding_xl: 15,
    m_sx: 2,
    m_md: 5,
    m_lg: 10,
    center: "center",
  },
  fonts: {
    sx: 5,
    md: 10,
    lg: 20,
    xl: 26,
    fontweight: 500,
  },
  pallete: {
    primary: "#ed6c02",
    secondary: "#fff",
    tertiary: "#719B1C",
  },
};
