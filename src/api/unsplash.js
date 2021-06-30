import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9OVvHol2hCXalvmRq3XdrPhjZjpJa5JAG1STvxWGLR8',
    },
});
