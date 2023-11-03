let navigationInstance = null;

export function setNavigationInstance(instance) {
    navigationInstance = instance;
}

var financeList = [
    {
        title: 'Kaedehara Kazuha',
        stk : '62784627834682 ',
        img: require('../assets/ck1.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Raiden Shogun',
        stk : '62784627834682 ',
        img: require('../assets/ck2.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Kamisato Ayaka',
        stk : '62784627834682 ',
        img: require('../assets/ck3.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Kamisato Ayato',
        stk : '627846278093045',
        img: require('../assets/ck4.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Yae Miko',
        stk : '62784627834682 ',
        img: require('../assets/ck5.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Ataraki Itto',
        stk : '62784627834682 ',
        img: require('../assets/ck5.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Yoimiya',
        stk : '62784627834682 ',
        img: require('../assets/ck5.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Sayu',
        stk : '62784627834682 ',
        img: require('../assets/ck5.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Sangonomiya Kokomi',
        stk : '62784627834682 ',
        img: require('../assets/ck5.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
]
export default financeList;