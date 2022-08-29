export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        showStatus () {
            this.$emit("update:show", false)
        }
    },
}