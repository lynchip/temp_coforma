// Simplified single-page landing page for GitHub Pages.

function App() {
  const tweaks = {
    showAccent: true,
    headline: "quietly",
  };

  return <HomeBroadsheet tweaks={tweaks} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
