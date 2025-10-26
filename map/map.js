// 停车点数据
const parkingSpots = [
    { name: "凤凰居1号宿舍楼下", details: "凤凰居1号楼北侧指定停车区", center: { lat:  36.3593, lng: 120.6846 } },
    { name: "图书馆南门", details: "图书馆南门入口西侧", center: { lat: 36.3659, lng: 120.6836 } },
    { name: "教学楼", details: "教学楼东楼", center: { lat: 36.3627, lng: 120.6823 } },
    { name: "食堂西门", details: "食堂北门出口处", center: { lat: 36.3598, lng: 120.6878 } },
    { name: "校医院北侧", details: "校医院西侧非机动车停放区", center: { lat: 36.3587, lng:120.6851 } },
    { name: "体育馆东门", details: "体育馆东门入口南侧", center: { lat: 36.3589, lng: 120.6813 } }
];

// 车辆数据
const vehicles = [
    { id: "MT-SDU-001", position: { lat: 36.3592, lng: 120.6845 }, battery: 87, status: "可用" },
    { id: "MT-SDU-002", position: { lat: 36.3593, lng: 120.6847 }, battery: 42, status: "可用" },
    { id: "MT-SDU-003", position: { lat: 36.3594, lng: 120.6844 }, battery: 95, status: "可用" },
    { id: "MT-SDU-004", position: { lat: 36.3658, lng: 120.6835 }, battery: 63, status: "可用" },
    { id: "MT-SDU-005", position: { lat: 36.3659, lng: 120.6837 }, battery: 29, status: "可用" },
    { id: "MT-SDU-006", position: { lat: 36.3660, lng: 120.6836 }, battery: 78, status: "可用" },
    { id: "MT-SDU-007", position: { lat: 36.3657, lng: 120.6834 }, battery: 15, status: "待充电" },
    { id: "MT-SDU-008", position: { lat: 36.3626, lng: 120.6822 }, battery: 91, status: "可用" },
    { id: "MT-SDU-009", position: { lat: 36.3627, lng: 120.6824 }, battery: 55, status: "可用" },
    { id: "MT-SDU-010", position: { lat: 36.3628, lng: 120.6823 }, battery: 33, status: "可用" },
    { id: "MT-SDU-011", position: { lat: 36.3625, lng: 120.6821 }, battery: 67, status: "可用" },
    { id: "MT-SDU-012", position: { lat: 36.3626, lng: 120.6825 }, battery: 8, status: "待充电" },
    { id: "MT-SDU-013", position: { lat: 36.3597, lng: 120.6877 }, battery: 72, status: "可用" },
    { id: "MT-SDU-014", position: { lat: 36.3598, lng: 120.6879 }, battery: 49, status: "可用" },
    { id: "MT-SDU-015", position: { lat: 36.3599, lng: 120.6876 }, battery: 93, status: "可用" },
    { id: "MT-SDU-016", position: { lat: 36.3596, lng: 120.6880 }, battery: 22, status: "可用" },
    { id: "MT-SDU-017", position: { lat: 36.3586, lng: 120.6850 }, battery: 58, status: "可用" },
    { id: "MT-SDU-018", position: { lat: 36.3588, lng: 120.6852 }, battery: 81, status: "可用" },
    { id: "MT-SDU-019", position: { lat: 36.3587, lng: 120.6849 }, battery: 11, status: "待充电" },
    { id: "MT-SDU-020", position: { lat: 36.3588, lng: 120.6812 }, battery: 66, status: "可用" },
    { id: "MT-SDU-021", position: { lat: 36.3589, lng: 120.6814 }, battery: 37, status: "可用" },
    { id: "MT-SDU-022", position: { lat: 36.3590, lng: 120.6813 }, battery: 98, status: "可用" },
    { id: "MT-SDU-023", position: { lat: 36.3587, lng: 120.6811 }, battery: 45, status: "可用" }
];
//Haversine公式计算两点距离
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371000; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; 
}
parkingSpots.forEach(spot => {
    let count = 0;
    vehicles.forEach(vehicle => {
        const distance = calculateDistance(
            spot.center.lat, spot.center.lng,
            vehicle.position.lat, vehicle.position.lng
        );
        if (distance < 10) {
            count++;
        }
    });
    spot.vehicleCount = count; 
});
const parkingList = document.getElementById('parking-list');
parkingSpots.forEach(spot => {
    const item = document.createElement('div');
    item.className = 'parking-item';
    item.innerHTML = `
        <div class="parking-name">${spot.name}</div>
        <div class="parking-details">${spot.details}</div>
        <div class="parking-center">中心点: 北纬${spot.center.lat}, 东经${spot.center.lng}</div>
        <div class="vehicle-count">车辆数: ${spot.vehicleCount}</div>
        
    `;
    parkingList.appendChild(item);
});
