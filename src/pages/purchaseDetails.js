import { Breadcrumb } from "@douyinfe/semi-ui";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import { IconHome } from "@douyinfe/semi-icons";
export const PurchaseDetail = () => {
  return (
    <>
      <Breadcrumb
        separator={">"}
        routes={[
          {
            path: "/",
            href: "/",
            icon: <IconHome />,
          },
          {
            path: "/products",
            href: "/products",
            name: "catalog",
          },
          "details",
        ]}
      />
      <ItemDetailContainer />
    </>
  );
};
