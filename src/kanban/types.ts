export type Id = string | number;

export type KanbanColumn = {
  id: Id;
  title: string;
  color: string;
}

export type KanbanTask = {
  id: Id;
  columnId: Id;
  title?: string;
  content?: string;
  status?: string;
}