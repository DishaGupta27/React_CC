
export default function ThemedBox({ theme, text }) {
    const style = {
        width: "100px",
        height: "100px",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: theme === "dark" ? "#333" : "#f2f2f2",
        color: theme === "dark" ? "white" : "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    };

    return <div style={style}>{text}</div>;
}
