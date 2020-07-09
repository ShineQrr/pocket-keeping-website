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
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
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
    // 更新数据:将对应的id 更新成对应的name
    update(id, name) {
        const idList = this.data.map(item => item.id);
        if (idList.includes(id)) {
            const names = this.data.map(item => item.name);
            if (names.includes(name)) {
                return 'duplicated';
            } else {
                const tag = this.data.filter(item => item.id === id)[0];
                tag.name = name;
                // 保证id也一致
                // tag.id = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    // 删除数据
    remove(id: string) {
        const remainData = this.data.filter(item => item.id !== id)
        this.data = remainData;
        this.save();
        return true;
    },
    // 保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export default tagListModel;