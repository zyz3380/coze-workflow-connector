"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const { t } = block_basekit_server_api_1.field;
/**
 * Coze 工作流连接器
 * 支持调用 Coze 平台的自定义工作流，让用户在飞书多维表格中便捷使用
 */
// 域名白名单配置
block_basekit_server_api_1.basekit.addDomainList([
    'api.coze.cn', // Coze 国内 API
    'api.coze.com', // Coze 国际 API
]);
block_basekit_server_api_1.basekit.addField({
    // 定义捷径的 i18n 语言资源
    i18n: {
        messages: {
            'zh-CN': {
                // 基础配置
                apiToken: 'Coze API Token',
                apiTokenPlaceholder: '请输入您的 Coze Personal Access Token',
                apiTokenTooltip: '在 Coze 平台的"API 凭证"页面获取',
                workflowId: '工作流 ID',
                workflowIdPlaceholder: '请输入工作流 ID',
                workflowIdTooltip: '在 Coze 工作流编辑页面的 URL 中获取',
                apiEndpoint: 'API 版本',
                apiEndpointChina: '国内版 (api.coze.cn)',
                apiEndpointGlobal: '国际版 (api.coze.com)',
                // 动态参数
                param1Key: '参数名①',
                param1KeyPlaceholder: '如: query',
                param1Value: '参数内容①',
                param1ValuePlaceholder: '输入固定值或点右侧引用字段',
                param2Key: '参数名②',
                param2KeyPlaceholder: '可选',
                param2Value: '参数内容②',
                param2ValuePlaceholder: '输入固定值或点右侧引用字段',
                param3Key: '参数名③',
                param3KeyPlaceholder: '可选',
                param3Value: '参数内容③',
                param3ValuePlaceholder: '输入固定值或点右侧引用字段',
                param4Key: '参数名④',
                param4KeyPlaceholder: '可选',
                param4Value: '参数内容④',
                param4ValuePlaceholder: '输入固定值或点右侧引用字段',
                param5Key: '参数名⑤',
                param5KeyPlaceholder: '可选',
                param5Value: '参数内容⑤',
                param5ValuePlaceholder: '输入固定值或点右侧引用字段',
            },
            'en-US': {
                // Basic config
                apiToken: 'Coze API Token',
                apiTokenPlaceholder: 'Enter your Coze Personal Access Token',
                apiTokenTooltip: 'Get from "API Credentials" page on Coze platform',
                workflowId: 'Workflow ID',
                workflowIdPlaceholder: 'Enter workflow ID',
                workflowIdTooltip: 'Get from the URL of Coze workflow editor',
                apiEndpoint: 'API Version',
                apiEndpointChina: 'China (api.coze.cn)',
                apiEndpointGlobal: 'Global (api.coze.com)',
                // Dynamic parameters
                param1Key: 'Param Name ①',
                param1KeyPlaceholder: 'e.g.: query',
                param1Value: 'Param Value ①',
                param1ValuePlaceholder: 'Select field',
                param2Key: 'Param Name ②',
                param2KeyPlaceholder: 'Optional',
                param2Value: 'Param Value ②',
                param2ValuePlaceholder: 'Select field',
                param3Key: 'Param Name ③',
                param3KeyPlaceholder: 'Optional',
                param3Value: 'Param Value ③',
                param3ValuePlaceholder: 'Select field',
                param4Key: 'Param Name ④',
                param4KeyPlaceholder: 'Optional',
                param4Value: 'Param Value ④',
                param4ValuePlaceholder: 'Select field',
                param5Key: 'Param Name ⑤',
                param5KeyPlaceholder: 'Optional',
                param5Value: 'Param Value ⑤',
                param5ValuePlaceholder: 'Select field',
            },
            'ja-JP': {
                // 基本設定
                apiToken: 'Coze API トークン',
                apiTokenPlaceholder: 'Coze Personal Access Token を入力',
                apiTokenTooltip: 'Coze プラットフォームの「API 認証情報」ページで取得',
                workflowId: 'ワークフロー ID',
                workflowIdPlaceholder: 'ワークフロー ID を入力',
                workflowIdTooltip: 'Coze ワークフローエディターの URL から取得',
                apiEndpoint: 'API バージョン',
                apiEndpointChina: '中国版 (api.coze.cn)',
                apiEndpointGlobal: '国際版 (api.coze.com)',
                // 動的パラメータ
                param1Key: 'パラメータ名①',
                param1KeyPlaceholder: '例: query',
                param1Value: 'パラメータ値①',
                param1ValuePlaceholder: 'フィールド選択',
                param2Key: 'パラメータ名②',
                param2KeyPlaceholder: 'オプション',
                param2Value: 'パラメータ値②',
                param2ValuePlaceholder: 'フィールド選択',
                param3Key: 'パラメータ名③',
                param3KeyPlaceholder: 'オプション',
                param3Value: 'パラメータ値③',
                param3ValuePlaceholder: 'フィールド選択',
                param4Key: 'パラメータ名④',
                param4KeyPlaceholder: 'オプション',
                param4Value: 'パラメータ値④',
                param4ValuePlaceholder: 'フィールド選択',
                param5Key: 'パラメータ名⑤',
                param5KeyPlaceholder: 'オプション',
                param5Value: 'パラメータ値⑤',
                param5ValuePlaceholder: 'フィールド選択',
            },
        }
    },
    // 定义捷径的入参表单
    formItems: [
        // ========== 基础配置 ==========
        // Coze API Token
        {
            key: 'api_token',
            label: t('apiToken'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('apiTokenPlaceholder'),
            },
            tooltips: [
                { type: 'text', content: t('apiTokenTooltip') },
            ],
            validator: {
                required: true,
            },
        },
        // 工作流 ID
        {
            key: 'workflow_id',
            label: t('workflowId'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('workflowIdPlaceholder'),
            },
            tooltips: [
                { type: 'text', content: t('workflowIdTooltip') },
            ],
            validator: {
                required: true,
            },
        },
        // API 版本（国内版/国际版）
        {
            key: 'api_endpoint',
            label: t('apiEndpoint'),
            component: block_basekit_server_api_1.FieldComponent.SingleSelect,
            props: {
                options: [
                    { label: t('apiEndpointChina'), value: 'china' },
                    { label: t('apiEndpointGlobal'), value: 'global' },
                ],
            },
            validator: {
                required: true,
            },
        },
        // ========== 动态参数 1 ==========
        {
            key: 'param1_key',
            label: t('param1Key'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('param1KeyPlaceholder'),
            },
        },
        {
            key: 'param1_value',
            label: t('param1Value'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('param1ValuePlaceholder'),
            },
        },
        // ========== 动态参数 2 ==========
        {
            key: 'param2_key',
            label: t('param2Key'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('param2KeyPlaceholder'),
            },
        },
        {
            key: 'param2_value',
            label: t('param2Value'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('param2ValuePlaceholder'),
            },
        },
        // ========== 动态参数 3 ==========
        {
            key: 'param3_key',
            label: t('param3Key'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('param3KeyPlaceholder'),
            },
        },
        {
            key: 'param3_value',
            label: t('param3Value'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('param3ValuePlaceholder'),
            },
        },
        // ========== 动态参数 4 ==========
        {
            key: 'param4_key',
            label: t('param4Key'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('param4KeyPlaceholder'),
            },
        },
        {
            key: 'param4_value',
            label: t('param4Value'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('param4ValuePlaceholder'),
            },
        },
        // ========== 动态参数 5 ==========
        {
            key: 'param5_key',
            label: t('param5Key'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('param5KeyPlaceholder'),
            },
        },
        {
            key: 'param5_value',
            label: t('param5Value'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('param5ValuePlaceholder'),
            },
        },
    ],
    // 定义捷径的返回结果类型 - 文本
    resultType: {
        type: block_basekit_server_api_1.FieldType.Text,
    },
    // 执行函数
    execute: async (formItemParams, context) => {
        // 日志工具函数
        function debugLog(arg, showContext = false) {
            if (!showContext) {
                console.log(JSON.stringify({ arg, logID: context.logID }), '\n');
                return;
            }
            console.log(JSON.stringify({
                formItemParams,
                context,
                arg
            }), '\n');
        }
        debugLog('=====Coze 工作流连接器 start=====v1', true);
        // 封装 fetch 函数
        const fetch = async (url, init, authId) => {
            try {
                const res = await context.fetch(url, init, authId);
                const resText = await res.text();
                debugLog({
                    [`===fetch res： ${url} 接口返回结果`]: {
                        url,
                        resText: resText.slice(0, 2000),
                    }
                });
                return JSON.parse(resText);
            }
            catch (e) {
                debugLog({
                    [`===fetch error： ${url} 接口返回错误`]: {
                        url,
                        error: e
                    }
                });
                return {
                    code: -1,
                    error: e
                };
            }
        };
        // 从字段值中提取文本内容
        function extractTextFromField(fieldValue) {
            if (!fieldValue)
                return '';
            if (Array.isArray(fieldValue)) {
                return fieldValue
                    .map((item) => {
                    if (typeof item === 'string')
                        return item;
                    if (item?.text)
                        return item.text;
                    if (item?.value)
                        return item.value;
                    return String(item);
                })
                    .join('\n');
            }
            if (typeof fieldValue === 'object') {
                return fieldValue.text || fieldValue.value || JSON.stringify(fieldValue);
            }
            return String(fieldValue);
        }
        try {
            const { api_token, workflow_id, api_endpoint, param1_key, param1_value, param2_key, param2_value, param3_key, param3_value, param4_key, param4_value, param5_key, param5_value, } = formItemParams;
            // ====== 验证必填参数 ======
            if (!api_token) {
                debugLog('错误: 缺少 Coze API Token');
                return {
                    code: block_basekit_server_api_1.FieldCode.Success,
                    data: '❌ 错误: 缺少 Coze API Token',
                };
            }
            if (!workflow_id) {
                debugLog('错误: 缺少工作流 ID');
                return {
                    code: block_basekit_server_api_1.FieldCode.Success,
                    data: '❌ 错误: 缺少工作流 ID',
                };
            }
            // ====== 构建动态参数 ======
            const parameters = {};
            // 添加参数1
            if (param1_key && param1_key.trim()) {
                parameters[param1_key.trim()] = extractTextFromField(param1_value);
            }
            // 添加参数2
            if (param2_key && param2_key.trim()) {
                parameters[param2_key.trim()] = extractTextFromField(param2_value);
            }
            // 添加参数3
            if (param3_key && param3_key.trim()) {
                parameters[param3_key.trim()] = extractTextFromField(param3_value);
            }
            // 添加参数4
            if (param4_key && param4_key.trim()) {
                parameters[param4_key.trim()] = extractTextFromField(param4_value);
            }
            // 添加参数5
            if (param5_key && param5_key.trim()) {
                parameters[param5_key.trim()] = extractTextFromField(param5_value);
            }
            debugLog(`构建的参数: ${JSON.stringify(parameters)}`);
            // ====== 确定 API 端点 ======
            const endpointValue = api_endpoint?.value || 'china';
            const baseUrl = endpointValue === 'global'
                ? 'https://api.coze.com'
                : 'https://api.coze.cn';
            const url = `${baseUrl}/v1/workflow/run`;
            debugLog(`准备调用 Coze 工作流: url=${url}, workflow_id=${workflow_id}`);
            // ====== 构建请求体 ======
            const payload = {
                workflow_id: workflow_id,
                parameters: parameters,
            };
            debugLog(`请求体: ${JSON.stringify(payload)}`);
            const result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${api_token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            // 检查请求错误
            if ('error' in result && result.code === -1) {
                debugLog(`请求失败: ${result.error}`);
                return {
                    code: block_basekit_server_api_1.FieldCode.Success,
                    data: `❌ 请求失败: ${result.error}`,
                };
            }
            // 检查 Coze API 错误
            if (result.code !== 0) {
                debugLog(`Coze API 错误: code=${result.code}, msg=${result.msg}`);
                return {
                    code: block_basekit_server_api_1.FieldCode.Success,
                    data: `❌ Coze 错误 (${result.code}): ${result.msg || '未知错误'}`,
                };
            }
            // ====== 解析返回结果 ======
            let outputData = result.data || '';
            // 尝试解析 JSON 数据，自动提取 data 字段
            try {
                const parsedData = JSON.parse(outputData);
                // 自动提取 data 字段的内容
                if (parsedData && parsedData.data !== undefined) {
                    outputData = String(parsedData.data);
                }
                else if (typeof parsedData === 'string') {
                    outputData = parsedData;
                }
                else {
                    outputData = JSON.stringify(parsedData);
                }
            }
            catch {
                // 如果不是 JSON，直接使用原始数据
                debugLog('返回数据不是 JSON 格式，使用原始数据');
            }
            debugLog(`成功获取结果, 长度: ${outputData.length}`);
            return {
                code: block_basekit_server_api_1.FieldCode.Success,
                data: outputData,
            };
        }
        catch (e) {
            console.log('====error', String(e));
            debugLog({
                '===异常错误': String(e)
            });
            return {
                code: block_basekit_server_api_1.FieldCode.Error,
            };
        }
    },
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBNEc7QUFDNUcsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLGdDQUFLLENBQUM7QUFFcEI7OztHQUdHO0FBRUgsVUFBVTtBQUNWLGtDQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3BCLGFBQWEsRUFBTyxjQUFjO0lBQ2xDLGNBQWMsRUFBTSxjQUFjO0NBQ25DLENBQUMsQ0FBQztBQUVILGtDQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2Ysa0JBQWtCO0lBQ2xCLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRTtnQkFDUCxPQUFPO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG1CQUFtQixFQUFFLGtDQUFrQztnQkFDdkQsZUFBZSxFQUFFLHdCQUF3QjtnQkFDekMsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLHFCQUFxQixFQUFFLFdBQVc7Z0JBQ2xDLGlCQUFpQixFQUFFLHlCQUF5QjtnQkFDNUMsV0FBVyxFQUFFLFFBQVE7Z0JBQ3JCLGdCQUFnQixFQUFFLG1CQUFtQjtnQkFDckMsaUJBQWlCLEVBQUUsb0JBQW9CO2dCQUV2QyxPQUFPO2dCQUNQLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixvQkFBb0IsRUFBRSxVQUFVO2dCQUNoQyxXQUFXLEVBQUUsT0FBTztnQkFDcEIsc0JBQXNCLEVBQUUsZUFBZTtnQkFFdkMsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLG9CQUFvQixFQUFFLElBQUk7Z0JBQzFCLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixzQkFBc0IsRUFBRSxlQUFlO2dCQUV2QyxTQUFTLEVBQUUsTUFBTTtnQkFDakIsb0JBQW9CLEVBQUUsSUFBSTtnQkFDMUIsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLHNCQUFzQixFQUFFLGVBQWU7Z0JBRXZDLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixv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