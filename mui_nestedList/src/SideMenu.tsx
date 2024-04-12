import { List, ListSubheader } from "@mui/material";
import NestedItem from "./NestedListItems";
import SingleListItem from "./SingleListItem";
import { ListData } from "./types";

/**
 * Renders a side menu component with a header and a list of items.
 *
 * @param header - The header text to display at the top of the menu.
 * @param listData - An array of `ListData` objects representing the items to display in the menu.
 * @returns A React component that renders the side menu.
 */
function SideMenu({
  header,
  listData,
}: {
  header: string;
  listData: ListData[];
}) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {header}
        </ListSubheader>
      }
    >
      {listData.length === 0 && <div>No Data</div>}
      {listData.map((item) => {
        if (item.view.length === 0) {
          return (
            <SingleListItem
              key={item.id}
              label={item.workspace}
              icon={item.icon}
            />
          );
        }
        return (
          <NestedItem
            key={item.id}
            label={item.workspace}
            icon={item.icon}
            nestedItems={item.view}
          />
        );
      })}
    </List>
  );
}

export default SideMenu;
