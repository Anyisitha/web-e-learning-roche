const useDashboard = () => {
    const dashboardContent : any = [
        {
            id: 1,
            image: require("assets/images/test-image.png"),
            text: "Generalidades Foundation <br/> Medicine®",
            module: "Modulo 1",
            enabled: true
        },
        {
            id: 2,
            image: require("assets/images/test-image.png"),
            text: "Portafolio de <br/> servicios",
            module: "Modulo 2",
            enabled: false
        },
        {
            id: 3,
            image: require("assets/images/test-image.png"),
            text: "Perfilamiento genómica <br/> exhaustivo",
            module: "Modulo 3",
            enabled: false
        },
        {
            id: 4,
            image: require("assets/images/test-image.png"),
            text: "Comparación otros <br/> test",
            module: "Modulo 4",
            enabled: false
        },
        {
            id: 5,
            image: require("assets/images/test-image.png"),
            text: "Manejo del portal <br/> Foundation Medicine®",
            module: "Modulo 5",
            enabled: false
        }
    ]

    return {
        dashboardContent
    }
}

export default useDashboard;