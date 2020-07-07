const localStorageKeyName = 'tagList';
type TagListModel = {
    data: string[];
    fetch: () => string[];
    add: (name: string) => { code: number; message: string };// 1 表示成功 0表示name重复
    save: () => void;
}
const tagListModel: TagListModel = {
    data: [],
    // 获取数据
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
        return this.data;
    },
    add(name: string) {
        if (this.data.includes(name)) {
            return { code: 0, message: 'duplicated' };
        }
        this.data.push(name)
        this.save()
        return { code: 1, message: 'success' };
    },
    // 保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export default tagListModel;