const localStorageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
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
        const nameList = this.data.map(item => item.name)
        if (nameList.includes(name)) {
            return { code: 0, message: 'duplicated' };
        }
        this.data.push({ id: name, name: name })
        this.save()
        return { code: 1, message: 'success' };
    },
    // 保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export default tagListModel;