import("./SupportApp").then(({ default: SupportApp }) => {
  const root = document.getElementById("root");
  import("react").then((React) => {
    import("react-dom/client").then((ReactDOM) => {
      const rootNode = ReactDOM.createRoot(root);
      rootNode.render(React.createElement(SupportApp));
    });
  });
});
