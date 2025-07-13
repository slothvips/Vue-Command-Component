// 共享的模拟数据
export const userData = [
  { id: 1, name: "张三", email: "zhangsan@example.com", role: "admin" },
  { id: 2, name: "李四", email: "lisi@example.com", role: "user" },
  { id: 3, name: "王五", email: "wangwu@example.com", role: "user" },
];

export const orderData = [
  { id: "ORD001", amount: "¥299", status: "已完成" },
  { id: "ORD002", amount: "¥599", status: "进行中" },
];

export const productData = [
  { name: "商品A", price: "¥99", stock: 100 },
  { name: "商品B", price: "¥199", stock: 50 },
];

export const defaultUser = {
  name: "张三",
  email: "zhangsan@example.com",
};

export const systemSettings = {
  systemName: "管理系统",
  timeout: 30,
  enableLog: true,
};
