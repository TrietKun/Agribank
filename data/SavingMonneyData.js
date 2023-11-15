let navigationInstance = null;

export function setNavigationInstance(instance) {
    navigationInstance = instance;
}

var financeList = [
    {
        title: 'Nạp tiền chứng khoán',
        img: require('../assets/heo1.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Chứng khoán Agriseco',
        img: require('../assets/heo2.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
]
export default financeList;