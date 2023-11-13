let navigationInstance = null;

export function setNavigationInstance(instance) {
    navigationInstance = instance;
}

var financeList = [
    {
        title: 'Chuyển khoản',
        img: require('../assets/TC1.png'),
        onPress: () => {navigationInstance.navigate('Chuyển khoản')}
    },
    {
        title: 'Nạp tiền điện thoại',
        img: require('../assets/TC2.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Thanh toán hóa đơn',
        img: require('../assets/TC3.png'),
        onPress: () => {navigationInstance.navigate('Thanh toán hóa đơn')}
    },
    {
        title: 'Mã thẻ/Data',
        img: require('../assets/TC4.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Tiền gửi trực tuyến',
        img: require('../assets/TC5.png'),
        onPress: 'Thông tin'
    },
    {
        title: 'Chứng khoán',
        img: require('../assets/TC6.png'),
        onPress: () => {navigationInstance.navigate('Chứng khoán')}
    },
    {
        title: 'Nạp tiền dịch vụ',
        img: require('../assets/TC7.png'),
        onPress: 'Thông tin'
    },
    {
        title: 'Gửi tiền mừng',
        img: require('../assets/TC8.png'),
        onPress: 'Thông tin'
    },
    {
        title: 'Nhận tiền kiều hối',
        img: require('../assets/TC9.png'),
        onPress: 'Thông tin'
    },
    {
        title: 'Trả nợ tiền vay',
        img: require('../assets/TC10.png'),
        onPress: 'Thông tin'
    },
    {
        title: 'Bạn bè',
        img: require('../assets/TC11.png'),
        onPress: 'Thông tin'
    },
    {
        title: 'Bảo hiểm Agribank Abic',
        img: require('../assets/TC12.png'),
        onPress: 'Thông tin'
    },
    
]
export default financeList;