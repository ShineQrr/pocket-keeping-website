import clone from '@/lib/clone';

const LOCAL_STORAGE_KEY_NAME = 'recordList';

const recordStore = {
    recordList: [] as RecordItem[],
    fetchRecords() {
        this.recordList = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY_NAME) || '[]') as RecordItem[];
        return this.recordList;
    },
    saveRecords() {
        window.localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(this.recordList));
    },
    createRecord(record: RecordItem) {
        const recordCopy: RecordItem = clone(record);
        recordCopy.createdAt = new Date();
        this.recordList && this.recordList.push(recordCopy);
        recordStore.saveRecords();
    },
};

recordStore.fetchRecords();

export default recordStore;