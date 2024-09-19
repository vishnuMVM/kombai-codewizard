import ProductTableRowRenderer from "../ProductTableRowRenderer";
import { theme } from "../../theme";
import { GetManagersMulti,SetManagerSingle} from  '../../services/service'; 
import { useState,useEffect } from "react";

function ProductTableRenderer({ productTableRowsData, sortBy,pageInfo}) {

  const [data, setData] = useState([]);

  const fetchData = () => {
    const skip = pageInfo.page * pageInfo.pageSize;
    const top = pageInfo.pageSize;

    let query = `$skip=${skip}&$top=${top}`;
    
    if (sortBy.field && sortBy.sort) {
      query += `&$orderby=${sortBy.field} ${sortBy.sort}`;
    }
    
    GetManagersMulti(query).then((response) => {
      if (response.status) {
        setData(response.values); 
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, [pageInfo,sortBy]);


  const handleDelete = async (MId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this entry?");
    if (confirmDelete) {
      try {
        const result = await SetManagerSingle({ MId, Deleted: true });
        if (result.status) {
          alert('Record deleted successfully');
          fetchData();
        } else {
          alert(`Failed to delete: ${result.statusText}`);
        }
      } catch (error) {
        console.error('Delete failed:', error);
      }
    }
  };


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
      {/* {productTableRowsData.map((data, index) => {
        return <ProductTableRowRenderer {...data} key={index} {...productTableRowsStylesConfigurations[index]} />;
      })} */}
      {data.map((data, index) =>{
              return (
                <ProductTableRowRenderer {...data} key={index} {...productTableRowsStylesConfigurations[1]} 
                sanitizedHtmlContent3={productTableRowsData[1].sanitizedHtmlContent3}
                sanitizedHtmlContent1={productTableRowsData[1].sanitizedHtmlContent1}
                sanitizedHtmlContent5={productTableRowsData[1].sanitizedHtmlContent5 }
                handleDelete={handleDelete}
                />
                )
      })}

    </tbody>
  );
}

export default ProductTableRenderer;
