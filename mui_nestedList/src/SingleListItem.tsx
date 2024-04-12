import { Folder } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

/**
 * A single list item component that displays an icon and label.
 *
 * @param label - The text to display as the list item label.
 * @param icon - An optional icon to display next to the label.
 * @returns A `ListItemButton` component with the specified label and icon.
 */
function SingleListItem({ label, icon }: { label: string; icon?: string }) {
  function clickHandler() {
    console.log("clicked");
  }
  return (
    <ListItemButton>
      <ListItemIcon>
        {icon && <Folder />}
        {/* <MoveToInbox /> */}
      </ListItemIcon>
      <ListItemText primary={label} onClick={clickHandler} />
    </ListItemButton>
  );
}

export default SingleListItem;
