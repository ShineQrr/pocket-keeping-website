import clone from '../lib/clone';

const LOCAL_STORAGE_KEY_NAME = 'recordList';

const recordListModel = {
    data: [] as RecordItem[],
    createItem(record: RecordItem) {
        // 深拷贝
        const recordCopy: RecordItem = clone(record);
        recordCopy.createdAt = new Date();
        // 存储的时候存副本
        this.data.push(recordCopy);
        // 存到localStorage中
        this.save();
    },
    // 获取数据
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY_NAME) || "[]") as RecordItem[];
        return this.data;
    },
    // 保存数据到localStorage中
    save() {
        window.localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(this.data));
    }
}

export default recordListModel;