export default function HelpWantedLabel(props) {
  return (
    <span style={{backgroundColor: "#008672",
      borderRadius: "6px",
      boxShadow: "inset 0 -1px 0 rgba(27,31,35,.12)",
      color: "white",
      fontWeight: 700,
      padding: "2px",
      }}>{props.children || 'help wanted'}</span>
  )
}