# 基于Node.js官方镜像
FROM node:14

# 设置容器内的工作目录
WORKDIR /app

# 复制package.json和package-lock.json文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件到容器内
COPY . .

# 构建React应用
RUN npm run build

# 使用Nginx作为web服务器
FROM nginx:stable-alpine

# 从构建阶段复制构建好的文件到Nginx目录
COPY --from=0 /app/build /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动Nginx服务器
CMD ["nginx", "-g", "daemon off;"]
