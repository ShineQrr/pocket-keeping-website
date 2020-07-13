import createId from '../lib/createId';

const LOCAL_STORAGE_KEY_NAME = 'tagList';

const tagListModel: TagListModel = {
    data: [],
    // 获取数据
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY_NAME) || "[]");
        return this.data;
    },
    createItem(name: string) {
        const nameList = this.data.map(item => item.name)
        // 标签名不可重复
        if (nameList.includes(name)) {
            return { code: 0, message: 'duplicated' };
        } else {
            const id = createId().toString();
            this.data.push({ id, name })
            this.save()
            return { code: 1, message: 'success' };
        }
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
        const index = this.data.findIndex(item => item.id === id);
        this.data.splice(index, 1);
        this.save();
        return true;
    },
    // 保存数据
    save() {
        window.localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(this.data));
    }
}

export default tagListModel;