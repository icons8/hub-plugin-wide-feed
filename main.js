// The feed and input field column is wider (in the hub .feed-inner/.dock-inner are 800px in Classic and 1104px in
// Clean, a paragraph is 68 characters), but with air at the sides: symmetric margins up to 70px (narrower on a narrow
// window), the column centered.
export default function register() {
  const st = document.createElement("style");
  st.textContent = `.app { --measure: 125ch; }
.feed-inner, .dock-inner { box-sizing: border-box; max-width: min(1500px, 100%); padding-inline: clamp(12px, 4vw, 70px); }`;
  document.head.append(st);
}
