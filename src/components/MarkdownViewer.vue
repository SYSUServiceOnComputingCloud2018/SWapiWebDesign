<template>
    
</template>

<script>
import axios from 'axios'
import VueMarkdown from 'vue-markdown'

export default
{
    name: 'md-viewer',
    // props: ["src"],
    data: function()
    {
        return ({"mdText": ""});
    },
    components: {
        'vue-markdown': VueMarkdown
    },
    mounted()
    {
        axios.get(this.src).then(response => {this.mdText = response.data})
    }
}
</script>
