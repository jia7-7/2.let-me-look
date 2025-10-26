# 个人网站题目

## 💡 设计思路

### 1. 页面结构规划  
个人网站  
├── 头部区域 (Header)  
│ ├── 头像  
│ ├── 昵称  
│ ├── 简短描述  
│ └── 邮箱  
├── 主体内容 (Main Content)  
│ ├── 关于我 (About Me)  
│ └── 我的爱好 (Hobbies)  
└── 页脚 (Footer)   

### 2. 技术选择
- **HTML**：语义化标签，提高可访问性
- **CSS**：现代布局（Flexbox/Grid）
- **Font Awesome**：矢量图标，提升视觉效果
- **静态部署**：使用vercel部署
- >2-let-me-look.vercel.app

# 电瓶车停车信息  

## 💡 设计思路  

### 第一步：数据准备

在js中定义每个停车点和每一辆电瓶车，并给它们属性，包括位置、电量、编号等


### 第二步：核心功能实现
1. 距离计算函数
   使用Haversine公式计算球面距离

   输入：两个经纬度坐标点

   输出：两点间的直线距离（米）

2. 车辆统计逻辑
   遍历每个停车点

   对每个停车点，遍历所有车辆

   计算车辆到停车点中心的距离

   距离<10米的车辆计入该停车点

   为停车点添加vehicleCount属性

### 第三步：UI构建
#### HTML结构设计
页面标题区域

停车点信息展示容器

采用卡片式布局展示每个停车点

#### CSS样式设计
进行美观

#### 调用js
用js动态生成html内容  


## 🎨加分项  
本人后端不是很会，只做了响应式设计

### 手机端：

   单列垂直布局

   更紧凑的卡片设计

   优化的小字体

   最大化内容显示区域

#### 根据以上特点有了css中的代码  

```
@media (max-width: 480px) {
    #parking-list {
        grid-template-columns: 1fr;/*占有可用空间的一列*/
        gap: 10px;
    }
    body {
        padding: 10px;
    }
    .parking-item {
        padding: 15px;
        font-size: 14px;
    }
    h1 {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
}  
```


### 第四步：引入百度地图API  

本人先注册了百度地图开发者，获取了API，并在html中引入  

（借助了附件中的绝大部分内容与AI，掌握了一点API的知识，比如如何引入，展示加载信息，怎么调用json中的数据）  

一点坎坷：一开始直接用sript引入json发现没有成功，询问AI后用fetch引入收获了成功  

## 🎨加分项    
利用提示的infowindows等实现了信息交互功能  
```
 // 添加信息窗口
const infoWindow = new BMap.InfoWindow(`
   <div style="padding: 10px; min-width: 200px;">
      <h3 style="margin: 0 0 10px 0; color: #333;">${properties.name}</h3>
      <p style="margin: 5px 0; color: #666;">${properties.address}</p>
</div>
`);
                
polygon.addEventListener("click", function() {
this.openInfoWindow(infoWindow);
```

