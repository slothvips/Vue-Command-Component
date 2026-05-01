// Shared mock data
export const userData = [
  { id: 1, name: "Alice", email: "zhangsan@example.com", role: "admin" },
  { id: 2, name: "Bob", email: "lisi@example.com", role: "user" },
  { id: 3, name: "Charlie", email: "wangwu@example.com", role: "user" },
];

export const orderData = [
  { id: "ORD001", amount: "¥299", status: "Completed" },
  { id: "ORD002", amount: "¥599", status: "In progress" },
];

export const productData = [
  { name: "Product A", price: "¥99", stock: 100 },
  { name: "Product B", price: "¥199", stock: 50 },
];

export const defaultUser = {
  name: "Alice",
  email: "zhangsan@example.com",
};

export const systemSettings = {
  systemName: "Management System",
  timeout: 30,
  enableLog: true,
};
