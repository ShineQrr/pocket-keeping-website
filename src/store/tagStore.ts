import tagListModel from '@/models/tagListModel';

export default {
    tagList: tagListModel.fetch(),
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    },
    addTag: (name: string) => {
        const res = tagListModel.createItem(name);
        if (res.code == 0) {
            window.alert("标签名重复！");
        } else if (res.code == 1) {
            window.alert("新增标签成功！");
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    }

}; 