/**
 * Internationalization (i18n) module for CyberChef
 * Provides translation support for UI strings
 *
 * @author Localization
 * @license Apache-2.0
 */

/**
 * Translation dictionary
 * Key is the English string, value is the translated string
 */
const translations = {
    // Panel labels
    "Input": "输入",
    "Output": "输出",
    "Recipe": "配方",

    // Actions
    "Bake": "烘焙",
    "Auto Bake": "自动烘焙",
    "Save": "保存",
    "Load": "加载",
    "Close": "关闭",
    "Cancel": "取消",
    "Delete": "删除",
    "Copy": "复制",
    "Clear": "清除",
    "Reset": "重置",
    "Apply": "应用",
    "Add": "添加",
    "Remove": "移除",
    "Edit": "编辑",
    "Search": "搜索",
    "Search...": "搜索...",

    // Status messages
    "pending": "Not baked yet",
    "baking": "Baking",
    "error": "Errored",
    "stale": "Stale (output is out of date)",
    "inactive": "Not baked yet",
    "Not baked yet": "尚未烘焙",
    "Baking": "烘焙中",
    "Errored": "出错",
    "Stale (output is out of date)": "已过期（输出已过时）",

    // Categories & Sections
    "Categories": "分类",
    "Operations": "操作",
    "Favourites": "收藏",
    "Options": "选项",
    "About": "关于",
    "Support": "支持",

    // Settings/Options panel
    "Theme": "主题",
    "Dark": "深色",
    "Light": "浅色",
    "Grid": "网格",
    "List": "列表",

    // Common
    "Name": "名称",
    "Value": "值",
    "Type": "类型",
    "Description": "描述",
    "Step": "步骤",
    "Help": "帮助",
    "Language": "语言",

    // Error messages
    "Error": "错误",
    "Warning": "警告",
    "Info": "信息",
    "Success": "成功",
    "Loading": "加载中",
    "Processing": "处理中",
    "Saving": "保存中",

    // Dialog buttons
    "OK": "确定",
    "Yes": "是",
    "No": "否",
    "Save recipe": "保存配方",
    "Load recipe": "加载配方",

    // Loading messages
    "Proving P = NP...": "证明 P = NP...",
    "Computing 6 x 9...": "计算 6 x 9...",
    "Mining bitcoin...": "挖矿中...",
    "Dividing by 0...": "除以零...",
    "Initialising Skynet...": "初始化天网...",
    "[REDACTED]": "[已编辑]",
    "Downloading more RAM...": "下载更多内存...",
    "Ordering 1s and 0s...": "排序1和0...",
    "Navigating neural network...": "导航神经网络...",
    "Importing machine learning...": "导入机器学习...",
    "Issuing Alice and Bob one-time pads...": "为Alice和Bob发放一次性密码本...",
    "Mining bitcoin cash...": "挖掘比特币现金...",
    "Generating key material by trying to escape vim...": "尝试退出vim来生成密钥...",
    "for i in range(additional): Pylon()": "for i in range(additional): Pylon()",
    "(creating unresolved tension...": "（制造未解之谜...",
    "Symlinking emacs and vim to ed...": "符号链接emacs和vim到ed...",
    "Training branch predictor...": "训练分支预测器...",
    "Timing cache hits...": "计时缓存命中...",
    "Speculatively executing recipes...": "推测性执行配方...",
    "Adding LLM hallucinations...": "添加LLM幻觉...",
    "Decompressing malware...": "解压恶意软件...",
};

/**
 * Current language setting
 */
let currentLang = "zh";

/**
 * Set the current language
 * @param {string} lang - Language code (e.g., 'en', 'zh')
 */
function setLanguage(lang) {
    currentLang = lang;
}

/**
 * Get translation for a string
 * @param {string} str - The string to translate
 * @returns {string} - The translated string or original if not found
 */
function t(str) {
    if (currentLang === "zh" && Object.hasOwn(translations, str)) {
        return translations[str];
    }
    return str;
}

/**
 * Get translation for a string with placeholder substitution
 * @param {string} str - The string to translate
 * @param {Array} args - Arguments to replace placeholders like {0}, {1}
 * @returns {string} - The translated string with placeholders replaced
 */
function tReplace(str, args = []) {
    let result = t(str);
    args.forEach((arg, index) => {
        result = result.replace(new RegExp(`\\{${index}\\}`, "g"), arg);
    });
    return result;
}

export { t, tReplace, setLanguage, translations, currentLang };
export default { t, tReplace, setLanguage, translations, currentLang };
