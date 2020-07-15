import createId from '../lib/createId';

const LOCAL_STORAGE_KEY_NAME = 'tagList';

const tagStore = {
    tagList: [] as Tag[],
    fetchTags() {
        this.tagList = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY_NAME) || '[]');
        return this.tagList;
    },
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    },
    addTag(name: string) {
        const names = this.tagList.map(item => item.name);
        if (names.includes(name)) {
            window.alert('标签名重复了');
            return 'duplicated';
        }
        const id = createId().toString();
        this.tagList.push({ id, name: name });
        this.saveTags();
        window.alert('新增标签成功');
        return 'success';
    },
    removeTag(id: string) {
        const index = this.tagList.findIndex(item => item.id === id);
        this.tagList.splice(index, 1);
        this.saveTags();
        return true;
    },
    updateTag(id: string, name: string) {
        const idList = this.tagList.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.tagList.map(item => item.name);
            if (names.includes(id)) {
                return 'duplicated';
            } else {
                const tag = this.tagList.filter(item => item.id === id)[0];
                tag.name = name;
                this.saveTags();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    saveTags() {
        window.localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(this.tagList));
    }
};

tagStore.fetchTags();

export default tagStore;