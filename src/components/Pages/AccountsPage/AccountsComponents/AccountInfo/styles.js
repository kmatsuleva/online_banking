const styles = {
    accountsList: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    
    wrapper: {
        width: "44%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        boxShadow: "0 1px 0 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: 5,
        padding: "25px 0 20px 5px",
        marginTop: 8,
        marginLeft: 42
    },
    
    account: {
        display: "flex",
        alignItems: "center",
        width: 300,
        height: 44,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 18,
        fontFamily: "Roboto, Arial, sans-serif",
        color: "rgb(88, 88, 88)"
    },

    balance: {
        display: "flex",
        alignItems: "center",
        width: 150,
        height: 44,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 18,
        fontFamily: "Roboto, Arial, sans-serif",
        color: "rgb(88, 88, 88)"
    },
  
    icon_delete: {
        display: "flex",
        alignItems: "center",
        height: 44,
        paddingLeft: 15
    },

    button: {
        backgroundColor: "none",
        border: "none", 
        padding: 0
    }
  };
  
  export default styles;
  