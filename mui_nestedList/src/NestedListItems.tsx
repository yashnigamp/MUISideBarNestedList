import React from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Folder,
  StarBorder,
} from "@mui/icons-material";

/**
 * A React component that renders a nested list item with an optional icon and nested items.
 *
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the list item.
 * @param {string} [props.icon] - The icon to display for the list item.
 * @param {string[]} props.nestedItems - An array of strings representing the nested items.
 * @returns {JSX.Element} - The rendered nested list item.
 */
const NestedItem = ({
  label,
  icon,
  nestedItems,
}: {
  label: string;
  icon?: string;
  nestedItems: string[];
}) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  function clickHandler() {
    console.log("clicked");
  }
  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon && <Folder />}</ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {nestedItems?.map((item) => (
            <ListItemButton key={item} sx={{ pl: 4 }}>
              <ListItemIcon >
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={item} onClick={clickHandler} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default NestedItem;
