export const TABS = [
  { id: "latin", label: "Latin" },
  { id: "cyrillic", label: "Cyrillic" },
  { id: "study", label: "Study" },
] as const;

export type Tabs = (typeof TABS)[number]["id"];

export type LetterGroupData = {
  label: string;
  letters: string[];
};

export const LATIN_GROUPS: LetterGroupData[] = [
  {
    label: "Familiar letters",
    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Z"],
  },
  {
    label: "Accented letters",
    letters: ["Č", "Ć", "Đ", "Š", "Ž"],
  },
  {
    label: "Digraphs",
    letters: ["Dž", "Lj", "Nj"],
  },
];

export const CYRILLIC_GROUPS: LetterGroupData[] = [
  {
    label: "Same as Latin",
    letters: ["А", "Е", "Ј", "К", "М", "О", "Т"],
  },
  {
    label: "False friends",
    letters: ["В", "Н", "Р", "С", "У", "Х"],
  },
  {
    label: "New shapes",
    letters: ["Б", "Г", "Д", "Ж", "З", "И", "Л", "П", "Ф", "Ц", "Ч", "Ш"],
  },
  {
    label: "Unique to Serbian",
    letters: ["Ђ", "Ћ", "Џ", "Љ", "Њ"],
  },
];

export const PRESELECTED = new Set(["Č", "Ć", "Š", "Ž", "Đ"]);
