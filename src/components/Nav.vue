<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="javascript:void(0)">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse nav_wrap" id="mynavbar">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="handleClick('banner')">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="handleClick('main')">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="handleClick('bottom')">Works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="handleClick('footer')">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    props: {
        handleNavClick: {
            type: Function,
            required: true
        }
    },
    methods: {
        handleClick(sectionId) {
            // Pass the sectionId to the handleNavClick function defined in the parent component
            this.handleNavClick(sectionId);
        }
    }
}

</script>