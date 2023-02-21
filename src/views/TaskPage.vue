<script setup>
    import { ref, watch } from 'vue'

    const priority = ref('')
    const status = ref('')
    const inCharge = ref('')
    const done = ref('')
    const startDate = ref(new Date().toISOString().substring(0, 10))
    const endDate = ref(new Date().toISOString().substring(0, 10))
</script>

<template>
    <div class="wrapper">
        <header>
            <h1>Project's Name</h1>
        </header>
        <main>
            <div class="row-1">
                <div class="name-field">
                    <label for="name">Name</label>
                    <input type="text" id="name">
                </div>

                <div class="parent_task-Field">
                    <label for="parent-task">Parent Task</label>
                    <input type="text" id="parent-task">
                </div>
            </div>

            <div class="row-2">
                <div class="description-field">
                    <label for="description">Description</label>
                    <textarea name="description" id="description"></textarea>
                </div>
            </div>

            <div class="footer-field">
                <div class="selected-field">
                    <div class="priority">
                        <div>Priority</div>
                        <select v-model="priority">
                            <option disabled value="">Please select one</option>
                            <option>LOW</option>
                            <option>MEDIUM</option>
                            <option>HIGH</option>
                        </select>
                    </div>
                    <div class="status">
                        <div>Status</div>
                        <select v-model="status">
                            <option disabled value="">Please select one</option>
                            <option>NEW</option>
                            <option>IN-PROGRESS</option>
                            <option>READY FOR REVIEW</option>
                            <option>DONE</option>
                        </select>
                    </div>
                    <div class="in-charge">
                        <div>In-Charge</div>
                        <select v-model="inCharge">
                            <option disabled value="">Please select one</option>
                            <option>Do Doan Vu</option>
                        </select>
                    </div>
                </div>

                <div class="additional-field">
                    <div class="done">
                        <div>Done(%)</div>
                        <select v-model="done">
                            <option disabled value="">Please select one</option>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                            <option>60</option>
                            <option>70</option>
                            <option>80</option>
                            <option>90</option>
                            <option>100</option>
                        </select>
                    </div>
                    <div class="estimate-field">
                        <label for="estimate">Estimate Time</label>
                        <input type="text" id="estimate">
                    </div>
                    <div class="start_date-field">
                        <label for="start_date">Start date</label>
                        <input type="date" id="start_date" v-model="startDate">
                    </div>
                    <div class="end_date-field">
                        <label for="end_date">Due date</label>
                        <input type="date" id="end_date" v-model="endDate">
                    </div>
                </div>
            </div>
            <footer>
                <button>Save</button>
            </footer>
        </main>
    </div>
</template>

<style scoped>
    input, textarea, select {
        padding-left: 5px;
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-top: 10px;
    }

    textarea {
        width: 100%;
        height: 100px;
        resize: none;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        gap:34px;
        padding: 20px;
    }
    
    main {
        display: flex;
        flex-direction: column;
        padding: 0 80px 0;
        gap: 34px;
    }

    .row-1 {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 430px 430px;
    }

    .footer-field {
        display: grid;
        grid-template-columns: 430px 430px;
        justify-content: space-between;
    }

    .selected-field {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 150px 150px;
        grid-template-rows: 1fr 1fr;
        row-gap: 20px;
    }

    .in-charge {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    .additional-field {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 150px 150px;
        row-gap: 20px;
    }

    footer {
        display: flex;
        justify-content: flex-end;
    }

    button {
        background-color: var(--primary);
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        padding: 10px;
        min-width: 200px;
        height: 44px;
    }
</style>