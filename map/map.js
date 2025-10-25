// 停车点数据
const parkingSpots = [
    { name: "停车点A", details: "位于S2宿舍楼下", center: { lat: 36.2133, lng: 120.4110 } },
    { name: "停车点B", details: "位于振声苑", center: { lat: 36.9085, lng: 120.4050 } },
    { name: "停车点C", details: "位于图书馆", center: { lat: 35.2133, lng: 121.4122 } },
    { name: "停车点D", details: "位于宋君复体育馆", center: { lat: 34.2533, lng: 119.4550 } }
];

// 车辆数据
const vehicles = [
    { id: "V001", position: { lat: 36.2133, lng: 120.4110 }, battery: 80 },
    { id: "V002", position: { lat: 39.9043, lng: 116.4075 }, battery: 50 },
    { id: "V003", position: { lat: 36.9999, lng: 120.3900 }, battery: 30 },
    { id: "V004", position: { lat: 30.9999, lng: 122.3900 }, battery: 30 },
    { id: "V005", position: { lat: 29.9999, lng: 110.3900 }, battery: 30 },
    { id: "V006", position: { lat: 35.2133, lng: 121.4122  }, battery: 30 },
    { id: "V007", position: { lat: 35.2133, lng: 121.4122  }, battery: 30 }
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