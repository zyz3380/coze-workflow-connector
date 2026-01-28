import { basekit, FieldType, field, FieldComponent, FieldCode } from '@lark-opdev/block-basekit-server-api';
const { t } = field;

/**
 * Coze 工作流连接器
 * 支持调用 Coze 平台的自定义工作流，让用户在飞书多维表格中便捷使用
 */

// 域名白名单配置
basekit.addDomainList([
  'api.coze.cn',      // Coze 国内 API
  'api.coze.com',     // Coze 国际 API
]);

basekit.addField({
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
      component: FieldComponent.Input,
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
      component: FieldComponent.Input,
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
      component: FieldComponent.SingleSelect,
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
      component: FieldComponent.Input,
      props: {
        placeholder: t('param1KeyPlaceholder'),
      },
    },
    {
      key: 'param1_value',
      label: t('param1Value'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('param1ValuePlaceholder'),
      },
    },

    // ========== 动态参数 2 ==========
    {
      key: 'param2_key',
      label: t('param2Key'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('param2KeyPlaceholder'),
      },
    },
    {
      key: 'param2_value',
      label: t('param2Value'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('param2ValuePlaceholder'),
      },
    },

    // ========== 动态参数 3 ==========
    {
      key: 'param3_key',
      label: t('param3Key'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('param3KeyPlaceholder'),
      },
    },
    {
      key: 'param3_value',
      label: t('param3Value'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('param3ValuePlaceholder'),
      },
    },

    // ========== 动态参数 4 ==========
    {
      key: 'param4_key',
      label: t('param4Key'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('param4KeyPlaceholder'),
      },
    },
    {
      key: 'param4_value',
      label: t('param4Value'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('param4ValuePlaceholder'),
      },
    },

    // ========== 动态参数 5 ==========
    {
      key: 'param5_key',
      label: t('param5Key'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('param5KeyPlaceholder'),
      },
    },
    {
      key: 'param5_value',
      label: t('param5Value'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('param5ValuePlaceholder'),
      },
    },
  ],

  // 定义捷径的返回结果类型 - 文本
  resultType: {
    type: FieldType.Text,
  },

  // 执行函数
  execute: async (formItemParams: {
    api_token: string;
    workflow_id: string;
    api_endpoint: { value: string };
    param1_key: string;
    param1_value: any;
    param2_key: string;
    param2_value: any;
    param3_key: string;
    param3_value: any;
    param4_key: string;
    param4_value: any;
    param5_key: string;
    param5_value: any;
  }, context) => {

    // 日志工具函数
    function debugLog(arg: any, showContext = false) {
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
    const fetch: <T = Object>(...arg: Parameters<typeof context.fetch>) => Promise<T | { code: number, error: any, [p: string]: any }> = async (url, init, authId) => {
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
      } catch (e) {
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
    function extractTextFromField(fieldValue: any): string {
      if (!fieldValue) return '';

      if (Array.isArray(fieldValue)) {
        return fieldValue
          .map((item) => {
            if (typeof item === 'string') return item;
            if (item?.text) return item.text;
            if (item?.value) return item.value;
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
      const {
        api_token,
        workflow_id,
        api_endpoint,
        param1_key, param1_value,
        param2_key, param2_value,
        param3_key, param3_value,
        param4_key, param4_value,
        param5_key, param5_value,
      } = formItemParams;

      // ====== 验证必填参数 ======
      if (!api_token) {
        debugLog('错误: 缺少 Coze API Token');
        return {
          code: FieldCode.Success,
          data: '❌ 错误: 缺少 Coze API Token',
        };
      }

      if (!workflow_id) {
        debugLog('错误: 缺少工作流 ID');
        return {
          code: FieldCode.Success,
          data: '❌ 错误: 缺少工作流 ID',
        };
      }

      // ====== 构建动态参数 ======
      const parameters: Record<string, string> = {};

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

      // ====== 发起 API 请求 ======
      interface CozeResponse {
        code?: number;
        msg?: string;
        data?: string;
        debug_url?: string;
        error?: any;
      }

      const result = await fetch<CozeResponse>(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${api_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // 检查请求错误
      if ('error' in result && (result as any).code === -1) {
        debugLog(`请求失败: ${(result as any).error}`);
        return {
          code: FieldCode.Success,
          data: `❌ 请求失败: ${(result as any).error}`,
        };
      }

      // 检查 Coze API 错误
      if (result.code !== 0) {
        debugLog(`Coze API 错误: code=${result.code}, msg=${result.msg}`);
        return {
          code: FieldCode.Success,
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
        } else if (typeof parsedData === 'string') {
          outputData = parsedData;
        } else {
          outputData = JSON.stringify(parsedData);
        }
      } catch {
        // 如果不是 JSON，直接使用原始数据
        debugLog('返回数据不是 JSON 格式，使用原始数据');
      }

      debugLog(`成功获取结果, 长度: ${outputData.length}`);

      return {
        code: FieldCode.Success,
        data: outputData,
      };

    } catch (e) {
      console.log('====error', String(e));
      debugLog({
        '===异常错误': String(e)
      });

      return {
        code: FieldCode.Error,
      };
    }
  },
});

export default basekit;