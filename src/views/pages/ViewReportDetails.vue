<template>
    <div class="container">
        <header>
            <h1 class="report__header">
                Design the database for EMS project
            </h1>

            <div class="report__info">
                <p class="report__created_date">
                    12/02/2022
                </p>
                <p class="report__author__name">Hai</p>
            </div>
        </header>

        <div class="report__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Sed viverra tellus in hac habitasse platea. Dictumst vestibulum rhoncus est pellentesque elit
            ullamcorper. Tortor at risus viverra adipiscing at. Id venenatis a condimentum vitae sapien pellentesque. Ornare
            aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Euismod quis viverra nibh cras pulvinar
            mattis. Placerat vestibulum lectus mauris ultrices eros in cursus. Fermentum posuere urna nec tincidunt
            praesent. Faucibus ornare suspendisse sed nisi lacus sed. Volutpat odio facilisis mauris sit amet massa.
            Suspendisse interdum consectetur libero id faucibus nisl tincidunt. At ultrices mi tempus imperdiet nulla
            malesuada pellentesque. Nullam non nisi est sit amet facilisis magna etiam tempor. Interdum velit euismod in
            pellentesque massa placerat. Vitae et leo duis ut diam. Malesuada fames ac turpis egestas integer eget aliquet
            nibh.
        </div>

        <button class="report__mark_as_read_btn">Mark as read</button>
</div></template>

<script setup>

</script>

<style lang="scss" scoped>
    .container {
        max-width: 1000px;
        padding: 50px;
        .report__info {
            display: flex;
            gap: 20px;
        }
    }

    .report__content {
        margin-top: 50px;
    }

    .report__mark_as_read_btn {
        margin-top: 50px;
        width: fit-content;
        padding: 10px 20px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background: var(--primary-hover);
        }
    }
</style> 