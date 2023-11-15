let navigationInstance = null;

export function setNavigationInstance(instance) {
    navigationInstance = instance;
}

var financeList = [
    {
        title: 'Chuyển khoản',
        img: require('../assets/tranfer.png'),
        onPress: () => {navigationInstance.navigate('Chuyển khoản')}
    },
    {
        title: 'Nạp tiền điện thoại',
        img: require('../assets/phoneRecharge.png'),
        onPress: () => {navigationInstance.navigate('Nạp tiền điện thoại')}
    },
    {
        title: 'Thanh toán hóa đơn',
        img: require('../assets/bill.png'),
        onPress: () => {navigationInstance.navigate('Thanh toán hóa đơn')}
    },
    {
        title: 'Mã thẻ/Data',
        img: require('../assets/data.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')}
    },
    {
        title: 'Tiền gửi trực tuyến',
        img: require('../assets/piggy.png'),
        onPress: () => {navigationInstance.navigate('Tiền gửi trực tuyến')}
    },
    {
        title: 'Chứng khoán',
        img: require('../assets/stock.png'),
        onPress: () => {navigationInstance.navigate('Chứng khoán')}
    },
    {
        title: 'Nạp tiền dịch vụ',
        img: require('../assets/service.png'),
        onPress: 'Thông tin'
    },
    {
        title: 'Gửi tiền mừng',
        img: require('../assets/thiep.png'),
        onPress: () => {navigationInstance.navigate('Gửi tiền mừng')}
    },
    {
        title: 'Nhận tiền kiều hối',
        img: require('../assets/currency.png'),
        onPress: 'Thông tin'
    },
    {
        title: 'Trả nợ tiền vay',
        img: require('../assets/vay.png'),
        onPress: 'Thông tin'
    },
    {
        title: 'Bạn bè',
        img: require('../assets/friend.png'),
        onPress: 'Thông tin'
    },
    {
        title: 'Bảo hiểm Agribank Abic',
        img: require('../assets/warranty.png'),
        onPress: 'Thông tin'
    },
    
]
export default financeList;