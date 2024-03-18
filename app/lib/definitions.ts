export type State = {
  errors?: {
    name?: string[] | undefined,
    password?: string[] | undefined,
    confirm?: string[] | undefined,
    email?: string[] | undefined,
  };
  message?: string | null;
};
