import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Breadcrumb } from "@douyinfe/semi-ui";
import { IconHome } from "@douyinfe/semi-icons";
export const Products = () => {
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

          "catalog",
        ]}
      />
      <ItemListContainer greeting={"Catalog"} />
    </>
  );
};
