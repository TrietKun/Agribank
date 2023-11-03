let navigationInstance = null;

export function setNavigationInstance(instance) {
    navigationInstance = instance;
}

var BenaficiaryListData = [
    {
        title: 'Raiden Shogun',
        img: require('../assets/Logo-Agribank-H.png'),
        onPress: () => {navigationInstance.navigate('Home')}
    },
    {
        title: 'Kaedehara Kazuha',
        img: require('../assets/Logo-Agribank-H.png'),
        onPress: () => {navigationInstance.navigate('Home')}
    },
]
export default BenaficiaryListData;