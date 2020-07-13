type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
};

type Tag = {
    id: string;
    name: string;
}

type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    createItem: (name: string) => { code: number; message: string };// 1 表示成功 0表示name重复
    save: () => void;
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
}

interface Window {
    tagList: Tag[];
    addTag: (name: string) => void;
    findTag: (id: string) => Tag | undefined;
    removeTag: (id: string) => boolean;
    updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
}