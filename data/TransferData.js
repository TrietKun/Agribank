let navigationInstance = null;

export function setNavigationInstance(instance) {
    navigationInstance = instance;
}

var financeList = [
    {
        title: 'Kaedehara Kazuha',
        stk : '62784627834682 ',
        img: require('../assets/ck1.png'),
        onPress: () => {navigationInstance.navigate('Chuyển')},
        name : 'CK nội bộ',
        screen : 'Chuyển'
    },
    {
        title: 'Raiden Shogun',
        stk : '62784627834682 ',
        img: require('../assets/ck2.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')},
        name : 'CK LNH nhanh qua stk',
        screen : 'Thông tin'
    },
    {
        title: 'Kamisato Ayaka',
        stk : '62784627834682 ',
        img: require('../assets/ck3.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')},
        name : 'CK LNH nhanh qua số thẻ',
        screen : 'Thông tin'

    },
    {
        title: 'Kamisato Ayato',
        stk : '627846278093045',
        img: require('../assets/ck4.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')},
        name : 'Chuyển tiền 24/7 mã QR',
        screen : 'Thông tin'

    },
    {
        title: 'Yae Miko',
        stk : '62784627834682 ',
        img: require('../assets/ck5.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')},
        name : 'CK LNH thường',
        screen : 'Thông tin'

    },
 
]
export default financeList;