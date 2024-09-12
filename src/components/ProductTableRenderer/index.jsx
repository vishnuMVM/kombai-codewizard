import ProductTableRowRenderer from "../ProductTableRowRenderer";
import { theme } from "../../theme";

function ProductTableRenderer({ productTableRowsData }) {
  const productTableRowsStylesConfigurations = [
    {
      borderStyleBottomA698Fb6A: theme.others.BORDER_BOTTOM_A698FB6A,
      borderBottomStyle: theme.others.BORDER_BOTTOM_A698FB6A,
      borderBottomStyleWithColorA698Fb6A: theme.others.BORDER_BOTTOM_A698FB6A,
      dynamicBorderStyle: theme.others.BORDER_BOTTOM_A698FB6A,
      dynamicBorderStyle1: theme.others.BORDER_CA3B3E8F,
      dynamicBackgroundColorStyle: theme.colors.BACKGROUND_COLOR_359B8523,
      colorSchemeStyle: theme.colors.COLOR_EAF544EB,
      dynamicWidthStyle: theme.others.MIN_WIDTH_1A3700,
      dynamicBorderStyleWithSvgIcons: theme.others.BORDER_BOTTOM_A698FB6A,
    },
    {
      borderStyleBottomA698Fb6A: theme.others.BORDER_BOTTOM_A698FB6A,
      borderBottomStyle: theme.others.BORDER_BOTTOM_A698FB6A,
      borderBottomStyleWithColorA698Fb6A: theme.others.BORDER_BOTTOM_A698FB6A,
      dynamicBorderStyle: theme.others.BORDER_BOTTOM_A698FB6A,
      dynamicBorderStyle1: theme.others.BORDER_74DA6D62,
      dynamicBackgroundColorStyle: theme.colors.BACKGROUND_COLOR_7DC675FA,
      colorSchemeStyle: theme.colors.COLOR_959473BE,
      dynamicWidthStyle: theme.others.MIN_WIDTH_2C922BD,
      dynamicBorderStyleWithSvgIcons: theme.others.BORDER_BOTTOM_A698FB6A,
    },
    {
      borderStyleBottomA698Fb6A: theme.others.BORDER_BOTTOM_A698FB6A,
      borderBottomStyle: theme.others.BORDER_BOTTOM_A698FB6A,
      borderBottomStyleWithColorA698Fb6A: theme.others.BORDER_BOTTOM_A698FB6A,
      dynamicBorderStyle: theme.others.BORDER_BOTTOM_A698FB6A,
      dynamicBorderStyle1: theme.others.BORDER_7AA079B1,
      dynamicBackgroundColorStyle: theme.colors.BACKGROUND_COLOR_946226DE,
      colorSchemeStyle: theme.colors.COLOR_9B5A800D,
      dynamicWidthStyle: theme.others.MIN_WIDTH_195203,
      dynamicBorderStyleWithSvgIcons: theme.others.BORDER_BOTTOM_A698FB6A,
    },
    {
      borderStyleBottomA698Fb6A: theme.others.BORDER_BOTTOM_A698FB6A,
      borderBottomStyle: theme.others.BORDER_BOTTOM_A698FB6A,
      borderBottomStyleWithColorA698Fb6A: theme.others.BORDER_BOTTOM_A698FB6A,
      dynamicBorderStyle: theme.others.BORDER_BOTTOM_A698FB6A,
      dynamicBorderStyle1: theme.others.BORDER_6FB472B6,
      dynamicBackgroundColorStyle: theme.colors.BACKGROUND_COLOR_53B2BF96,
      colorSchemeStyle: theme.colors.COLOR_906E7912,
      dynamicWidthStyle: theme.others.MIN_WIDTH_2C91EFC,
      dynamicBorderStyleWithSvgIcons: theme.others.BORDER_BOTTOM_A698FB6A,
    },
    {
      dynamicBorderStyle1: theme.others.BORDER_CA3B3E8F,
      dynamicBackgroundColorStyle: theme.colors.BACKGROUND_COLOR_359B8523,
      colorSchemeStyle: theme.colors.COLOR_EAF544EB,
      dynamicWidthStyle: theme.others.MIN_WIDTH_1A3700,
    },
  ];
  return (
    <tbody>
      {productTableRowsData.map((data, index) => {
        return <ProductTableRowRenderer {...data} key={index} {...productTableRowsStylesConfigurations[index]} />;
      })}
    </tbody>
  );
}

export default ProductTableRenderer;
