import { testField, createFieldContext } from "@lark-opdev/block-basekit-server-api";

async function run() {
    const context = await createFieldContext();
    testField({
        api_token: 'sat_xxxxxxxx',
        workflow_id: '7535289231356035112',
        api_endpoint: 'https://api.coze.cn',
        param1_key: 'query',
        param1_value: [{ type: 'text', text: '测试内容' }],
        param2_key: '',
        param2_value: null,
        param3_key: '',
        param3_value: null,
        param4_key: '',
        param4_value: null,
        param5_key: '',
        param5_value: null,
        output_key: '',
    }, context as any);
}

run();
