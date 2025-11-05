import React from "react";

const BasePathContext = React.createContext({
  basePath: "",
  join: (p) => p,
});

export function BasePathProvider({ basePath = "", children }) {
  const normalized = React.useMemo(() => {
    if (!basePath) return "";
    return basePath.replace(/\/+$/, "");
  }, [basePath]);

  const join = React.useMemo(() => {
    return (path = "") => {
      const p = String(path || "");
      if (!normalized) {
        return p.startsWith("/") ? p : `/${p}`;
      }
      if (p.startsWith("/")) {
        return `${normalized}${p}`;
      }
      return `${normalized}/${p}`;
    };
  }, [normalized]);

  const value = React.useMemo(() => ({ basePath: normalized, join }), [normalized, join]);

  return <BasePathContext.Provider value={value}>{children}</BasePathContext.Provider>;
}

export function useBasePath() {
  return React.useContext(BasePathContext);
}
