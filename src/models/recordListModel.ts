import clone from '../lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
    data: [] as RecordItem[],
    createItem(record: RecordItem) {
        const recordCopy: RecordItem = clone(record);
        recordCopy.createdAt = new Date();
        // 存储的时候存副本
        this.data.push(recordCopy);
    },
    // 获取数据
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
        return this.data;
    },
    // 保存数据
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export default recordListModel;