# Coze 工作流连接器

> 飞书多维表格字段捷径插件 - 便捷调用 Coze 平台的自定义工作流

## 🌟 功能特性

- ✅ **连接 Coze 工作流**：一键调用您在 Coze 平台开发的任意工作流
- ✅ **动态参数配置**：支持最多 5 组自定义参数，参数名和值都可灵活设置
- ✅ **字段引用**：参数值可直接引用多维表格中的其他字段
- ✅ **结果提取**：可指定从工作流返回结果中提取特定字段
- ✅ **多语言支持**：中文、英文、日文界面
- ✅ **国内外兼容**：同时支持 api.coze.cn（国内）和 api.coze.com（国际）

## 📦 项目结构

```
.
├── src/
│   └── index.ts          # 插件核心代码
├── test/
│   └── index.ts          # 测试文件
├── config.json           # 本地调试配置
├── package.json          # 项目依赖
├── tsconfig.json         # TypeScript 配置
└── README.md             # 说明文档
```

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 本地调试

```bash
npm run start
```

服务将在 `http://localhost:8080` 启动。

### 3. 在飞书中调试

1. 打开飞书多维表格
2. 安装「字段捷径调试助手」插件
3. 点击「FaaS 调试」→「打开面板」
4. 配置插件参数并保存
5. 点击「调试」按钮测试

### 4. 打包发布

```bash
npm run pack
```

生成的 zip 文件位于 `output/` 目录。

## ⚙️ 配置说明

### 必填配置

| 配置项 | 说明 |
|--------|------|
| **Coze API Token** | 在 Coze 平台的"API 凭证"页面获取 Personal Access Token |
| **工作流 ID** | 在 Coze 工作流编辑页面的 URL 中获取 |

### 可选配置

| 配置项 | 说明 |
|--------|------|
| **API 端点** | 默认为 `https://api.coze.cn`，国际版用户改为 `https://api.coze.com` |
| **参数 1-5** | 根据工作流需要配置参数名和参数值 |
| **输出字段** | 从返回 JSON 中提取指定字段的值 |

### 动态参数示例

假设您的 Coze 工作流需要以下参数：
```json
{
  "query": "用户输入的问题",
  "language": "zh-CN",
  "max_length": "500"
}
```

则配置如下：
- 参数1 名称：`query`，值：选择表格中的文本字段
- 参数2 名称：`language`，值：输入 `zh-CN`
- 参数3 名称：`max_length`，值：输入 `500`

## 🔑 获取 Coze API Token

1. 登录 [Coze 平台](https://www.coze.cn/)
2. 点击右上角头像 → 「API 凭证」
3. 创建新的 Personal Access Token
4. 复制 Token（以 `sat_` 开头）

## 📝 获取工作流 ID

1. 在 Coze 平台打开您的工作流
2. 查看浏览器地址栏 URL
3. 工作流 ID 是 URL 中的数字部分，如：`7535289231356035112`

## 🔧 本地调试配置

修改 `config.json` 文件：

```json
{
  "authorizations": [],
  "formItemParams": {
    "api_token": "sat_xxxxxxxx",
    "workflow_id": "7535289231356035112",
    "api_endpoint": "https://api.coze.cn",
    "param1_key": "query",
    "param1_value": [{ "type": "text", "text": "测试内容" }],
    "param2_key": "",
    "param2_value": null,
    "output_key": ""
  }
}
```

## 📄 API 请求格式

插件会发送以下格式的请求到 Coze：

```bash
curl -X POST 'https://api.coze.cn/v1/workflow/run' \
-H "Authorization: Bearer sat_xxxxx" \
-H "Content-Type: application/json" \
-d '{
  "workflow_id": "7535289231356035112",
  "parameters": {
    "query": "用户输入内容",
    "other_param": "其他参数值"
  }
}'
```

## ⚠️ 注意事项

- ⚠️ API Token 请妥善保管，不要泄露
- ⚠️ 确保工作流已发布为 API 模式
- ⚠️ 参数名需要与工作流中定义的输入变量名完全一致
- ⚠️ 本地调试模式只会处理第一行数据

## 📜 License

MIT

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！