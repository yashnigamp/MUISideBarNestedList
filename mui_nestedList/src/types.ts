
/**
 * Represents the data for a list item, including its unique identifier, the workspace it belongs to, the views it is associated with, and an optional icon.
 */
export type ListData = {
  id: string;
  workspace: string;
  view: string[];
  icon?: string;
};
