## 测试实现一个nestjs的vercel调用程序

npm install -g @nestjs/cli

nest new my-nest-app

## 改造nestjs项目成为api的serverless服务

## 部署测试命令

npx vercel

## 报错部署：

### 作为表达式调用时，无法解析方法修饰器的签名。

运行时将使用 2 个自变量调用修饰器，但修饰器需要 3 个。ts(1241)
lib.decorators.legacy.d.ts(21, 82): 未提供 "descriptor" 的自变量。
作为表达式调用时，无法解析方法修饰器的签名。
这里导致@Get写法不能用：
解决方案：
tsconfig.json添加：
"experimentalDecorators": true
