export declare const useCodeCopy: () => {
    copyContent: import("vue").Ref<string, string>;
    clickCopy: (value: string) => Promise<void>;
};
