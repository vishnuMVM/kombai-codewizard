// import { Button } from "@mui/base";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon3 from "./icons/SvgIcon3";
import "./style.css";

function ProductTableRowRenderer({
  productTypeButton,
  sanitizedHtmlContent3,
  sanitizedHtmlContent1,
  sanitizedHtmlContent5,
  itemIndex,
  productTitleModifier,
  productDescriptionVariant,
  dynamicBackgroundColorStyle,
  dynamicBorderStyle1,
  colorSchemeStyle,
  dynamicWidthStyle,
  borderStyleBottomA698Fb6A,
  borderBottomStyle,
  borderBottomStyleWithColorA698Fb6A,
  dynamicBorderStyle,
  dynamicBorderStyleWithSvgIcons,
  MId,FullName,ContactNumber,Address, handleDelete
}) {
  return (
    <tr className="product-listing-item-view">
      <td className="item-index-container" style={{ borderBottom: borderStyleBottomA698Fb6A }}>
        <p className="index-item-text-style">{itemIndex || MId}</p>
      </td>
      <td className="product-info-block" style={{ borderBottom: borderBottomStyle }}>
        <p className="product-title-style">{productTitleModifier || FullName}</p>
      </td>
      <td className="product-info-block" style={{ borderBottom: borderBottomStyleWithColorA698Fb6A }}>
        <p className="product-description-text-style">{productDescriptionVariant || ContactNumber}</p>
      </td>
      <td className="product-info-block" style={{ borderBottom: borderBottomStyleWithColorA698Fb6A }}>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        {/* <Button className="product-type-button-style" style={{ border: dynamicBorderStyle1, backgroundColor: dynamicBackgroundColorStyle, color: colorSchemeStyle, minWidth: dynamicWidthStyle }}>
          {productTypeButton}
        </Button> */}

          {productTypeButton || Address}
   
      </td>
      <td className="product-card-details" style={{ borderBottom: borderBottomStyleWithColorA698Fb6A }}>
        <div className="horizontal-flex-container">
          <SvgIcon2 className="svg-container1" sanitizedHtmlContent3={sanitizedHtmlContent3} />
          <SvgIcon1 className="svg-container2" sanitizedHtmlContent1={sanitizedHtmlContent1} />
          <button style={{border:'none'}}onClick={() => handleDelete(MId)}>
          <SvgIcon3 className="svg-container2" sanitizedHtmlContent5={sanitizedHtmlContent5} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductTableRowRenderer;
