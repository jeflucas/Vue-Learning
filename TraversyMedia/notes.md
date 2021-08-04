# What is Vue?

Vue is a frontend JavaScript framework for building websites and user interfaces ver y similar to React and Angular.

- Vue is generally used to create single-page apps that run on the client, but can be used to create full stack applications by making HTTP requests to a backend server. Vue is popular with Node.js and Express (MEVN Stack).

- Vue can also run on the server-side by using a SSR framework like Nuxt.

# Why use Vue?

- Create dynamic frontend apps and websites
- Easy learning curve
- Easy to integrate with other projects
- Fast and lightweight
- Virtual DOM
- Extremely popular (and rising)
- Great community

# what should you know first?

Like with any framework, you should be comfortable with te underlying language first. In this case, that is JavaScript.

- JavaScript fundamentals
- Async Programming - Promises
- Array Methods (forEach, map, filter, etc)
- Fetch API/HTTP Requests
- NPM (Node Package Manager)

# Basic Layout of a Vue Component

Components includes a template for markup, logic including any state/data/methods as well as the syling for that component

You can also pass "props" into a component <Header title="Task Tracker" />

<template>
    <header>
        <h1> {{ title }} </h1>
</template>

<script>
    export default {
        props: {
            title: String,
        },
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>
