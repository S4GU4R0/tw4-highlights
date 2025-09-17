// import PluginAPI from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export const color = (p) => {
  const { matchUtilities, theme } = p;

  matchUtilities(
    {
      highlight: (v) => {
        return {
          "--tw-highlight-color": `${v}`,
        };
      },
    },
    {
      values: flattenColorPalette(theme("colors")),
    }
  );
};

export const defaultColors = {
  "--tw-highlight-color": "black",
};

export const colorStyles = {
  backgroundColor: "var(--tw-highlight-color)",
};
