// Form fields default to the "subtle" variant (filled background) so they
// stand out against the outlined cards they sit in.
const subtle = { defaultVariants: { variant: "subtle" as const } };

export default defineAppConfig({
  ui: {
    colors: {
      primary: "gold",
      secondary: "slate",
      neutral: "zinc",
    },
    input: subtle,
    select: subtle,
    textarea: subtle,
    selectMenu: subtle,
    inputMenu: subtle,
    inputNumber: subtle,
    inputTags: subtle,
    inputDate: subtle,
    inputTime: subtle,
    pinInput: subtle,
  },
});
