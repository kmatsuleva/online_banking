const styles = {
    wrapper: {
            paddingTop: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
    },

    operations: {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: 5,
        marginRight: 115,
        backgroundColor: "#f4f4f4",
        padding: "35px 65px 30px 30px"

    },

    label: {
        fontSize: 18,
        color: "#15517d",
        fontFamily: "Roboto, Arial, sans-serif",
        marginBottom: 8,
        padding: "0 30px"
    },

    input: {
        border: "1px solid #d2d2d2",
        padding: "8px 10px",
        marginTop: 8,
        marginBottom: 25,
        borderRadius: 3,
        height: 14,
        fontSize: 15,
        color: "#4a4a4a",
        boxShadow: "inset 1px 1px 2px rgba(0, 0, 0, 0.2)",
        width: 100
    },

    button: {
        display: "flex",
        justifyContent: "flex-end"
    },

    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "10px 0"
    }
}

export default styles