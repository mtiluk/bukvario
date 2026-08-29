export type LatinGroup = "familiar" | "accented" | "digraph"
export type CyrillicGroup = "sameAsLatin" | "falseFriend" | "newShape" | "unique"

export type Letter = {
  latin: string
  cyrillic: string
  answers: string[]
  latinGroup: LatinGroup
  cyrillicGroup: CyrillicGroup
}

export const ALPHABET: Letter[] = [
  { latin: "A",  cyrillic: "А", answers: ["a"],               latinGroup: "familiar", cyrillicGroup: "sameAsLatin" },
  { latin: "B",  cyrillic: "Б", answers: ["b"],               latinGroup: "familiar", cyrillicGroup: "newShape" },
  { latin: "C",  cyrillic: "Ц", answers: ["c", "ts"],         latinGroup: "familiar", cyrillicGroup: "newShape" },
  { latin: "Č",  cyrillic: "Ч", answers: ["č", "ch"],         latinGroup: "accented", cyrillicGroup: "newShape" },
  { latin: "Ć",  cyrillic: "Ћ", answers: ["ć", "tj"],         latinGroup: "accented", cyrillicGroup: "unique" },
  { latin: "D",  cyrillic: "Д", answers: ["d"],               latinGroup: "familiar", cyrillicGroup: "newShape" },
  { latin: "Dž", cyrillic: "Џ", answers: ["dž", "dz", "dzh"], latinGroup: "digraph",  cyrillicGroup: "unique" },
  { latin: "Đ",  cyrillic: "Ђ", answers: ["đ", "dj"],         latinGroup: "accented", cyrillicGroup: "unique" },
  { latin: "E",  cyrillic: "Е", answers: ["e"],               latinGroup: "familiar", cyrillicGroup: "sameAsLatin" },
  { latin: "F",  cyrillic: "Ф", answers: ["f"],               latinGroup: "familiar", cyrillicGroup: "newShape" },
  { latin: "G",  cyrillic: "Г", answers: ["g"],               latinGroup: "familiar", cyrillicGroup: "newShape" },
  { latin: "H",  cyrillic: "Х", answers: ["h"],               latinGroup: "familiar", cyrillicGroup: "falseFriend" },
  { latin: "I",  cyrillic: "И", answers: ["i"],               latinGroup: "familiar", cyrillicGroup: "newShape" },
  { latin: "J",  cyrillic: "Ј", answers: ["j", "y"],          latinGroup: "familiar", cyrillicGroup: "sameAsLatin" },
  { latin: "K",  cyrillic: "К", answers: ["k"],               latinGroup: "familiar", cyrillicGroup: "sameAsLatin" },
  { latin: "L",  cyrillic: "Л", answers: ["l"],               latinGroup: "familiar", cyrillicGroup: "newShape" },
  { latin: "Lj", cyrillic: "Љ", answers: ["lj"],              latinGroup: "digraph",  cyrillicGroup: "unique" },
  { latin: "M",  cyrillic: "М", answers: ["m"],               latinGroup: "familiar", cyrillicGroup: "sameAsLatin" },
  { latin: "N",  cyrillic: "Н", answers: ["n"],               latinGroup: "familiar", cyrillicGroup: "falseFriend" },
  { latin: "Nj", cyrillic: "Њ", answers: ["nj"],              latinGroup: "digraph",  cyrillicGroup: "unique" },
  { latin: "O",  cyrillic: "О", answers: ["o"],               latinGroup: "familiar", cyrillicGroup: "sameAsLatin" },
  { latin: "P",  cyrillic: "П", answers: ["p"],               latinGroup: "familiar", cyrillicGroup: "newShape" },
  { latin: "R",  cyrillic: "Р", answers: ["r"],               latinGroup: "familiar", cyrillicGroup: "falseFriend" },
  { latin: "S",  cyrillic: "С", answers: ["s"],               latinGroup: "familiar", cyrillicGroup: "falseFriend" },
  { latin: "Š",  cyrillic: "Ш", answers: ["š", "sh"],         latinGroup: "accented", cyrillicGroup: "newShape" },
  { latin: "T",  cyrillic: "Т", answers: ["t"],               latinGroup: "familiar", cyrillicGroup: "sameAsLatin" },
  { latin: "U",  cyrillic: "У", answers: ["u"],               latinGroup: "familiar", cyrillicGroup: "falseFriend" },
  { latin: "V",  cyrillic: "В", answers: ["v"],               latinGroup: "familiar", cyrillicGroup: "falseFriend" },
  { latin: "Z",  cyrillic: "З", answers: ["z"],               latinGroup: "familiar", cyrillicGroup: "newShape" },
  { latin: "Ž",  cyrillic: "Ж", answers: ["ž", "zh"],         latinGroup: "accented", cyrillicGroup: "newShape" },
];

export const LATIN_GROUPS = [
  { key: "familiar", label: "Familiar letters" },
  { key: "accented", label: "Accented letters" },
  { key: "digraph", label: "Digraphs" },
] as const;

export const CYRILLIC_GROUPS = [
  { key: "sameAsLatin", label: "Same as Latin" },
  { key: "falseFriend", label: "False friends" },
  { key: "newShape", label: "New shapes" },
  { key: "unique", label: "Unique to Serbian" },
] as const;

export type Tabs = (typeof TABS)[number];
export const TABS = ["Latin", "Cyrillic"] as const;
