import { defineStore } from "pinia";

export const useInfoExif = defineStore("exif", {
    state: () => ({
        exifData: null || ''
    }),
    actions: {
        setExifData(data: any){
            this.exifData = data
        }
    }
})