import React from "react";

const BasePathContext = React.createContext({
  basePath: "",
  join: (...p) => p.join("/"),
});

function normalizePath(path) {
  if (!path) {
    return "";
  }
  return path.replace(/\/+$/, "");
}

function normalizeSegment(seg) {
  if (!seg) {
    return "";
  }

  return seg.replace(/^\/+/, "");
}

export function BasePathProvider({ basePath = "", children }) {
  const normalized = React.useMemo(() => normalizePath(basePath), [basePath]);

  const join = React.useCallback(
    (...segments) => {
      const cleaned = segments.map((s) => normalizeSegment(String(s || "")));

      if (!normalized) {
        return "/" + cleaned.filter(Boolean).join("/");
      }

      return normalized + "/" + cleaned.filter(Boolean).join("/");
    },
    [normalized]
  );

  const value = React.useMemo(() => ({ basePath: normalized, join }), [normalized, join]);

  return <BasePathContext.Provider value={value}>{children}</BasePathContext.Provider>;
}

export function useBasePath() {
  return React.useContext(BasePathContext);
}
