export type File = {
  name: string;
  type: string;
  fileType: string;
};

export type Directory = {
  name: string;
  type: string;
  files: {
    [key: string]: File | Directory | {};
  };
};
