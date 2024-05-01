import phoneIcon from "/phoneIcon.png";
function QuickInfosHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        color: "white",
        width: "100%",
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        zIndex: "10",
      }}
    >
      <img src={phoneIcon} style={{ height: "20px" }} alt="" />
      <p style={{ padding: "7px", fontWeight: "200", fontSize: "14px" }}>
        +212 6529 83093
      </p>
    </div>
  );
}

export default QuickInfosHeader;
