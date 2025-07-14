
export type Option = {
  id: string;
  text: string;
  selected?: boolean;
};

export type Group = {
  text: string;
  children: Option[];
  element?: unknown;
};


export const data: Group[] = [
  {
    text: "Breed",
    children: [
      { id: "1", text: "Affenpinscher", selected: true },
      { id: "2", text: "Afghan Hound" },
      { id: "3", text: "African Hunting Dog" },
      { id: "4", text: "Airedale Terrier" },
      { id: "5", text: "Akbash Dog" },
      { id: "6", text: "Akita" },
      { id: "7", text: "Alapaha Blue Blood Bulldog" },
      { id: "8", text: "Alaskan Husky" },
      { id: "9", text: "Alaskan Malamute" },
      { id: "10", text: "American Bulldog"},
      { id: "11", text: "American Bully" },
      { id: "12", text: "American Eskimo Dog" },
      { id: "13", text: "American Eskimo Dog (Miniature)" },
      { id: "14", text: "American Foxhound" },
      { id: "15", text: "American Pit Bull Terrier" },
      { id: "16", text: "American Staffordshire Terrier" },
    ],
  },
];

export default data;
